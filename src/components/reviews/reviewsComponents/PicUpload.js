import React from "react";

const PicUpload = () => {
  return (
    <div id="picUpload">
      <input type="file" accept="image/png, image/jpeg, image/jpg"></input>
      <input type="submit" value="submit"></input>
    </div>
  );
};

export default PicUpload;
