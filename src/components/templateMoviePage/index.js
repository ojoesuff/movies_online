import React from "react";
import TemplatePage from "../templatePage";
import MovieList from "../movieList";
import FilterSideBar from "../filterSideBar";
import {mainTheme} from "../../themes"
import { ThemeProvider } from "styled-components";


const TemplatMoviePage = (props) => {

  return (
    <>
      <TemplatePage>
        <FilterSideBar/>
        <MovieList/>        
        </TemplatePage> 
           
    </>
  );
};

export default TemplatMoviePage;