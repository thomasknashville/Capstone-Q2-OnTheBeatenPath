import React, { useState, useEffect } from "react";

const ReviewWindow = () => {
  const [reviews, setReviews] = useState({});

  const getReviews = async () => {
    try {
      const response = await fetch("/reviews");
      const data = await response.json;
      setReviews(data.results);
    } catch (err) {
      console.error("Unable to collect data requested", err);
    }
  };
  return (
    <div id="reviewWindow">
      <h1>window to view reviews</h1>
    </div>
  );
};

export default ReviewWindow;
