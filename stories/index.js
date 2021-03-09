import React from "react";
import { storiesOf } from "@storybook/react";
import RatingBubble from "../src/components/ratingBubble";

storiesOf("Static", module)
  .add("Rating Bubble", () => {
    return <RatingBubble />;
  });
