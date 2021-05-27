import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, ButtonBase, Divider, IconButton, Modal, Snackbar, TextField, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useContext, useEffect, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { WishlistsContext } from "../../contexts/wishlistsContext";
import { MoviesContext } from "../../contexts/moviesContext";
import { withRouter } from 'react-router';
import { useForm } from 'react-hook-form';
import Alert from '@material-ui/lab/Alert';
import WarningIcon from '@material-ui/icons/Warning';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        padding: theme.spacing(10),
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
    button: {
        textTransform: "none",
        margin: 0,
    },
    submitButton: {
        marginTop: theme.spacing(2)
    },
    accordian: {
        margin: 0,
        paddingTop: 0,
        paddingBottom: 0,
    },
    error: {
        color: theme.palette.warning.dark
    },
    grid: {
        width: "100%",
    }
}));

const WishlistDetail = ({ history }) => {
    const classes = useStyles();
    const [modalOpen, setModalOpen] = useState(false);
    const [snackOpen, setSnackOpen] = useState(false);
    const [deleteSnackOpen, setDeleteSnackOpen] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const wishlistContext = useContext(WishlistsContext);
    const moviesContext = useContext(MoviesContext);
    // const { movies } = moviesContext
    const { wishlists } = wishlistContext
    const snackOpenDuration = 1000
    const [wishlistName, setWishlistName] = useState("");

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleWishlistDelete = (wishlist) => {
        setDeleteSnackOpen(true)
        wishlistContext.deleteWishlist("username", wishlist)
        // history.go(0)
    }

    const handleWishlistAdd = (wishlist) => { 
        setSnackOpen(true);
        wishlist.movies = []   
        wishlistContext.addWishlist("username", wishlist);
    };

    const handleSnackClose = e => {
        setSnackOpen(false);
        setModalOpen(false);
        // history.go(0)
    };

    const handleDeleteSnackClose = e => {
        setDeleteSnackOpen(false);
        // history.go(0)
    };

    const onSubmit = (wishlist) => { 
        wishlist.movies = []   
        wishlistContext.addWishlist("username", wishlist);
        
        setSnackOpen(true);
        reset();
    };    

    const handleRemoveMovie = (wishlistId, movieId) => {
        setDeleteSnackOpen(true)
        wishlistContext.removeMovieFromWishlist("username", wishlistId, movieId)
    }

    // const getWishlistMovies = (wishlistId) => {
    //     return movies.reduce((result, movie) => {
    //         {
    //             if (movie?.wishlist_ids?.includes(wishlistId)) {
    //                 result.push({ id: movie.id, title: movie.title })
    //             }
    //             return result
    //         }
    //     }, [])
    // }
    // useEffect(() => {
    //     if (wishlists?.length > 0) {
    //         setWishlistMovies(wishlists.map(wishlist => (
    //             {
    //                 id: wishlist.id,
    //                 movies: getWishlistMovies(wishlist.id)
    //             }
    //         )))
    //     }
    // });

    const handleMoviePage = movieId => {
        history.push(`/movies/${movieId}`)
    }

    return (
        <>
            <div className={classes.root}>
                <Snackbar
                    autoHideDuration={snackOpenDuration}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={deleteSnackOpen}
                    onClose={handleDeleteSnackClose}
                >
                    <Alert
                        severity="success"
                        variant="filled"
                        onClose={handleDeleteSnackClose}
                    >
                        <Typography>
                            Successfully deleted
                                    </Typography>
                    </Alert>
                </Snackbar>
                <Grid container spacing={1} className={classes.grid}>
                    <Grid item xs={12}>
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
                                onSubmit={e => e.preventDefault()}
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
                                    onChange={(e) => setWishlistName(e.target.value)}
                                />
                                {errors.name && (<Typography className={classes.error}><WarningIcon fontSize="small" />{" " + errors.name.message}</Typography>)}

                                <Box>
                                    <Button
                                        className={classes.submitButton}
                                        onClick={() => handleWishlistAdd({name: wishlistName})}
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
                            <>
                                <Grid item xs={8}>
                                    <Accordion style={{ opacity: 0.9 }}>
                                        <AccordionSummary 
                                            expandIcon={<ExpandMoreIcon />}
                                        >
                                            <Typography  variant="h6">{wishlist.name}</Typography>
                                        </AccordionSummary>
                                        {wishlist.movies.length > 0 ?
                                            wishlist.movies.map((m) => 
                                                <AccordionDetails className={classes.accordian}>
                                                    <Button onClick={() => handleMoviePage(m.id)} className={classes.button}>
                                                        <Typography alt={m.title}>
                                                            {m.title ? m.title : false}
                                                        </Typography>
                                                    </Button>
                                                    <IconButton
                                                        onClick={() => handleRemoveMovie(wishlist._id, m._id)}
                                                    >
                                                        <DeleteIcon color="error" />
                                                    </IconButton>
                                                </AccordionDetails>
                                            )
                                            :
                                            <AccordionDetails>
                                                <Typography>No movies in this list</Typography>
                                            </AccordionDetails>
                                        }
                                    </Accordion>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button
                                        variant="contained"
                                        onClick={() => handleWishlistDelete(wishlist)}
                                        color="secondary">
                                        Delete</Button>
                                </Grid>
                            </>
                        ))
                        : <Typography>No wishlists created. Click the button below...</Typography>
                    }
                </Grid>
            </div>
        </>

    )
}

export default withRouter(WishlistDetail);