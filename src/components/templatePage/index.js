import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../footer";
import Header from "../header";
import Theme from "../theme";
// import MoviesContextProvider from "../../contexts/moviesContext";

const TemplatePage = (props) => {

  return (
    <>
    {/* <MoviesContextProvider> */}
    <Theme>
      {/* <Header /> */}
        {props.children}      
      <Footer /> 
    </Theme>
    {/* </MoviesContextProvider>              */}
    </>
  );
};

export default TemplatePage;