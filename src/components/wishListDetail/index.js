import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingTop: "5px",
        overflow: "hidden",
        marginLeft: 250,
        width: "80%",
    }
  }));

const WishlistDetail = ({ wishlists }) => {
    const classes = useStyles();
    
    return (
    <>

        {wishlists.length > 0 ?        
        wishlists.map(wishlist => 
            <Typography>{wishlist.name}</Typography>
        )
        :
        <Typography>No wishlists</Typography>
        }
        {/* <div className={classes.toolbar} />
            
            {filteredMovies.length > 0 ?
            <Grid container spacing={2} className={classes.toolbar}>
            {filteredMovies}
            </Grid> :
            <div>
                <Typography align="center" variant="h5">No Movies Available</Typography>
            </div>
            
            }
            
        <div className={classes.toolbar} /> */}
    </>
        
    )
}

export default WishlistDetail;