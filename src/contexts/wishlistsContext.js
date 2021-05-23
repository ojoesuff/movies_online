import React, { createContext, useEffect, useReducer, useState } from "react";
import { getUserWishlists, addUserWishlist, deleteUserWishlist, addMovieWishlist, removeMovieWishlist } from "../api/tmdb";

export const WishlistsContext = createContext(null)

const WishlistsContextProvider = props => {
  // const [state, dispatch] = useReducer(reducer, { wishlists: [] });
  const [wishlists, setWishlists] = useState([]);
  const testUsername = "user1"

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

  // const deleteWishlist = id => {
  //   let index = wishlists.map(w => { return w.id; }).indexOf(id);
  //   wishlists.splice(index, 1);
  // }

  useEffect(() => {
    getUserWishlists(testUsername).then((wishlists) => {
      setWishlists(wishlists);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    // const addWishlist = wishlist => {
  //   wishlists.push({ id: generateNextId(), name: wishlist.name })
  // }

  const addWishlist = (username, wishlist) =>  {
    console.log(wishlist)
    wishlist = addUserWishlist(testUsername, wishlist)
  }

  const addMovieToWishlist = (username, wishlistId, movieId) =>  {
    addMovieWishlist(testUsername, wishlistId, movieId)
  }

  const removeMovieFromWishlist = (username, wishlistId, movieId) =>  {
    removeMovieWishlist(testUsername, wishlistId, movieId)
  }

  const deleteWishlist = (username, wishlist) =>  {
    console.log(wishlist)
    deleteUserWishlist(testUsername, wishlist)
  }

  return (
    <WishlistsContext.Provider
      value={{
        wishlists: wishlists,
        addWishlist: addWishlist,
        deleteWishlist: deleteWishlist,
        getUserWishlists: getUserWishlists,
        addWishlist: addWishlist,
        addMovieToWishlist: addMovieToWishlist,
        removeMovieFromWishlist: removeMovieFromWishlist
      }}
    >
      {props.children}
    </WishlistsContext.Provider>
  )

}

export default WishlistsContextProvider;