import React from "react";
import { storiesOf } from "@storybook/react";
import RatingBubble from "../src/components/ratingBubble";
import PageTitle from "../src/components/pageTitle";
import Footer from "../src/components/footer";

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

storiesOf("Page Common/Page Title", module)
  .add("Short", () => {
    return <PageTitle title="Short Title" />;
  })
  .add("Long", () => {
    return <PageTitle title="This Would Represent a Movie Title That is Longer Than the Movie 'Short Title'" />;
  })

storiesOf("Page Common/Footer", module)
  .add("All", () => {
    return <Footer title="Short Title" />;
  })

