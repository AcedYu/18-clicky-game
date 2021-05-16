import React from "react";

const Card = (props) => {
  return (
    <div className="col">
      <div className="card bg-dark text-white">
        <img src={props.url} className="card-img" alt="Failed to load" />
      </div>
    </div>
  );
}

export default Card;