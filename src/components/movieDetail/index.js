import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, ButtonBase, Divider, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import {getYear, releaseDateFormat} from "../../utilities"
import LanguageIcon from '@material-ui/icons/Language';
import RatingBubble from "../ratingBubble";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getMovieReviews } from '../../api/tmdb'
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(5), 
      },
    paper: {
        padding: theme.spacing(2),  
        opacity: 0.9,    
    },
    poster: {
        minWidth: 100,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        border: '1px solid',
        height: "100%",
    },
    title: {
        [theme.breakpoints.down('lg')]: {
            fontSize: "2.5vw",
          },
        [theme.breakpoints.down('md')]: {
            fontSize: "3.5vw",
          },
        [theme.breakpoints.down('sm')]: {
            fontSize: "5vw",
          },          
        fontWeight: "bold",
    },
    subtitle: {
        marginBottom: theme.spacing(2),
    },
    topMargin: {
        marginTop: theme.spacing(2),
    },
    avatar: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    }
  }));

const reviewCharDisplayLimit = 300;

const previewReview = (fullReview) => {
    return fullReview.substring(0, reviewCharDisplayLimit)
}

const MovieDetail = ({ movie }) => {
    const [reviews, setReviews] = useState();    
    const classes = useStyles();
    const posterImagePath = movie.poster_path
    const posterUrl = `url(https://image.tmdb.org/t/p/w500/${posterImagePath})`
    const releaseDate = movie.release_date
    const year = getYear(releaseDate)

    useEffect(() => 
        getMovieReviews(movie.id)
        .then(reviews => setReviews(reviews))
    );

    return (
        <>
            <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.title}>{movie.original_title} {year}</Typography>
                        <Divider/>
                        <Typography className={classes.subtitle}variant="subtitle1">{movie.tagline.toUpperCase()}</Typography>
                        <Typography variant="body1">{movie.overview}</Typography>
                        <IconButton href={movie.homepage} target="_blank">
                            <LanguageIcon/>
                        </IconButton>
                    </Paper>
                </Grid>
                <Grid item lg={2} md={2} sm={6} xs={6}>
                    <Paper 
                        border={2}
                        className={classes.paper, classes.poster} 
                        elevation={2} 
                        style={{backgroundImage:`${posterUrl}`}}>
                    </Paper>
                </Grid>
                <Grid item lg={2} md={2} sm={6} xs={6}>
                    <Paper className={classes.paper}>                        
                        <RatingBubble rating={movie.vote_average}/>
                        <Typography className={classes.topMargin}>{movie.runtime} min</Typography> 
                        <Divider/>
                        <Typography>Released: {releaseDateFormat(releaseDate)}</Typography>
                        <Divider/>
                        <div>
                        {movie.genres.map(genre => (
                            <Typography>{genre.name}</Typography>
                        ))}
                        </div>                       
                    </Paper>
                </Grid> 
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <Accordion style={{opacity:0.9}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                        >
                            <Typography>Reviews</Typography>
                        </AccordionSummary>                         
                            {reviews ? reviews.map(review =>
                            <ButtonBase>
                            <AccordionDetails align="left" style={{display: "inline-block"}}>
                                <Avatar className={classes.avatar} alt={review.author.toUpperCase()} src={`https://image.tmdb.org/t/p/w200/${review.avatar_path}`} />
                                <Typography variant="h6">{review.author}</Typography>
                                <Divider/>
                                <Typography>{previewReview(review.content)}</Typography>                                
                            </AccordionDetails>
                            </ButtonBase>
                            
                            ) : 
                            <AccordionDetails>
                                <Typography>No reviews available</Typography>
                            </AccordionDetails>
                            } 
                    </Accordion>
                </Grid>                            
            </Grid>
            </div>
        </>
    );
};

export default MovieDetail;