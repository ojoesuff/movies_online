import { useContext } from "react";
import TemplateMoviePage from "../components/templateMoviePage";
import { MoviesContext } from "../contexts/moviesContext";

function FavouritesPage() {
  const context = useContext(MoviesContext);
  const { movies  } = context;
  const favouriteMovies = movies.filter((m) => m.favourite);
  const title = "Favourite Movies"

  return (
    <TemplateMoviePage movies={favouriteMovies} title={title}>
    </TemplateMoviePage>
  );
}

export default FavouritesPage;
