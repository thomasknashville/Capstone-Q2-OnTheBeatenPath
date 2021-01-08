import React, { useState, useEffect } from "react";

const ReviewWindow = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetch("/api/me");
        const data = await response.json;
        setReviews(data.name);
        console.log(JSON.parse(response.name));
      } catch (err) {
        console.error("Unable to collect data requested", err);
      }
    };
    getReviews();
  }, []);
  //   console.log(reviews);
  return (
    <div id="reviewWindow">
      <p>{reviews.name}</p>
    </div>
  );
};

export default ReviewWindow;
