import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../footer";
import Header from "../header";
import Theme from "../theme";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: '100vh',
  },
}));

const TemplatePage = (props) => {
  const classes = useStyles();

  return (
    <>
    <Theme>
      <Header />
        {props.children}
      <Footer /> 
    </Theme>
      
             
    </>
  );
};

export default TemplatePage;