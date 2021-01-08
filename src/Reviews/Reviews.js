import React from "react";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="body">
      <div className="header">
        <h1>Leave a review and a picture of your favorite parks!</h1>
        <h1>signup/signin</h1>
      </div>
      <br />
      <div className="reviewBody">
        <div id="reviewNav">
          <p>Link to park pages</p>
          <p>Recommend a park(Link to our email)</p>
        </div>
        <div id="reviewWindow">window to view reviews</div>
      </div>
      <br />
      <div className="footer">
        <div id="reviewTextArea">
          <textarea></textarea>
          <input type="submit" value="submit"></input>
        </div>
        <div id="picUpload">
          <input type="file" accept="image/png, image/jpeg, image/jpg"></input>
          <input type="submit" value="submit"></input>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
