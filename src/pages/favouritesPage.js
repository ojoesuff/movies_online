import { useContext, useEffect, useState } from "react";
import TemplateMoviePage from "../components/templateMoviePage";
import { MoviesContext } from "../contexts/moviesContext";
import { AuthContext } from "../contexts/authContext";

function FavouritesPage() {
  const context = useContext(MoviesContext);
  const authContext = useContext(AuthContext);
  // const [favourites, setFavourites] = useState()
  const { favourites, getFavourites } = context;
  const { userName } = authContext;
  // const favouriteMovies = movies.filter((m) => m.favourite);
  const title = "Favourite Movies"

  useEffect(() => {
    getFavourites(userName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {favourites ?
        <TemplateMoviePage movies={favourites} title={title}>
        </TemplateMoviePage> : false}
    </>
  );
}

export default FavouritesPage;
