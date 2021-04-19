import React, { useState } from "react";
import TemplatePage from "../templatePage";
import MovieList from "../movieList";
import FilterSideBar from "../filterSideBar";
import { getYear } from "../../utilities"

const TemplatMoviePage = ({ movies }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [yearFilter, setYearFilter] = useState([1917, 3000])
  const [ratingFilter, setRatingFilter] = useState([0.0, 10.0])
  const genre = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genre > 0 ? m.genre_ids.includes(Number(genreFilter)) : true;
    })
    .filter(m => {
      const releaseYear = getYear(m.release_date)
      return releaseYear >= yearFilter[0] && releaseYear <= yearFilter[1]
    })
    .filter(m => {
      return m.vote_average >= ratingFilter[0] && m.vote_average <= ratingFilter[1]
    })

  const handleChange = (type, value) => {
    switch(type) {
      case "name":
        setNameFilter(value); break;
      case "genre":
        setGenreFilter(value); break;
      case "year":
        setYearFilter(value); break;
      case "rating":
        setRatingFilter(value); break;
    }
  };

  const getMinYear = Math.min(...movies.map(movie => (
    getYear(movie.release_date)    
  )))

  const getMaxYear = Math.max(...movies.map(movie => (
    getYear(movie.release_date)    
  )))

  const getMinRating = Math.min(...movies.map(movie => (
    movie.vote_average   
  )))

  const getMaxRating = Math.max(...movies.map(movie => (
    movie.vote_average   
  )))

  return (
    <>
      <TemplatePage>
        <FilterSideBar
          onUserInput={handleChange}
          titleFilter={nameFilter}
          genreFilter={genreFilter}
          yearRange={{min: getMinYear, max: getMaxYear}}
          ratingRange={{min: getMinRating, max: getMaxRating}}
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