import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import {getYear, releaseDateFormat} from "../../utilities"
import LanguageIcon from '@material-ui/icons/Language';
import RatingBubble from "../ratingBubble";

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
        minHeight: 200,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        border: '1px solid',
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
  }));

const MovieDetail = ({ movie }) => {
    console.log(movie)
    const classes = useStyles();
    const posterImagePath = "siuchiuhsdv"
    const posterUrl = `url(https://image.tmdb.org/t/p/w500/${posterImagePath})`
    const title = "Raya and the Last Dragon";
    const overview = "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people."
    const tagline = "A quest to save her world."
    const rating = 8.7
    const runtime = 112
    const releaseDate = "2021-03-03"
    const year = getYear(releaseDate)
    const homepage = "https://movies.disney.com/raya-and-the-last-dragon"
    const genres = [
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 18,
            "name": "Drama"
        }
    ]

    return (
        <>
            <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.title}>{"shgcjhsdc"} {year}</Typography>
                        <Typography className={classes.subtitle}variant="subtitle1">{tagline.toUpperCase()}</Typography>
                        <Typography variant="body1">{overview}</Typography>
                        <IconButton href={homepage} target="_blank">
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
                        <RatingBubble rating={rating}/>
                        <Typography className={classes.topMargin}>{runtime} min</Typography> 
                        <Divider/>
                        <Typography>Released: {releaseDateFormat(releaseDate)}</Typography>
                        <Divider/>
                        <div>
                        {genres.map(genre => (
                            <Typography>{genre.name}</Typography>
                        ))}
                        </div>                       
                    </Paper>
                </Grid>                                
            </Grid>
            </div>
        </>
    );
};

export default MovieDetail;