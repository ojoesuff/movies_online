import MovieCard from "../movieCard";
import FilterSideBar from "../filterSideBar";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";


const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingTop: "5px",
        overflow: "hidden",
        marginLeft: 250,
        width: "80%",
    }
  }));

const MovieList = (props) => {

    const classes = useStyles();
    const context = useContext(MoviesContext)
    const movies = context.movies.map(movie => {
        return (
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3} xl={2}>
                <MovieCard
                    movie={movie}
                ></MovieCard>
            </Grid>
        )
    })

    return (
    <>
        <div className={classes.toolbar} />
            <Grid container spacing={2} className={classes.toolbar}>
            {movies}
            </Grid>
        <div className={classes.toolbar} />
    </>
        
    )
}

export default MovieList;