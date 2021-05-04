import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TemplatePage from "../templatePage"
import PageTitle from "../pageTitle";

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: "100vw",
        height: "100vh",
        backgroundAttachment: "fixed",
    }
  }));

const TemplateDetailsPage = ({movie, children}) => {
    const classes = useStyles();

    return (
        <>
        <TemplatePage>
        <div className={classes.background} style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}}>
            <PageTitle title={movie.title} />
            {children}
        </div>
        </TemplatePage>                
        </>
    );
};

export default TemplateDetailsPage