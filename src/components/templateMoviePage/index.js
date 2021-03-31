import React from "react";
import TemplatePage from "../templatePage";
import MovieList from "../movieList";

const TemplatMoviePage = (props) => {

  return (
    <>
        <TemplatePage component={
            <MovieList></MovieList>
        }>            
        </TemplatePage>    
    </>
  );
};

export default TemplatMoviePage;