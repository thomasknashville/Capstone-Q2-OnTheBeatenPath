import React from "react";

const PicUpload = () => {
  return (
    <div className="footer">
      <textarea></textarea>
      <input type="file" accept="image/png, image/jpeg, image/jpg"></input>
      <input type="submit" value="submit"></input>
    </div>
  );
};

export default PicUpload;
