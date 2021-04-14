import MovieCard from "../movieCard";
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

const MovieList = ({ movies }) => {
    const classes = useStyles();
    const filteredMovies = movies.map(movie => {
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
            {filteredMovies}
            </Grid>
        <div className={classes.toolbar} />
    </>
        
    )
}

export default MovieList;