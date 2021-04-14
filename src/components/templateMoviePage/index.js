import React, { useState } from "react";
import TemplatePage from "../templatePage";
import MovieList from "../movieList";
import FilterSideBar from "../filterSideBar";
import {mainTheme} from "../../themes"
import { ThemeProvider } from "styled-components";


const TemplatMoviePage = ({ movies }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genre = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genre > 0 ? m.genre_ids.includes(Number(genreFilter)) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <>
      <TemplatePage>
        <FilterSideBar
          onUserInput={handleChange}
          titleFilter={nameFilter}
          genreFilter={genreFilter}
        >
        </FilterSideBar>
        <MovieList
          movies={displayedMovies}
        >  
        </MovieList>      
        </TemplatePage> 
           
    </>
  );
};

export default TemplatMoviePage;