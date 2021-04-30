import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useContext, useEffect, useState } from 'react';
import { MoviesContext } from "../../contexts/moviesContext";


const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        justifyContent: "center",
        padding: theme.spacing(8),
    },
    accordion: {
        minWidth: "40vw",
    }
}));

const WishlistDetail = ({ wishlists, movies }) => {
    const classes = useStyles();
    const [movieNames, setMovieNames] = useState([])

    // const context = useContext(MoviesContext);
    // const { movies  } = context;

    const setWishlistMovies = (wishlistId) => {
        return movies.reduce((result, movie) => {
            {
                if (movie?.wishlist_ids?.includes(wishlistId)) {
                    result.push(movie.title)
                }
                return result
            }
        }, [])
    }
    useEffect(() => {
        if (wishlists?.length > 0) {
            setMovieNames(wishlists.map(wishlist => (
                {
                    id: wishlist.id,
                    movies: setWishlistMovies(wishlist.id)
                }
            )))
        }
    }, []);

    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={1}>
                    {wishlists.length > 0 ?
                        wishlists.map(wishlist => (
                            <Grid item lg={8} md={8} sm={12} xs={12} className={classes.accordion}>
                                <Accordion style={{ opacity: 0.9 }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                    >
                                        <Typography>{wishlist.name}</Typography>
                                    </AccordionSummary>
                                    {movieNames.find(movie => movie.id == wishlist.id)?.movies > 0 ?
                                        movieNames.find(movie => movie.id == wishlist.id).movies.map(m =>
                                            <AccordionDetails>
                                                <Typography>{m}</Typography>
                                            </AccordionDetails>
                                        )
                                        :
                                        <AccordionDetails>
                                            <Typography>Empty</Typography>
                                        </AccordionDetails>
                                    }
                                </Accordion>
                            </Grid>
                        ))
                        : <Typography>No wishlists created. Click the button below...</Typography>
                    }
                </Grid>
            </div>
        </>

    )
}

export default WishlistDetail;