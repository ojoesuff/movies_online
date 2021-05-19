import React, { useContext, useState } from "react";
import TemplatePage from "../components/templatePage";
import PageTitle from "../components/pageTitle";
import { useForm } from "react-hook-form";
import { Box, Button, makeStyles, Snackbar, TextField, Typography } from "@material-ui/core";
import WarningIcon from '@material-ui/icons/Warning';
import { AuthContext } from '../contexts/authContext';
import { Link, Redirect } from "react-router-dom";

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
    }
}) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const classes = useStyles();
    const minPasswordLength = 8;
    const context = useContext(AuthContext)
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [registered, setRegistered] = useState(false);
    const userRegister = action == "register"
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
        console.log("login()")
        context.authenticate(userName, password);
    };

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

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                    >
                        {userRegister ? false :
                        <Typography>Already registered? Login <Link to="/user/register" color="inherit">here</Link>.</Typography>}                        
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
                                setPassword(e.target.value);
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
                                    validate: (value) => value === watch('password') || "Passwords don't match."
                                })}
                                onChange={e => {
                                    setPasswordAgain(e.target.value);
                                }}
                            /> 
                            {errors.passwordAgain && (<Typography className={classes.error}><WarningIcon fontSize="small" />{" Passwords do not match"}</Typography>)}
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