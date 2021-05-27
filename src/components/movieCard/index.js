import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RatingBubble from "../ratingBubble";
import img from '../../images/batman.jpg'
import { Box, Button, CardActions, Modal, Snackbar, TextField } from '@material-ui/core';
import { red, grey } from '@material-ui/core/colors';
import { Textfit } from 'react-textfit';
import { getYear } from '../../utilities';
import { withRouter } from "react-router-dom";
import { MoviesContext } from "../../contexts/moviesContext";
import { WishlistsContext } from "../../contexts/wishlistsContext";
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import AddIcon from '@material-ui/icons/Add';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 250,
    },
    media: {
        height: 250,
    },
    // favourite: {
    //     color: (isFavourite) => favouriteColour(isFavourite)[500],
    // },
    title: {
        minHeight: 80,
        maxHeight: 200,
    },
    modal: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "30%",
        maxHeight: "100vh",
        overflowY: "auto",
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    wishlistButton: {
        width: "100%",
        marginTop: theme.spacing(1),
        textTransform: "none",
    }

}));

const MovieCard = ({ movie, history }) => {    
    const [modalMovieId, setModalMovieId] = useState(null)
    const [snackOpen, setSnackOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false)
    const moviesContext = useContext(MoviesContext);
    const wishlistContext = useContext(WishlistsContext);
    const { favourites } = moviesContext
    const [isFavourite, setFavourite] = useState(false)
    const { wishlists } = wishlistContext
    
    const snackOpenDuration = 500;

    const fakeUsername = "user1"

    // let isFavourite = favourites?.length > 0 ? favourites.find(fav => fav._id == movie._id) ? true : false : false  
    
    useEffect(() => {
        setFavourite(favourites?.length > 0 ? favourites.find(fav => fav._id == movie._id) ? true : false : false )
        // eslint-disable-next-line react-hooks/exhaustive-deps
      });


    const handleNavigation = (url) => {
        history.push(url);
    };

    const handleFavourite = (id) => {
        setFavourite(!isFavourite);
        isFavourite ? removeFavourite(fakeUsername, id) : addFavourite(fakeUsername, id)        
        // isFavourite = !isFavourite
    }

    const handleWishlist = (movieId) => {
        handleModalOpen(movieId)
    }

    const addFavourite = (fakeUsername, id) => {
        moviesContext.addToFavorites(fakeUsername,id);
        // history.go(0)
    }

    const removeFavourite = (fakeUsername, id) => {
        moviesContext.removeFromFavourites(fakeUsername, id);
        // history.go(0)
    }

    const handleModalClose = () => {
        setModalOpen(false)
    }

    const handleModalOpen = movieId => {
        setModalMovieId(movieId)
        setModalOpen(true)
    }

    const handleAddToWishlist = (wishlistId, movieId) => {
        handleSnackOpen()
        wishlistContext.addMovieToWishlist("fakeUserName", wishlistId, movieId)
        // history.go(0)
    }

    const handleSnackClose = () => {
        setSnackOpen(false)
        setModalOpen(false)
    }

    const handleSnackOpen = () => {
        setSnackOpen(true)
    }

    const favouriteColour = () => {
        return isFavourite ? red[500] : grey[500]
    }

    const classes = useStyles(isFavourite);

    return (
        <>
            <Card className={classes.card}>
                <CardActionArea
                    onClick={() => handleNavigation(`/movies/${movie.id}`)}
                    style={{ paddingBottom: 0 }}
                >
                    <CardMedia
                        className={classes.media}
                        image={
                            movie.poster_path
                                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                                : img
                        }
                        title={movie.title}
                    />
                    <CardContent style={{ paddingBottom: 0 }}>
                        <Textfit mode="multi" className={classes.title} max={30}>
                            {movie.title}
                        </Textfit>
                        <Typography style={{ fontWeight: "bold" }} variant="h4">
                            {getYear(movie.release_date)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{ paddingTop: 0 }}>
                    <RatingBubble rating={movie.vote_average}></RatingBubble>
                    <IconButton>
                        <FavoriteIcon
                            className={classes.favourite}
                            fontSize="large"
                            style={{ color: favouriteColour() }}
                            onClick={() => handleFavourite(movie._id)}
                        />
                    </IconButton>
                    <IconButton>
                        <PlaylistAddCheckIcon
                            className={classes.wishlist}
                            fontSize="large"
                            onClick={() => handleWishlist(movie._id)}
                        />
                    </IconButton>
                </CardActions>
            </Card>
            <Snackbar
                    autoHideDuration={snackOpenDuration}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={snackOpen}
                    onClose={handleSnackClose}
                >
                    <Alert
                        severity="success"
                        variant="filled"
                        onClose={handleSnackClose}
                    >
                        <Typography>
                            Successfully added to wishlist
                                    </Typography>
                    </Alert>
                </Snackbar>
            {modalMovieId ?
                <Modal
                    open={modalOpen}
                    onClose={handleModalClose}
                >
                    <Box className={classes.modal} component="div">
                        <Typography variant="h6" color={"primary"}>
                            Add to Wishlist
                        </Typography>
                        {wishlists.length > 0 ?
                            wishlists.map(wishlist => (
                                <Box>
                                    <Button
                                        className={classes.wishlistButton}
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleAddToWishlist(wishlist._id, modalMovieId)}
                                        startIcon={<AddIcon />}
                                    >
                                        <Typography>{wishlist.name}</Typography>
                                    </Button>
                                </Box>
                            ))

                            :
                            <Typography align="left">No wishlists created</Typography>
                        }


                    </Box>

                </Modal>
                :
                false}
        </>
    )
}

export default withRouter(MovieCard);