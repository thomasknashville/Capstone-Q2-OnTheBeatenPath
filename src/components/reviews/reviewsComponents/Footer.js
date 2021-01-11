import React, { useState } from "react";

const Footer = () => {
  const [review, setReview] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    setReview(e.target.value);
  };

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    console.log(photo);
    console.log(review);
    e.preventDefault();
    fetch("/api", {
      method: "POST",
      body: JSON.stringify({ review, photo }),
    }).then((res) => res.json());
    setPhoto(null);
    setReview("");
  };

  return (
    <div className="footer">
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="What did you think of this park?"
          onChange={handleChange}
        ></textarea>
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={handlePhoto}
        ></input>
        <br />
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
};

export default Footer;
