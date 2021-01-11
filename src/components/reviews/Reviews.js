<<<<<<< HEAD
import React from "react";
import "./Reviews.css";
import Footer from "./reviewsComponents/Footer";
import ReviewWindow from "./reviewsComponents/reviewWindow";
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
      <Footer />
    </div>
  );
};

export default Reviews;
=======
// import React from 'react';

// const Reviews = () => {
//   return (
//     <>
//     <div> This is Reviews page </div>
//     </>
//   )
// }

// export default Reviews;

export default function Reviews() {
  return <h1>Reviews</h1>;
}
>>>>>>> authentication
