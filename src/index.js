import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import MoviesContextProvider from "./contexts/moviesContext";
import AuthContextProvider from "./contexts/authContext";
import GenresContextProvider from "./contexts/genresContext";
import WishlistsContextProvider from "./contexts/wishlistsContext";
import Home from "./pages/homePage";
import MovieDetailsPage from "./pages/movieDetailsPage"
import MovieReviewPage from "./pages/movieReviewPage"
import FavouritesPage from "./pages/favouritesPage"
import WishlistPage from "./pages/wishlistPage"
import UpcomingPage from "./pages/upcomingPage"
import TopRatedPage from "./pages/topRatedPage"
import LoginRegisterPage from "./pages/loginRegisterPage"
import Header from './components/header'
import Theme from "../src/components/theme";


const App = () => {
  return (
    <BrowserRouter>
    <Theme>
      <MoviesContextProvider>
        <GenresContextProvider>
          <WishlistsContextProvider>
            <AuthContextProvider>
              <Header />              
            <Switch>
              <Route exact path="/wishlist" component={WishlistPage} />
              <Route exact path="/movies/favourites" component={FavouritesPage} />
              <Route exact path="/movies/upcoming" component={UpcomingPage} />
              <Route exact path="/movies/top-rated" component={TopRatedPage} />
              <Route exact path="/" component={Home} />
              <Route path="/reviews/:id" component={MovieReviewPage} />
              <Route path="/user/:action" component={LoginRegisterPage} />
              <Route path="/movies/:id" component={MovieDetailsPage} />
              <Redirect from="*" to="/" />
            </Switch>
            </AuthContextProvider>
          </WishlistsContextProvider>
        </GenresContextProvider>
      </MoviesContextProvider>
      </Theme>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));