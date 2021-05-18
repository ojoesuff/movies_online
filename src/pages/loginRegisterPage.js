import React, { useContext, useState } from "react";
import TemplatePage from "../components/templatePage";
import PageTitle from "../components/pageTitle";
import { useForm } from "react-hook-form";
import { Box, Button, makeStyles, Snackbar, TextField, Typography } from "@material-ui/core";
import WarningIcon from '@material-ui/icons/Warning';
import Alert from "@material-ui/lab/Alert";
import { AuthContext } from '../contexts/authContext';
import { Redirect } from "react-router-dom";

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
        params: { action },
    }, props
}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [snackOpen, setSnackOpen] = useState(false);
    const classes = useStyles();
    const minPasswordLength = 8;
    const snackOpenDuration = 1000;
    const context = useContext(AuthContext)
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [registered, setRegistered] = useState(false);
    const userRegister = action == "register"
    const userLogin = action == "login"
    const title = userRegister ? "Register" : "Login"

    const onSubmit = () => {
        if(userRegister) {
            handleRegister()
        }            
        else {
            login()
        }            
    };

    const login = () => {
        context.authenticate(userName, password);
    };

    const handleSnackClose = () => {
        setSnackOpen(false);
    }

    if (context.isAuthenticated === true) {
        return <Redirect to={"/"} />;
    }
    if (registered === true) {
        return <Redirect to="/" />;
    }

    const handleRegister = () => {
        if (password === passwordAgain) {
            context.register(userName, password);
            setRegistered(true);
        }
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
                                User successfully created
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
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}

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
                            onChange={e => {
                                setPasswordAgain(e.target.value);
                            }}
                        />
                        {errors.password && errors.password.type == "required" && (<Typography className={classes.error}><WarningIcon fontSize="small" />{" Password is required"}</Typography>)}
                        {errors.password && errors.password.type == "minLength" && (<Typography className={classes.error}><WarningIcon fontSize="small" />{` ${minPasswordLength} minimum length`}</Typography>)}
                        {userRegister ?
                            <>
                            <TextField
                                className={classes.textField}
                                variant="outlined"
                                margin="normal"
                                required
                                type="password"
                                name="passwordAgain"
                                label="Repeat Password"
                                id="passwordAgain"
                                {...register('passwordAgain', {
                                    required: "Password is required",
                                    minLength: minPasswordLength
                                })}
                                onChange={e => {
                                    setPassword(e.target.value);
                                }}
                            /> 
                            {errors.passwordAgain && errors.passwordAgain.type == "required" && (<Typography className={classes.error}><WarningIcon fontSize="small" />{" Repeat Password is required"}</Typography>)}
                        {errors.passwordAgain && errors.passwordAgain.type == "minLength" && (<Typography className={classes.error}><WarningIcon fontSize="small" />{` ${minPasswordLength} minimum length`}</Typography>)}
                        </>
                        : false}                        
                        <Box>
                            <Button
                                className={classes.button}
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                {userRegister ? "Submit" : "Login"}
    </Button>

                        </Box>
                    </form>
                </Box>
            </TemplatePage>

        </>
    );
};

export default LoginRegisterPage;