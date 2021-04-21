import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import { Box, Button, IconButton, Modal, Snackbar, TextField, Tooltip, Typography } from "@material-ui/core";
import { AddCircleRounded } from "@material-ui/icons";
import WarningIcon from '@material-ui/icons/Warning';
import { useForm } from "react-hook-form";
import { MoviesContext } from "../../contexts/moviesContext";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
    reviewForm: {
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
    error: {
        color: theme.palette.warning.dark
    }
}));

const AddReview = ({history, movie}) => {  
    const classes = useStyles();
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ snackOpen, setSnackOpen ] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const context = useContext(MoviesContext);

    const handleModalOpen = () => {
        setModalOpen(true);
    };    
    
    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleSnackClose = e => {
        setSnackOpen(false);
        history.push("/");
      };

    const onSubmit = (review) => {
        review.movieId = movie.id;
        // review.rating = rating;
        context.addReview(movie, review);
        setSnackOpen(true);
    };

    return (
        <>
        <Tooltip title="Add Review">
            <IconButton
                aria-label="add"
                onClick={handleModalOpen}
            >
                <AddCircleRounded fontSize="large"/>
            </IconButton>
        </Tooltip>      
        <Modal
            open={modalOpen}
            onClose={handleModalClose}
        >
        <Box className={classes.reviewForm} component="div">
        <Typography variant="h4">
            Write a review
        </Typography>
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={snackOpen}
            onClose={handleSnackClose}
        >
            <MuiAlert
            severity="success"
            variant="filled"
            onClose={handleSnackClose}
            >
            <Typography variant="h4">
                Thank you for submitting a review
            </Typography>
            </MuiAlert>
        </Snackbar>
        <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
        >
            <TextField
            variant="outlined"
            margin="normal"
            required
            id="author"
            label="Author"
            name="author"
            autoFocus
            {...register('authorRequired', { required: "Author is required" })}
            />
            {errors.authorRequired && (<Typography className={classes.error}><WarningIcon fontSize="small" />{" " + errors.authorRequired.message}</Typography>)}

            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="content"
            label="Review text"
            id="content"
            multiline
            rows={10}
            {...register('contentRequired', {
                required: "Review is required"         })}          
            />
            {errors.contentRequired && (<Typography className={classes.error}><WarningIcon fontSize="small" />{" " + errors.contentRequired.message}</Typography>)}
            {console.log(errors)}
            <Box>
            <Button
                type="submit"
                variant="contained"
                color="primary"
            >
                Submit
            </Button>
            <Button
                type="reset"
                variant="contained"
                color="secondary"
                onClick={() => {
                reset({
                    author: "",
                    content: "",
                });
                }}
            >
                Reset
            </Button>
            </Box>
        </form>
        </Box>
        </Modal>
        </>
    );
};

export default withRouter(AddReview);