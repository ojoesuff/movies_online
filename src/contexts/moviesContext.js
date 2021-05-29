import React, { useEffect, createContext, useReducer, useState } from "react";
import { getMovies, getUpcomingMovies, getTopRatedMovies, addFavourite, 
  addMovieReview, removeFavourite, getUserFavourites } from "../api/tmdb";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favourite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favourite: true } : m
        ),
        upcoming: [...state.upcoming],
        topRated: [...state.topRated]
      };
    case "remove-favourite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favourite: false } : m
        ),
        upcoming: [...state.upcoming],
        topRated: [...state.topRated]
      };
    case "add-wishlist":
      return {
        movies: state.movies.map((m) => {
          return (m.id === action.payload.movieId) ? {
            ...m, wishlist_ids:
              m?.wishlist_ids ? [...m?.wishlist_ids, action.payload.wishlistId] : [action.payload.wishlistId]
          } : m
        }
        ),
        upcoming: [...state.upcoming],
        topRated: [...state.topRated]
      };
    case "remove-wishlist":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movieId ? {
            ...m, wishlist_ids: [
              ...m.wishlist_ids.filter(id => id !== action.payload.wishlistId)
            ]
          } : m
        ),
        upcoming: [...state.upcoming],
        topRated: [...state.topRated],
      };
    case "load-discover-movies":
      return {
        movies: action.payload.movies,
        upcoming: [...state.upcoming],
        topRated: [...state.topRated],
      };
    case "load-top-rated":
      return {
        movies: [...state.movies],
        upcoming: [...state.upcoming],
        topRated: action.payload.movies
      };
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], topRated: [...state.topRated] };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
        topRated: [...state.topRated]
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], topRated: [] });
  const [favourites, setFavourites] = useState(null)

  const addToFavorites = (username, movieId) => {
    addFavourite(username, movieId).then((movies) => {
      setFavourites(movies)
    });   
  };

  const removeFromFavourites = (username, movieId) => {
    removeFavourite(username, movieId).then((movies) => {
      console.log(movies)
      setFavourites(movies)
    });  
  };

  const addReview = (movieId, review) => {
    state.movies = addMovieReview(movieId, review)
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

  useEffect(() => {
    getTopRatedMovies().then((movies) => {
      dispatch({ type: "load-top-rated", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFavourites = (username) => {
    getUserFavourites(username).then(movies => 
      setFavourites(movies)
    )
  }


  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        topRated: state.topRated,
        favourites: favourites,
        getFavourites: getFavourites,
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