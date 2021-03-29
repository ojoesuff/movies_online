import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../footer";
import Header from "../header";
import FilterSideBar from "../filterSideBar";

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
        <Header />
        <FilterSideBar />
        {props.component}
        <Footer />      
    </>
  );
};

export default TemplatePage;