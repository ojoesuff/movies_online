import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
            {/* <Route exact path="/reviews/form" component={AddMovieReviewPage} />
            <Route path="/reviews/:id" component={MovieReviewPage} />
            <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
            <Route exact path="/upcoming" component={UpcomingMoviesPage} />
            <Route path="/movies/:id" component={MoviePage} /> */}
            <Route exact path="/wishlist" component={Home} />
            <Route exact path="/favorites" component={Home} />
            <Route exact path="/upcoming" component={Home} />
            <Route exact path="/" component={Home} />              
            <Redirect from="*" to="/" />
          </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));