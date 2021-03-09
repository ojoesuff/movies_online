import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    bubble: {
      backgroundColor: (rating) => determineBgColour(rating),
      color: "white"
    }
}));

const determineBgColour = (rating) => {
    const [badRatingColour, mediumRatingColour, highRatingColour, defaultColour] = ["red", "orange", "green", "grey"];
    const [badRatingMax, mediumRatingMax, highRatingMax] = [5.0, 6.5, 10.0];
    
    return rating <= badRatingMax ? badRatingColour :
        rating <= mediumRatingMax ? mediumRatingColour : 
        rating <= highRatingMax ? highRatingColour : defaultColour
}

const RatingBubble = (props) => {

    const rating = 8.1
    const classes = useStyles(rating);  

    return (
        <Avatar className={classes.bubble}>
            {rating.toFixed(1)}
        </Avatar>          
    )
}

export default RatingBubble