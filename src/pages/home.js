import MovieCard from "../components/movieCard";
import MovieList from "../components/movieList";
import Header from "../components/header";
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { orangeTheme, greenTheme } from "../themes";
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const [movies, setMovies] = useState([])

  const moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`

  useEffect(() => {
    fetch(moviesUrl)
    .then(response => response.json())
    .then(json => json.results)
    .then(movies => {
      setMovies(movies);
    }); 
    // eslint-disable-next-line react-hooks/exhaustive-deps   
  }, []);

  const movieList = movies.map(movie => {
    return <MovieCard movie={movie}></MovieCard>
  })

  return (
    <ThemeProvider theme={orangeTheme}>
      <CssBaseline />
      <Header></Header>
      <MovieList></MovieList>
    </ThemeProvider>
  );
}

export default App;
