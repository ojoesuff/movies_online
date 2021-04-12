import React from "react";
import { storiesOf } from "@storybook/react";
import RatingBubble from "../src/components/ratingBubble";
import MovieCard from "../src/components/movieCard";
import MovieList from "../src/components/movieList";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import FilterSideBar from "../src/components/filterSideBar";
import MovieDetail from "../src/components/movieDetail";

storiesOf("Static", module)
  .add("Rating Bubble", () => {
    return <RatingBubble />;
  })
  .add("Movie Card", () => {
    return <MovieCard />;
  })
  .add("Movie List", () => {
    return <MovieList />;
  })
  .add("Header", () => {
    return <Header />;
  })
  .add("Footer", () => {
    return <Footer />;
  })
  .add("FilterSideBar", () => {
    return <FilterSideBar />;
  })
  .add("MovieDetail", () => {
    return <MovieDetail />;
  })
