import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import { Box, Button, IconButton, Modal, Snackbar, TextField, Tooltip, Typography } from "@material-ui/core";
import { AddCircleRounded } from "@material-ui/icons";
import WarningIcon from '@material-ui/icons/Warning';
import { useForm } from "react-hook-form";
import { MoviesContext } from "../../contexts/moviesContext";
import Alert from "@material-ui/lab/Alert";

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
    },
    button: {
        marginRight: theme.spacing(3)
    }
}));

const AddReview = ({history, movie}) => {  
    const classes = useStyles();
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ snackOpen, setSnackOpen ] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const context = useContext(MoviesContext);
    const minReviewLength = 10;
    const snackOpenDuration = 1000;

    const handleModalOpen = () => {
        setModalOpen(true);
    };    
    
    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleSnackClose = e => {
        setSnackOpen(false);
        setModalOpen(false);
        history.replace(`/movies/${movie.id}`)
      };

    const onSubmit = (review) => {
        review.id = movie.id;
        review.created_at = new Date();        
        context.addReview(movie, review);
        reset();
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
        <Typography variant="h6" color={"primary"}>
            Submit a Review
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
                Review submitted, thank you!
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
            id="author"
            label="Author"
            name="author"
            autoFocus
            {...register('author', { 
                required: "Author is required" })}
            />
            {errors.author && (<Typography className={classes.error}><WarningIcon fontSize="small" />{" " + errors.author.message}</Typography>)}

            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="content"
            label="Review"
            id="content"
            multiline
            rows={10}
            {...register('content', {
                required: "Review is required",
                minLength: minReviewLength  })}          
            />
            {errors.content && errors.content.type == "required" && (<Typography className={classes.error}><WarningIcon fontSize="small" />{" Review is required"}</Typography>)}
            {errors.content && errors.content.type == "minLength" && (<Typography className={classes.error}><WarningIcon fontSize="small" />{` ${minReviewLength} minimum length`}</Typography>)}
            <Box>
            <Button
                className={classes.button}
                type="submit"
                variant="contained"
                color="primary"
            >
                Submit
            </Button>
            <Button
                className={classes.button}
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