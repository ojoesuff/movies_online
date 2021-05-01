import React, { useContext, useState } from 'react';
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
import { Box, Button, CardActions, Modal, TextField } from '@material-ui/core';
import { red, grey } from '@material-ui/core/colors';
import { Textfit } from 'react-textfit';
import {getYear} from '../../utilities';
import { withRouter } from "react-router-dom";
import { MoviesContext } from "../../contexts/moviesContext";
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';


const useStyles = makeStyles((theme) => ({
    card: {
      maxWidth: 250,
    },
    media: {
      height: 250,
    },
    favourite: {
        color: (isFavourite) => favouriteColour(isFavourite)[500],
    },
    title: {
        minHeight: 80,
        maxHeight: 200,
    }

}));

const favouriteColour = (isFavourite) => {
    return isFavourite ? red : grey;
};

const MovieCard = ({ movie, history }) => {

    const [isFavourite, setFavourite] = useState(movie?.favourite ? movie.favourite : false)
    const [modalData, setModalData] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const context = useContext(MoviesContext);

    const handleNavigation = (url) => {
        history.push(url);
      };

    const handleFavourite = (id) => {
        isFavourite ? removeFavourite(id) : addFavourite(id)
        setFavourite(!isFavourite);
    }

    const handleWishlist = (wishlistId, movieId) => {
        handleModalOpen({id: movieId})
        context.addWishlist(wishlistId, movieId)
    }

    const addFavourite = (id) => {
        context.addToFavorites(id);
    }

    const removeFavourite = (id) => {
        context.removeFromFavourites(id);
    }

    const handleModalClose = () => {
        setModalOpen(false)
    }

    const handleModalOpen = data => {
        setModalData(data)
        setModalOpen(true)
    }

    const classes = useStyles(isFavourite);  

    return (
        <>
        <Card className={classes.card}>                    
        <CardActionArea 
            onClick={() => handleNavigation(`/movies/${movie.id}`)}
            style={{paddingBottom: 0}}
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
            <CardContent style={{paddingBottom:0}}>
            <Textfit mode="multi" className={classes.title} max={30}>
                {movie.title}
            </Textfit>
            <Typography style={{fontWeight:"bold"}} variant="h4">
                {getYear(movie.release_date)}
            </Typography>
            </CardContent>
            </CardActionArea>  
            <CardActions style={{paddingTop: 0}}>  
                <RatingBubble rating={movie.vote_average}></RatingBubble>
                <IconButton>
                    <FavoriteIcon 
                        className={classes.favourite} 
                        fontSize="large"      
                        onClick={() => handleFavourite(movie.id)}              
                    />
                </IconButton>     
                <IconButton>
                    <PlaylistAddCheckIcon 
                        className={classes.wishlist} 
                        fontSize="large"      
                        onClick={() => handleWishlist(0, movie.id)}              
                    />
                </IconButton>            
            </CardActions>          
        </Card> 
        {modalData ?   
        <Modal
        open={modalOpen}
        onClose={handleModalClose}
    >
        <Box className={classes.form} component="div">
            <Typography variant="h6" color={"primary"}>
                Add to Wishlist {modalData.id}
            </Typography>
                <TextField
                    variant="outlined"
                    margin="large"
                    required
                    id="name"
                    label="Name"
                    name="name"
                    autoFocus
                />

                <Box>
                    <Button
                        className={classes.button}
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Add
                    </Button>
                </Box>
        </Box>

    </Modal>
    :
    false}
    </>         
    )
}

export default withRouter(MovieCard);