import React from "react";
import './UserOutput.css';

const userOut = (props) => {
  return (
    <div className="UserOutput">
      <p>My Name is {props.userName}</p>
      <p>Boy</p>
    </div>
  );
};

export default userOut;