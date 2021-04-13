import React from 'react';
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
import { CardActions } from '@material-ui/core';
import { red, grey } from '@material-ui/core/colors';
import { Textfit } from 'react-textfit';
import {getYear} from '../../utilities';
import { withRouter } from "react-router-dom";


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

    const handleNavigation = (url) => {
        history.push(url);
      };


    const isFavourite = false;
    const classes = useStyles(isFavourite);  

    return (
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
                    <FavoriteIcon className={classes.favourite} fontSize="large"                    
                    />
                </IconButton>                
            </CardActions>          
        </Card>            
    )
}

export default withRouter(MovieCard);