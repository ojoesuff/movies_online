import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TemplatePage from "../components/templatePage";
import useMovie from "../hooks/useMovie"

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: "100vw",
        height: "100vh",
    }
  }));

const MovieDetailsPage = (props) => {

    const movieId = 527774;
    const movie = useMovie(movieId)
    const classes = useStyles();
    const backgroundImagePath = "/7prYzufdIOy1KCTZKVWpjBFqqNr.jpg"
    const backgroundUrl = `url(https://image.tmdb.org/t/p/original/${backgroundImagePath})`

    return (
        <>
            <TemplatePage>
                <div className={classes.background} style={{backgroundImage:`${backgroundUrl}`}}></div>
            </TemplatePage>    
        </>
    );
};

export default MovieDetailsPage;