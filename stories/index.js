import React from "react";
import { storiesOf } from "@storybook/react";
import RatingBubble from "../src/components/ratingBubble";
import MovieCard from "../src/components/movieCard";

storiesOf("Static", module)
  .add("Rating Bubble", () => {
    return <RatingBubble />;
  })
  .add("Movie Card", () => {
    return <MovieCard />;
  });
