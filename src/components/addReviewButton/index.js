import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import { IconButton, Modal } from "@material-ui/core";
import { AddCircleRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const AddReviewButton = ({history}) => {  
    const classes = useStyles();
    const [ open, setOpen ] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };    
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
        <IconButton
            onClick={handleOpen}
        >
            <AddCircleRounded fontSize="large"/>
        </IconButton>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
        <p className={classes.paper}>Test Modal</p> 
        </Modal>
        </>
    );
};

export default withRouter(AddReviewButton);