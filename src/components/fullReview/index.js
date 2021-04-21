import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Divider, Paper, Typography } from "@material-ui/core";
import AddReview from "../addReview"
import { reviewDateFormat } from "../../utilities"

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(5),
    },
    paper: {
        padding: theme.spacing(6),  
        margin: theme.spacing(2),
        opacity: 0.9, 
    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
  }));

const FullReview = ({review, movie}) => {

    const classes = useStyles();
  
    return (
        <>
        <div className={classes.root}>
        <Paper className={classes.paper}> 
            <Typography align="center" variant="h4">{"Movie Review"}</Typography> 
            <AddReview movie={movie} />          
            <Avatar className={classes.avatar} alt={review.author.toUpperCase()} src={`https://image.tmdb.org/t/p/w200/${review.author_details.avatar_path}`} />
            <Typography gutterBottom variant="h5">{`Author: ${review.author}`}</Typography>
            <Divider/>
            <Typography gutterBottom>{`Created: ${reviewDateFormat(review.created_at)}`}</Typography>
            <Divider/>
            <Typography paragraph gutterBottom>{review.content}</Typography>
        </Paper>
        </div>
        
               
        </>
    );
};

export default (FullReview);