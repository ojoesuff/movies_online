import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
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


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 250
    },
    media: {
      height: 250
    }   
}));

const MovieCard = (props) => {

    const rating = 7.9
    const year = "2021"
    const title = "The Dark Night Rises"
    const classes = useStyles();
    const isFavourite = true;
    const favouriteColour = isFavourite ? "red" : "grey";

    return (
        <Card className={classes.root}>                       
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
                    <FavoriteIcon style={{color:`${favouriteColour}`}} fontSize="large"                    
                    />
                </IconButton>                
            </CardActions>          
        </Card>      
    )
}

export default MovieCard