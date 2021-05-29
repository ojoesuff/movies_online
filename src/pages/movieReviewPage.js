import React from "react";
import { withRouter } from "react-router-dom";
import FullReview from "../components/fullReview"
import TemplateDetailsPage from "../components/templateDetailsPage";

const MovieReviewPage = ({
  location: {
    state: { movie, review },
  },
}) => {

    return (
        <>
        {review ? (
        <TemplateDetailsPage movie={movie}>
          <FullReview
            review={review}
            movie={movie}
          />
        </TemplateDetailsPage> 
      ) : (
        <p>Loading review</p>
      )}
               
        </>
    );
};

export default withRouter(MovieReviewPage);