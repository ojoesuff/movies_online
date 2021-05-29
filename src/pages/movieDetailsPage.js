import React, { useContext } from "react";
import MovieDetail from "../components/movieDetail";
import { withRouter } from "react-router-dom";
import TemplateDetailsPage from "../components/templateDetailsPage";
import { MoviesContext } from "../contexts/moviesContext";

const MovieDetailsPage = ({
    match: {
      params: { id },
    },
  }) => {
    id = parseInt(id, 10);
    const context = useContext(MoviesContext);
    const { movies } = context
    const movie = movies.find(m => m.id === id)

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