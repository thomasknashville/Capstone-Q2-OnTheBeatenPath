import React, { useState } from "react";

export const Reviews = () => {
  return (
    <div>
      <div className="header">
        <h1>Leave a review and a picture of your favorite parks!</h1>
        <h1>signup/signin</h1>
      </div>
      <div className="reviewBody">
        <div className="reviewNav">
          Link to park pages Recommend a park(Link to our email)
        </div>
        <div>window to view reviews</div>
      </div>
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
