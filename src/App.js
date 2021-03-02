import logo from './logo.svg';
import './App.css';
import MovieCard from "./components/movieCard"

const apiKey = "ad9922ecfadb998632bd93879c70dbc0"

// let movies

const movies = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=ad9922ecfadb998632bd93879c70dbc0&language=en-US&page=1")
  .then(response => response.json())
  .then(data => movies = data)
  .then(() => console.log(movies))
  // .catch(function(err) { 
  //   console.log(err);
  // })

console.log(movies)

// const movies = [
//   {
//     "name": "Forrest Gump",
//     "year": 1999,
//     "rating": 8.9
//   },
//   {
//     "name": "Fight Club",
//     "year": 2001,
//     "rating": 8.5
//   },
//   {
//     "name": "Finding Nemo",
//     "year": 2003,
//     "rating": 8.1
//   }
// ]

function App() {
  // const movieCards = movies.map(movie => (
  //   <MovieCard movie={movie} />
  // ))
  return (
    <div className="App">
      <h1>Movies</h1>
      {/* {movieCards} */}
    </div>
  );
}

export default App;
