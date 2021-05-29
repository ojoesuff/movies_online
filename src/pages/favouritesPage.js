import { useContext, useEffect} from "react";
import TemplateMoviePage from "../components/templateMoviePage";
import { MoviesContext } from "../contexts/moviesContext";
import { AuthContext } from "../contexts/authContext";
import { Redirect } from "react-router";

function FavouritesPage() {
  const context = useContext(MoviesContext);
  const authContext = useContext(AuthContext);
  const { favourites, getFavourites } = context;
  const { userName, isAuthenticated } = authContext;
  const title = "Favourite Movies";  

  useEffect(() => {
    getFavourites(userName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isAuthenticated === false) {
    return <Redirect to={"/user/login"} />;
  }

  return (
    <>
      {favourites ?
        <TemplateMoviePage movies={favourites} title={title}>
        </TemplateMoviePage> : false}
    </>
  );
}

export default FavouritesPage;
