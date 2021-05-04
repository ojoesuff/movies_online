import { useContext } from "react";
import TemplateMoviePage from "../components/templateMoviePage";
import { MoviesContext } from "../contexts/moviesContext";

function UpcomingPage() {
  const context = useContext(MoviesContext);
  const { upcoming  } = context;
  const title = "Upcoming Movies"

  return (
    <TemplateMoviePage movies={upcoming} title={title}>
    </TemplateMoviePage>
  );
}

export default UpcomingPage;
