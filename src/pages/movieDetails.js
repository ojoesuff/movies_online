import React from "react";
import TemplatePage from "../components/templatePage";
import MovieList from "../components/movieList";
import useMovie from "../hooks/useMovie"
import MovieCard from "../components/movieCard";

const MovieDetailsPage = (props) => {

    const movieId = 550; //Fight Club
    const movie = useMovie(movieId)

    return (
        <>
            <TemplatePage>  
                <p>{movie.id}</p>     
            </TemplatePage>    
        </>
    );
};

export default MovieDetailsPage;