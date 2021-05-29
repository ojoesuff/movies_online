import React, { createContext, useState } from "react";
import { getUserWishlists, addUserWishlist, deleteUserWishlist, addMovieWishlist, removeMovieWishlist } from "../api/tmdb";


export const WishlistsContext = createContext(null)

const WishlistsContextProvider = props => {
  const [wishlists, setWishlists] = useState([]);

  const getWishlists = (username, wishlist) =>  {
    wishlist = getUserWishlists(username, wishlist).then(wishlists => {
      setWishlists(wishlists);
    })
  }
  const addWishlist = (username, wishlist) =>  {
    wishlist = addUserWishlist(username, wishlist).then(wishlists => {
      setWishlists(wishlists);
    })
  }

  const addMovieToWishlist = (username, wishlistId, movieId) =>  {
    console.log("addMovieToWishlist in wishlistcontext: " + movieId)
    addMovieWishlist(username, wishlistId, movieId).then(wishlists => {
      setWishlists(wishlists);
    })
  }

  const removeMovieFromWishlist = (username, wishlistId, movieId) =>  {
    console.log("Wishlist ID from removeMovieFromWishlist in context: " + wishlistId)
    removeMovieWishlist(username, wishlistId, movieId).then(wishlists => {
      setWishlists(wishlists)
    })
  }

  const deleteWishlist = (username, wishlist) =>  {
    console.log(wishlist)
    deleteUserWishlist(username, wishlist).then(wishlists => {
      setWishlists(wishlists)
    })
  }

  return (
    <WishlistsContext.Provider
      value={{
        wishlists: wishlists,
        deleteWishlist: deleteWishlist,
        getWishlists: getWishlists,
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