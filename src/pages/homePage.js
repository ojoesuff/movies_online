import { useContext } from "react";
import TemplateMoviePage from "../components/templateMoviePage";
import { MoviesContext } from "../contexts/moviesContext";

function HomePage() {
  const context = useContext(MoviesContext);
  const { movies  } = context;

  return (
    <TemplateMoviePage movies={movies}>
    </TemplateMoviePage>
  );
}

export default HomePage;
