import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontFamily: 'Bebas Neue',
    textShadow: "2px 2px silver"
  },
}));

const PageTitle = ({title}) => {
  const classes = useStyles();

  return (
    <>
    <Typography 
      align="center" 
      variant="h3"
      className={classes.title}
      color="primary"
    >
    {title}</Typography>
      
             
    </>
  );
};

export default PageTitle;