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


const useStyles = makeStyles((theme) => ({
    card: {
      maxWidth: 250,
    },
    media: {
      height: 250,
    },
    favourite: {
        color: (isFavourite) => favouriteColour(isFavourite)[500],
    }

}));

const favouriteColour = (isFavourite) => {
    return isFavourite ? red : grey;
};

const MovieCard = (props) => {

    const rating = 7.1
    const year = "2021"
    const title = "The Dark Night Rises"
    const isFavourite = false;
    const classes = useStyles(isFavourite);   

    return (
        <Card className={classes.card}>                    
        <CardActionArea style={{paddingBottom: 0}}>
            <CardMedia
                className={classes.media}
                image={img}
                title={title}
            /> 
            <CardContent style={{paddingBottom:0}}>
            <Typography style={{fontWeight:"bold"}} variant="h5">
                {title}
            </Typography>
            <Typography style={{fontWeight:"lighter"}} variant="h5">
                {year}
            </Typography>
            </CardContent>
            </CardActionArea>  
            <CardActions style={{paddingTop: 0}}>  
                <RatingBubble rating={rating}></RatingBubble>
                <IconButton>
                    <FavoriteIcon className={classes.favourite} fontSize="large"                    
                    />
                </IconButton>                
            </CardActions>          
        </Card>            
    )
}

export default MovieCard