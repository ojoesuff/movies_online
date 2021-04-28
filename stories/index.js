import React from "react";
import { storiesOf } from "@storybook/react";
import RatingBubble from "../src/components/ratingBubble";
import WishlistDetail from "../src/components/wishListDetail";
import { MemoryRouter } from "react-router";
// import MovieList from "../src/components/movieList";
// import Header from "../src/components/header";
// import Footer from "../src/components/footer";
// import FilterSideBar from "../src/components/filterSideBar";
// import MovieDetail from "../src/components/movieDetail";
// import AddReviewButton from "../src/components/addReviewButton";

const fightClubMovie = {
  "adult": false,
  "backdrop_path": "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
  "belongs_to_collection": null,
  "budget": 63000000,
  "genres": [
      {
          "id": 18,
          "name": "Drama"
      }
  ],
  "homepage": "http://www.foxmovies.com/movies/fight-club",
  "id": 550,
  "imdb_id": "tt0137523",
  "original_language": "en",
  "original_title": "Fight Club",
  "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
  "popularity": 40.597,
  "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
  "production_companies": [
      {
          "id": 508,
          "logo_path": "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
          "name": "Regency Enterprises",
          "origin_country": "US"
      },
      {
          "id": 711,
          "logo_path": "/tEiIH5QesdheJmDAqQwvtN60727.png",
          "name": "Fox 2000 Pictures",
          "origin_country": "US"
      },
      {
          "id": 20555,
          "logo_path": "/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
          "name": "Taurus Film",
          "origin_country": "DE"
      },
      {
          "id": 54051,
          "logo_path": null,
          "name": "Atman Entertainment",
          "origin_country": ""
      },
      {
          "id": 54052,
          "logo_path": null,
          "name": "Knickerbocker Films",
          "origin_country": "US"
      },
      {
          "id": 25,
          "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
          "name": "20th Century Fox",
          "origin_country": "US"
      },
      {
          "id": 4700,
          "logo_path": "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
          "name": "The Linson Company",
          "origin_country": "US"
      }
  ],
  "production_countries": [
      {
          "iso_3166_1": "DE",
          "name": "Germany"
      },
      {
          "iso_3166_1": "US",
          "name": "United States of America"
      }
  ],
  "release_date": "1999-10-15",
  "revenue": 100853753,
  "runtime": 139,
  "spoken_languages": [
      {
          "english_name": "English",
          "iso_639_1": "en",
          "name": "English"
      }
  ],
  "status": "Released",
  "tagline": "Mischief. Mayhem. Soap.",
  "title": "Fight Club",
  "video": false,
  "vote_average": 8.4,
  "vote_count": 21594
}

const wishlists = {
  "wishlists": [
      {
          "id": 0,
          "name": "Kids"
      },
      {
          "id": 1,
          "name": "Classics"
      },
      {
          "id": 2,
          "name": "Scary"
      },
  ]
}

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
    return <WishlistDetail wishlists={wishlists.wishlists}/>;
  })
  .add("Empty", () => {
    return <WishlistDetail wishlists={emptyList} />;
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
