import React from "react";
import Footer from "../footer";
import Theme from "../theme";

const TemplatePage = (props) => {

  return (
    <>
    <Theme>
        {props.children}      
      <Footer /> 
    </Theme>
    </>
  );
};

export default TemplatePage;