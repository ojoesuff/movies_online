import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: 0,
    top: "auto",
    background: theme.palette.primary.light,

  },
}));

const getCurrentYear = () => {
    return new Date().getFullYear()
}

const Footer = (props) => {
  const classes = useStyles();

  return (
   <AppBar className={classes.footer}>
       <Typography align="center">
            {'\u00A9'} Copyright {getCurrentYear()}
       </Typography>
   </AppBar>
  )
}

export default Footer;