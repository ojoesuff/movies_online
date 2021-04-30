import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import WishlistsContextProvider from "./contexts/wishlistsContext";
import Home from "./pages/homePage";
import MovieDetailsPage from "./pages/movieDetailsPage"
import MovieReviewPage from "./pages/movieReviewPage"
import FavouritesPage from "./pages/favouritesPage"
import WishlistPage from "./pages/wishlistPage"


const App = () => {
  return (
    <BrowserRouter>
      <MoviesContextProvider>
        <GenresContextProvider>
          <WishlistsContextProvider>
            <Switch>
              {/* <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            
            
            <Route exact path="/upcoming" component={UpcomingMoviesPage} /> */}
              <Route exact path="/wishlist" component={WishlistPage} />
              <Route exact path="/movies/favourites" component={FavouritesPage} />
              <Route exact path="/movies/upcoming" component={Home} />
              <Route exact path="/" component={Home} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Route path="/movies/:id" component={MovieDetailsPage} />
              <Redirect from="*" to="/" />
            </Switch>
          </WishlistsContextProvider>
        </GenresContextProvider>
      </MoviesContextProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));