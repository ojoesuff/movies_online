import { useContext } from "react";
import TemplateMoviePage from "../components/templateMoviePage";
import { MoviesContext } from "../contexts/moviesContext";

function FavouritesPage() {
  const context = useContext(MoviesContext);
  const { movies  } = context;
  console.log("favourites page")
  const favouriteMovies = movies.map(m => {
      return m?.favourite ? m : false
  })

  return (
    <TemplateMoviePage movies={movies}>
    </TemplateMoviePage>
  );
}

export default FavouritesPage;
