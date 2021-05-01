import React, { createContext, useReducer } from "react";

export const WishlistsContext = createContext(null)

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "add-wishlist":
//       return {
//         movies: state.movies.map((m) =>
//           m.id === action.payload.movie.id ? { ...m, favourite: true } : m
//         ),
//         wishlists: {...state.wishlists, action.payload.wishlist}
//       };
//     case "remove-favourite":
//       return {
//         movies: state.movies.map((m) =>
//           m.id === action.payload.movie.id ? { ...m, favourite: false } : m
//         ),
//         upcoming: [...state.upcoming],
//       };
//     case "load-discover-movies":
//       return {
//         movies: action.payload.movies,
//         upcoming: [...state.upcoming]
//       };
//     case "load-upcoming":
//       return { upcoming: action.payload.movies, movies: [...state.movies] };
//     case "add-review":
//       return {
//         movies: state.movies.map((m) =>
//           m.id === action.payload.movie.id
//             ? { ...m, review: action.payload.review }
//             : m
//         ),
//         upcoming: [...state.upcoming],
//       };
//     default:
//       return state;
//   }
// };

const WishlistsContextProvider = props => {
  // const [state, dispatch] = useReducer(reducer, { wishlists: [] });
  const wishlists = [{ id: 0, name: "Kids" }, { id: 1, name: "Horror" }];

  // const addWishlist = (movieId) => {
  //   const index = state.movies.map((m) => m.id).indexOf(movieId);
  //   dispatch({ type: "add-wishlist", payload: { movie: state.movies[index] } });
  // };

  // const deleteWishlist = (movieId) => {
  //   const index = state.movies.map((m) => m.id).indexOf(movieId);
  //   dispatch({ type: "delete-wishlist", payload: { movie: state.movies[index] } });
  // };

  const generateNextId = () => {
    return Math.max(...wishlists.map(w => w.id)) + 1
  }

  const addWishlist = wishlist => {
    console.log("adding wishlist")
    wishlists.push({ id: generateNextId(), name: wishlist.name })
  }

  const deleteWishlist = id => {
    let index = wishlists.map(w => { return w.id; }).indexOf(id);
    wishlists.splice(index, 1);
  }

  return (
    <WishlistsContext.Provider
      value={{
        wishlists: wishlists,
        addWishlist: addWishlist,
        deleteWishlist: deleteWishlist,
      }}
    >
      {props.children}
    </WishlistsContext.Provider>
  )

}

export default WishlistsContextProvider;