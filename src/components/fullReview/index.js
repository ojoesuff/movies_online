import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Paper, Typography } from "@material-ui/core";
import AddReviewButton from "../addReviewButton"

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),  
        margin: theme.spacing(2),
        opacity: 0.9, 
    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    }
  }));

const FullReview = ({review}) => {

    const classes = useStyles();
  
    return (
        <>
        <div className={classes.root}>
        <Paper className={classes.paper}>  
            <AddReviewButton/>          
            <Avatar className={classes.avatar} alt={review.author.toUpperCase()} src={`https://image.tmdb.org/t/p/w200/${review.author_details.avatar_path}`} />
            <Typography>{review.author}</Typography>
        </Paper>
        </div>
        
               
        </>
    );
};

export default (FullReview);