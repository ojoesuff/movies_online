import { useContext } from "react";
import TemplateMoviePage from "../components/templateMoviePage";
import { MoviesContext } from "../contexts/moviesContext";

function TopRatedPage() {
  const context = useContext(MoviesContext);
  const { topRated  } = context;
  const title = "Top Rated Movies"

  return (
    <TemplateMoviePage movies={topRated} title={title}>
    </TemplateMoviePage>
  );
}

export default TopRatedPage;
