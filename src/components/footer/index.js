import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Typography, IconButton, ButtonGroup, Toolbar } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    bottom: 0,
    top: "auto",
    background: theme.palette.primary.light,
    display: "flex",
  },
  buttonGroup: {
    flexGrow: 1,
  },
  button: {
    margin: 0,
  }
}));

const getCurrentYear = () => {
    return new Date().getFullYear()
}

const socialMedia = [
  {
    path: "https://twitter.com/",
    icon: <TwitterIcon/>
  },
  {
    path: "https://www.youtube.com/",
    icon: <YouTubeIcon/>
  },
  {
    path: "https://www.instagram.com/",
    icon: <InstagramIcon/>
  },
  {
    path: "https://www.facebook.com/",
    icon: <FacebookIcon/>
  },
]

const Footer = (props) => {
  const classes = useStyles();

  return (
   <AppBar className={classes.footer}>
     <Toolbar>        
       <ButtonGroup className={classes.buttonGroup}>
          {socialMedia.map(link => (
            <IconButton href={link.path} target="_blank" className={classes.button}>
            {link.icon}
          </IconButton>
          ))}
       </ButtonGroup>
       <Typography>
            {'\u00A9'} Copyright {getCurrentYear()} TMDB
       </Typography>
     </Toolbar>      
   </AppBar>
  )
}

export default Footer;