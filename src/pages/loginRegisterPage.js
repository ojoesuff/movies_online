import React, { useContext, useState } from "react";
import TemplatePage from "../components/templatePage";
import PageTitle from "../components/pageTitle";
import { useForm } from "react-hook-form";
import { Box, Button, makeStyles, Snackbar, TextField, Typography } from "@material-ui/core";
import WarningIcon from '@material-ui/icons/Warning';
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
    loginForm: {
        position: "absolute",
        left: "50%",
        top: "40%",
        transform: "translate(-50%, -50%)",
        maxHeight: "100vh",
        overflowY: "auto",
        padding: theme.spacing(2, 4, 3),
    },
    error: {
        color: theme.palette.warning.dark
    },
    button: {
        marginRight: theme.spacing(3)
    },
    textField: {
        display: "block",
    }
}));

const LoginRegisterPage = ({
    match: {
        params: { type },
    },
}) => {
    const title = "Login";
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [ snackOpen, setSnackOpen ] = useState(false);
    const classes = useStyles();
    const minPasswordLength = 8;
    const snackOpenDuration = 1000;

    const onSubmit = (user) => {
        // do something
    };

    const handleSnackClose = () => {
        setSnackOpen(false);
    }

    return (
        <>
            <TemplatePage>
                <PageTitle title={title} />
                <Box className={classes.loginForm} component="div">
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
                            className={classes.textField}
                            variant="outlined"
                            margin="normal"
                            required
                            id="username"
                            label="Username"
                            name="username"
                            autoFocus
                            {...register('username', {
                                required: "Username is required"
                            })}
                        />
                        {errors.username && (<Typography className={classes.error}><WarningIcon fontSize="small" />{" " + errors.username.message}</Typography>)}

                        <TextField
                            className={classes.textField}
                            variant="outlined"
                            margin="normal"
                            required
                            type="password"
                            name="password"
                            label="Password"
                            id="password"
                            {...register('password', {
                                required: "Password is required",
                                minLength: minPasswordLength
                            })}
                        />
                        {errors.password && errors.password.type == "required" && (<Typography className={classes.error}><WarningIcon fontSize="small" />{" Password is required"}</Typography>)}
                        {errors.password && errors.password.type == "minLength" && (<Typography className={classes.error}><WarningIcon fontSize="small" />{` ${minPasswordLength} minimum length`}</Typography>)}
                        <Box>
                            <Button
                                className={classes.button}
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                Login
            </Button>
                        </Box>
                    </form>
                </Box>
            </TemplatePage>

        </>
    );
};

export default LoginRegisterPage;