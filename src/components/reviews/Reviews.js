import React from "react";
import "./Reviews.css";
import Footer from "./reviewsComponents/Footer";
import ReviewWindow from "./reviewsComponents/ReviewWindow";
import ReviewNav from "./reviewsComponents/ReviewNav";

const Reviews = () => {
  return (
    <div className="body">
      <div className="header">
        <h1>Leave a review and a picture of your favorite parks!</h1>
      </div>
      <br />
      <div className="reviewBody">
        <ReviewNav />
        <ReviewWindow />
      </div>
      <br />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Reviews;
