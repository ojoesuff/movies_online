import MovieCard from "../components/movieCard";
import { useEffect, useState } from 'react';

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
    <>
      {movieList ? (
        <>
          <div className="App">
            <h1>Movies</h1> 
            {movieList}
          </div>
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
  );
}

export default App;
