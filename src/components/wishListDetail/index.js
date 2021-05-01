import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, ButtonBase, Divider, IconButton, Modal, Snackbar, TextField, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useContext, useEffect, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { WishlistsContext } from "../../contexts/wishlistsContext";
import { withRouter } from 'react-router';
import { useForm } from 'react-hook-form';
import Alert from '@material-ui/lab/Alert';
import WarningIcon from '@material-ui/icons/Warning';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        justifyContent: "center",
        padding: theme.spacing(8),
    },
    form: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: "60%",
        maxHeight: "100vh",
        overflowY: "auto",
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
    },
    accordion: {
        minWidth: "40vw",
    },
    button: {
        textTransform: "none",
        marginTop: theme.spacing(2)
    },
    
    error: {
        color: theme.palette.warning.dark
    },
}));

const WishlistDetail = ({ movies, history }) => {
    const classes = useStyles();
    const [wishlistMovies, setWishlistMovies] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const [ snackOpen, setSnackOpen ] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const context = useContext(WishlistsContext);
    const { wishlists } = context
    const snackOpenDuration = 1000

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleSnackClose = e => {
        setSnackOpen(false);
        setModalOpen(false);
        history.push("/wishlist")
      };

    const onSubmit = (wishlistName) => {
        setSnackOpen(true);        
        context.addWishlist(wishlistName); 
        reset();       
    };

    // const context = useContext(MoviesContext);
    // const { movies  } = context;

    const getWishlistMovies = (wishlistId) => {
        return movies.reduce((result, movie) => {
            {
                if (movie?.wishlist_ids?.includes(wishlistId)) {
                    result.push({ id: movie.id, title: movie.title })
                }
                return result
            }
        }, [])
    }
    useEffect(() => {
        if (wishlists?.length > 0) {
            setWishlistMovies(wishlists.map(wishlist => (
                {
                    id: wishlist.id,
                    movies: getWishlistMovies(wishlist.id)
                }
            )))
        }
    }, []);

    const handleMoviePage = movieId => {
        history.push(`/movies/${movieId}`)
    }

    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <IconButton>
                            <AddCircleIcon fontSize="large" onClick={() => handleModalOpen()} />
                        </IconButton>
                    </Grid>
                    <Modal
                        open={modalOpen}
                        onClose={handleModalClose}
                    >
                        <Box className={classes.form} component="div">
                            <Typography variant="h6" color={"primary"}>
                                Add Wishlist
                            </Typography>
                            <Snackbar
                                autoHideDuration={snackOpenDuration}
                                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                                open={snackOpen}
                                onClose={handleSnackClose}
                            >
                                <Alert
                                    severity="success"
                                    variant="filled"
                                    onClose={handleSnackClose}
                                >
                                    <Typography>
                                        Wishlist successfully added
                                    </Typography>
                                </Alert>
                            </Snackbar>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                noValidate
                            >
                                <TextField
                                    variant="outlined"
                                    margin="large"
                                    required
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoFocus
                                    {...register('name', {
                                        required: "Name is required"
                                    })}
                                />
                                {errors.name && (<Typography className={classes.error}><WarningIcon fontSize="small" />{" " + errors.name.message}</Typography>)}
                                
                                <Box>
                                    <Button
                                        className={classes.button}
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Add
                                    </Button>
                                </Box>
                            </form>
                        </Box>

                    </Modal>

                    {wishlists.length > 0 ?
                        wishlists.map(wishlist => (
                            <Grid item lg={8} md={8} sm={12} xs={12} className={classes.accordion}>
                                <Accordion style={{ opacity: 0.9 }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                    >
                                        <Typography>{wishlist.name}</Typography>
                                    </AccordionSummary>
                                    {wishlistMovies.find(movie => movie.id == wishlist.id)?.movies?.length > 0 ?
                                        wishlistMovies.find(movie => movie.id == wishlist.id).movies.map(m =>
                                            <AccordionDetails>
                                                <Button onClick={() => handleMoviePage(m.id)} className={classes.button}>
                                                    <Typography alt={m.title}>
                                                        {`${m.title}`}
                                                    </Typography>
                                                </Button>
                                                <IconButton>
                                                    <DeleteIcon color="error" />
                                                </IconButton>
                                            </AccordionDetails>
                                        )
                                        :
                                        <AccordionDetails>
                                            <Typography>Empty</Typography>
                                        </AccordionDetails>
                                    }
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

export default withRouter(WishlistDetail);