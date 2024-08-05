import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

const ProgressBar = ({ value, text }) => {
  return (
    <div className="container">
      <CircularProgressbar value={value} text={text} />
      <div>
        <small className="small-font">
          * The values here has been rounded off.
        </small>
      </div>
    </div>
  );
};

export default ProgressBar;
