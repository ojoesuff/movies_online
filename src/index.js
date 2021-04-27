import { CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {mainTheme} from "./themes"
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import Home from "./pages/homePage";
import MovieDetailsPage from "./pages/movieDetailsPage"
import MovieReviewPage from "./pages/movieReviewPage"
import FavouritesPage from "./pages/favouritesPage"


const App = () => {
  return (
      <BrowserRouter>
      <MoviesContextProvider>
      <GenresContextProvider>
        <Switch>
            {/* <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            
            
            <Route exact path="/upcoming" component={UpcomingMoviesPage} /> */}
            <Route path="/reviews/:id" component={MovieReviewPage} />
            <Route path="/movies/:id" component={MovieDetailsPage} />
            <Route exact path="/wishlist" component={Home} />
            <Route exact path="/movies/favourites" component={FavouritesPage} />
            <Route exact path="/upcoming" component={Home} />
            <Route exact path="/" component={Home} />              
            <Redirect from="*" to="/" />
          </Switch>
      </GenresContextProvider>  
      </MoviesContextProvider>            
    </BrowserRouter>    
  );
};

ReactDOM.render(<App />, document.getElementById("root"));