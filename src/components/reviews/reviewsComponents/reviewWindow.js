import React, { useState, useEffect } from "react";

const ReviewWindow = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/api/me", {
      method: "GET",
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then(
        (json) => {
          console.log(json);
          setReviews(json);
        },
        (err) => {
          console.error(err);
        }
      );
  }, []);
  // console.log(reviews);
  return (
    <div id="reviewWindow">
      <p>Here are some reviews: {reviews.name}</p>
    </div>
  );
};

export default ReviewWindow;
