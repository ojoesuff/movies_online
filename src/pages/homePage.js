import { useContext } from "react";
import TemplateMoviePage from "../components/templateMoviePage";
import { MoviesContext } from "../contexts/moviesContext";

function HomePage() {
  const context = useContext(MoviesContext);
  const { movies  } = context;
  const title = "Home Page"

  return (
    <TemplateMoviePage movies={movies} title={title}>
    </TemplateMoviePage>
  );
}

export default HomePage;
