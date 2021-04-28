import React from "react";
import { storiesOf } from "@storybook/react";
import RatingBubble from "../src/components/ratingBubble";
import WishlistDetail from "../src/components/wishListDetail";
import wishlists from "./sampleData/wishlists.json"
import movies from "./sampleData/movies.json"
// import MovieList from "../src/components/movieList";
// import Header from "../src/components/header";
// import Footer from "../src/components/footer";
// import FilterSideBar from "../src/components/filterSideBar";
// import MovieDetail from "../src/components/movieDetail";
// import AddReviewButton from "../src/components/addReviewButton";

const emptyList = {}

storiesOf("Movies/Rating Bubble", module)
  .add("Bad", () => {
    return <RatingBubble rating={3.5} />;
  })
  .add("Good", () => {
    return <RatingBubble rating={6.1} />;
  })
  .add("Excellent", () => {
    return <RatingBubble rating={8.8} />;
  })

storiesOf("Wishlist/Wishlist Details", module)
  .add("Multiple", () => {
    return <WishlistDetail wishlists={wishlists.wishlists} movies={movies.results}/>;
  })
  .add("Empty", () => {
    return <WishlistDetail wishlists={emptyList} movies={movies.results}/>;
  })

// storiesOf("Movies/Movie Card", module)
//   .add("Fight Club", () => {
//     return
//     <MemoryRouter> 
//       <MovieCard movie={fightClubMovie} />
//     </MemoryRouter>
//   })
  // .add("Good", () => {
  //   return <MovieCard rating={6.1} />;
  // })
  // .add("Movie Card", () => {
  //   return <MovieCard />;
  // })
  // .add("Movie List", () => {
  //   return <MovieList />;
  // })
  // .add("Header", () => {
  //   return <Header />;
  // })
  // .add("Footer", () => {
  //   return <Footer />;
  // })
  // .add("FilterSideBar", () => {
  //   return <FilterSideBar />;
  // })
  // .add("MovieDetail", () => {
  //   return <MovieDetail />;
  // })
  // .add("AddReviewButton", () => {
  //   return <AddReviewButton />;
  // })
