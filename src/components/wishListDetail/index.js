import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useEffect, useState } from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(5), 
      },
  }));

const WishlistDetail = ({ wishlists, movies }) => {
    const classes = useStyles();
    const [movieNames, setMovieNames] = useState([])

    const setWishlistMovies = (wishlistId) => {
        return movies.map(movie => {
            
            movie?.wishlist_ids?.includes(wishlistId) ? 
            (<Typography>{movie.title}</Typography>)
            : false
        }
        );
    } 
    useEffect(() => {
        setMovieNames(wishlists.map(wishlist => (
                {id : wishlist.id,
                movies : movies.map(movie => movie.title)
                }
        ) ))       
    }, []);

    // if(!movieNames) {
    //     setMovieNames(movies.map(movie =>
    //         movie.title
    //     ))
    // }
    
    return (
    <>
        <div className={classes.root}>
            <Grid container spacing={1}>                  
                {wishlists.length > 0 ?                
                wishlists.map(wishlist => (
                <Grid item lg={8} md={8} sm={12} xs={12}>
                    <Accordion style={{opacity:0.9}}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                        >
                            <Typography>{wishlist.name}</Typography>
                        </AccordionSummary> 
                        {movieNames.find(movie => movie.id == wishlist.id) ?
                        movieNames.find(movie => movie.id == wishlist.id).movies.map(m =>                        
                        <AccordionDetails>
                        <Typography>{m}</Typography>
                        </AccordionDetails>
                        )
                        :
                        <AccordionDetails>
                        <Typography>Empty</Typography>
                        </AccordionDetails>
                        }
                        {/* {movieNames ? 
                        movieNames.map(m => 
                        <AccordionDetails>
                        <Typography>{m}</Typography>
                        </AccordionDetails>)
                        : <AccordionDetails>
                        <Typography>Empty</Typography>
                        </AccordionDetails>
                         
                        } */}
                    </Accordion>
                </Grid>
                ))
                : <Typography>No wishlists created. Click the button below...</Typography>
                }                                     
            </Grid>            
        </div>
    </>
        
    )
}

export default WishlistDetail;