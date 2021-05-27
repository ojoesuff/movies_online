import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { getUserWishlists, addUserWishlist, deleteUserWishlist, addMovieWishlist, removeMovieWishlist } from "../api/tmdb";
// import { AuthContext } from '../contexts/authContext'

export const WishlistsContext = createContext(null)

const WishlistsContextProvider = props => {
  // const [state, dispatch] = useReducer(reducer, { wishlists: [] });
  const [wishlists, setWishlists] = useState([]);
  // const authContext = useContext(AuthContext);
  // const { userName } = authContext

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

  // useEffect(() => {
  //   getUserWishlists(userName).then((wishlists) => {
  //     setWishlists(wishlists);
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const getWishlists = (username, wishlist) =>  {
    wishlist = getUserWishlists(username, wishlist).then(wishlists => {
      setWishlists(wishlists);
    })
  }
    // const addWishlist = wishlist => {
  //   wishlists.push({ id: generateNextId(), name: wishlist.name })
  // }

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
        addWishlist: addWishlist,
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