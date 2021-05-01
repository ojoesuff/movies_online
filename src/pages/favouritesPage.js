import { useContext } from "react";
import TemplateMoviePage from "../components/templateMoviePage";
import { MoviesContext } from "../contexts/moviesContext";

function FavouritesPage() {
  const context = useContext(MoviesContext);
  const { movies  } = context;
  console.log("favourites page")
  const favouriteMovies = movies.filter((m) => m.favourite);

  return (
    <TemplateMoviePage movies={favouriteMovies}>
    </TemplateMoviePage>
  );
}

export default FavouritesPage;