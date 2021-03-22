import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    bubble: {
      backgroundColor: (rating) =>  `rgb(${determineBgColour(rating)})`,
      color: "white"
    }
}));

const determineBgColour = (rating) => {
    // const [badRatingColour, mediumRatingColour, highRatingColour, defaultColour] = ["red", "orange", "green", "grey"];
    const [badRatingColour, mediumRatingColour, highRatingColour, defaultColour] = ["242, 92, 92", "245, 172, 76", "78, 217, 113", "219, 219, 219"];
    const [badRatingMax, mediumRatingMax, highRatingMax] = [5.0, 6.5, 10.0];
    
    return rating <= badRatingMax ? badRatingColour :
        rating <= mediumRatingMax ? mediumRatingColour : 
        rating <= highRatingMax ? highRatingColour : defaultColour
}

const RatingBubble = (props) => {

    const rating = props.rating ? props.rating : 7.9
    const classes = useStyles(rating);  
    console.log(props)

    return (
        <Avatar className={classes.bubble}>
            {rating.toFixed(1)}
        </Avatar>          
    )
}

export default RatingBubble