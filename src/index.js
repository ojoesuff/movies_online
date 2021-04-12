import { CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {mainTheme} from "./themes"
import MoviesContextProvider from "./contexts/moviesContext";
import Home from "./pages/homePage";
import MovieDetailsPage from "./pages/movieDetailsPage"


const App = () => {
  return (
      <BrowserRouter>
      <MoviesContextProvider>
        <Switch>
            {/* <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route path="/reviews/:id" component={MovieReviewPage} />
            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <Route exact path="/upcoming" component={UpcomingMoviesPage} /> */}
            <Route path="/movies/:id" component={MovieDetailsPage} />
            <Route exact path="/wishlist" component={Home} />
            <Route exact path="/favorites" component={Home} />
            <Route exact path="/upcoming" component={Home} />
            <Route exact path="/" component={Home} />              
            <Redirect from="*" to="/" />
          </Switch>
      </MoviesContextProvider>        
    </BrowserRouter>    
  );
};

ReactDOM.render(<App />, document.getElementById("root"));