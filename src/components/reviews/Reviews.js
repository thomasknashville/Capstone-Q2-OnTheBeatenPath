import React from "react";
import "./Reviews.css";
import PicUpload from "./reviewsComponents/PicUpload";
import ReviewWindow from "./reviewsComponents/reviewWindow";
import ReviewNav from "./reviewsComponents/ReviewNav";
import ReviewTextArea from "./reviewsComponents/ReviewTextArea";

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
        <ReviewTextArea />
        <PicUpload />
      </div>
    </div>
  );
};

export default Reviews;
