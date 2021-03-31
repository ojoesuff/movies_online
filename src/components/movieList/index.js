import MovieCard from "../movieCard";
import FilterSideBar from "../filterSideBar";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";


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

    return (
    <>
            <div className={classes.toolbar} />
            <Grid container spacing={2} className={classes.toolbar}>
            <Grid item>
                <MovieCard></MovieCard> 
            </Grid>
            <Grid item>
                <MovieCard></MovieCard> 
            </Grid>
            <Grid item>
                <MovieCard></MovieCard> 
            </Grid>
            <Grid item>
                <MovieCard></MovieCard> 
            </Grid>
            <Grid item>
                <MovieCard></MovieCard> 
            </Grid>
            <Grid item>
                <MovieCard></MovieCard> 
            </Grid>
            <Grid item>
                <MovieCard></MovieCard> 
            </Grid>
            <Grid item>
                <MovieCard></MovieCard> 
            </Grid>
            <Grid item>
                <MovieCard></MovieCard> 
            </Grid>
            <Grid item>
                <MovieCard></MovieCard> 
            </Grid>
            <Grid item>
                <MovieCard></MovieCard> 
            </Grid>
            <Grid item>
                <MovieCard></MovieCard> 
            </Grid>
        </Grid>
        <div className={classes.toolbar} />
        </>
        
    )
}

export default MovieList;