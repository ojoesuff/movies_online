import MovieCard from "../movieCard";
import Grid from '@material-ui/core/Grid';


const MovieList = (props) => {

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