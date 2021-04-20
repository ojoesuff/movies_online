import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TemplatePage from "../components/templatePage";
import useMovie from "../hooks/useMovie"
import MovieDetail from "../components/movieDetail";
import { withRouter } from "react-router-dom";
import TemplateDetailsPage from "../components/templateDetailsPage";

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: "100vw",
        height: "100vh",
        backgroundAttachment: "fixed",
    }
  }));

const MovieDetailsPage = ({
    match: {
      params: { id },
    },
  }) => {

    const [movie] = useMovie(id)

    return (
        <>
        {movie ? (
          <TemplateDetailsPage movie={movie}>
            <MovieDetail movie={movie}/>
          </TemplateDetailsPage>
      ) : (
        <p>Loading movie details</p>
      )}
               
        </>
    );
};

export default withRouter(MovieDetailsPage);