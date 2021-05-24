import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../footer";
import Header from "../header";
import Theme from "../theme";

const TemplatePage = (props) => {

  return (
    <>
    <Theme>
      {/* <Header /> */}
        {props.children}      
      <Footer /> 
    </Theme>
      
             
    </>
  );
};

export default TemplatePage;