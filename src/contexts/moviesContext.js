import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies } from "../api/tmdb";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favourite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favourite: true } : m
        ),
        upcoming: [...state.upcoming],
      };
    case "remove-favourite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favourite: false } : m
        ),
        upcoming: [...state.upcoming],
      };
    case "add-wishlist":
      return {
        movies: state.movies.map((m) => {
          // if(m.id === action.payload.movieId) {
          //   console.log(`${m.id} matches ${action.payload.movieId}`)
          //   return {...m, wishlist_ids: [0 , 1]}
          // } else {
          //   console.log(`${m.id} does not match ${action.payload.movieId}`)
          //   return m
          // }
          return (m.id === action.payload.movieId) ? {...m, wishlist_ids: [0, 1]} : m
        }
        ),
        upcoming: [...state.upcoming],
      };
    case "remove-wishlist":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movieId ? { ...m, wishlist_ids: [
          ...m.wishlist_ids.filter(id => id != action.payload.wishlistId)
          ] } : m
        ),
        upcoming: [...state.upcoming],
      };
    case "load-discover-movies":
      return {
        movies: action.payload.movies,
        upcoming: [...state.upcoming]
      };
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies] };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favourite", payload: { movie: state.movies[index] } });
  };

  const removeFromFavourites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "remove-favourite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  const addWishlist = (wishlistId, movieId) => {
    dispatch({ type: "add-wishlist", payload: { wishlistId, movieId } });
  }

  const removeWishlist = (wishlistId, movieId) => {
    dispatch({ type: "remove-wishlist", payload: { wishlistId, movieId } });
  }

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load-discover-movies", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        addToFavorites: addToFavorites,
        addReview: addReview,
        removeFromFavourites: removeFromFavourites,
        addWishlist: addWishlist,
        removeWishlist: removeWishlist,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;