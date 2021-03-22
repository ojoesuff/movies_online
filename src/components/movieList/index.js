import MovieCard from "../movieCard";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 250
    },
    media: {
      height: 250
    }   
}));

const MovieList = (props) => {

    const classes = useStyles();

    return (
        <Grid container spacing={2}>
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
    )
}

export default MovieList