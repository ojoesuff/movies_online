import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TemplatePage from "../components/templatePage";
import useMovie from "../hooks/useMovie"
import MovieDetail from "../components/movieDetail";
import { withRouter } from "react-router-dom";
import TemplateDetailsPage from "../components/templateDetailsPage";
import { MoviesContext } from "../contexts/moviesContext";

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: "100vw",
        height: "100vh",
        backgroundAttachment: "fixed",
    }
  }));

const MovieDetailsPage = ({
    match: {
      params: { id },
    },
  }) => {
    id = parseInt(id, 10);
    const context = useContext(MoviesContext);
    const { movies  } = context;
    const [movie] = useMovie(id)
    const movieReview = movies[movies.map((m) => m.id).indexOf(id)]
    const newMovie = {...movie, review: movieReview?.review}

    return (
        <>
        {movie ? (
          <TemplateDetailsPage movie={newMovie}>
            <MovieDetail movie={newMovie}/>
          </TemplateDetailsPage>
      ) : (
        <p>Loading movie details</p>
      )}
               
        </>
    );
};

export default withRouter(MovieDetailsPage);