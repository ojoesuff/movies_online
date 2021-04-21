import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import FullReview from "../components/fullReview"
import TemplateDetailsPage from "../components/templateDetailsPage";

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: "100vw",
        height: "100vh",
        backgroundAttachment: "fixed",
    }
  }));

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