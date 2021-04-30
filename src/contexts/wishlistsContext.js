import React, { useState, createContext } from "react";

export const WishlistsContext = createContext(null)

const WishlistsContextProvider = props => {
    const [wishlists, setWishlists] = useState([{ id: 0, name: "Kids" }, {id: 1, name: "Horror"}]);

    return (
        <WishlistsContext.Provider
          value={{
            wishlists
          }}
        >
          {props.children}
        </WishlistsContext.Provider>
    )

}

export default WishlistsContextProvider;