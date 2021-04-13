import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import { red, orange, green, blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    bubble: {
      backgroundColor: (rating) =>  determineBgColour(rating)[500],
      color: "white"
    }
}));

const determineBgColour = (rating) => {
    // const [badRatingColour, mediumRatingColour, highRatingColour, defaultColour] = ["red", "orange", "green", "grey"];
    const [badRatingColour, mediumRatingColour, highRatingColour, defaultColour] = [red, orange, green, blueGrey];
    const [badRatingMax, mediumRatingMax, highRatingMax] = [5.0, 6.5, 10.0];
    
    return rating <= badRatingMax ? badRatingColour :
        rating <= mediumRatingMax ? mediumRatingColour : 
        rating <= highRatingMax ? highRatingColour : defaultColour
}

const RatingBubble = (props) => {

    const rating = props.rating ? props.rating : 7.9
    const classes = useStyles(rating);  

    return (
        <Avatar className={classes.bubble}>
            {rating.toFixed(1)}
        </Avatar>          
    )
}

export default RatingBubble