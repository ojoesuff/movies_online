import { useContext, useEffect, useState } from "react";
import TemplateMoviePage from "../components/templateMoviePage";
import { MoviesContext } from "../contexts/moviesContext";

function FavouritesPage() {
  const context = useContext(MoviesContext);
  // const [favourites, setFavourites] = useState()
  const { favourites  } = context;
  // const favouriteMovies = movies.filter((m) => m.favourite);
  const title = "Favourite Movies"

  return (
    <>
    {favourites ?     
    <TemplateMoviePage movies={favourites} title={title}>
    </TemplateMoviePage> : false}
    </>
  );
}

export default FavouritesPage;
