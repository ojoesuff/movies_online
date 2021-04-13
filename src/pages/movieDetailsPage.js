import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TemplatePage from "../components/templatePage";
import useMovie from "../hooks/useMovie"
import MovieDetail from "../components/movieDetail";
import { withRouter } from "react-router-dom";

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

    const [movie] = useMovie(id)
    const classes = useStyles();

    return (
        <>
        {movie ? (
        <TemplatePage>
        <div className={classes.background} style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}}>
            <MovieDetail movie={movie}/>
        </div>
        </TemplatePage> 
      ) : (
        <p>Loading movie details</p>
      )}
               
        </>
    );
};

export default withRouter(MovieDetailsPage);