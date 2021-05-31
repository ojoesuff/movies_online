import React, { useState, useEffect, createContext } from "react";
import { getGenres } from "../api/tmdb";

export const GenresContext = createContext(null)

const GenresContextProvider = props => {
    const [genres, setGenres] = useState([{ id: "0", name: "All" }]);
    useEffect(() => {
    getGenres().then(allGenres => {
      console.log(allGenres)
        setGenres([genres[0], ...allGenres]);
    });
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

    return (
        <GenresContext.Provider
          value={{
            genres
          }}
        >
          {props.children}
        </GenresContext.Provider>
    )

}

export default GenresContextProvider;