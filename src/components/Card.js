import React from "react";

const Card = (props) => {
  return (
    <div className="col mb-2" onClick={() => props.onClick(props.id)}>
      <div className="card bg-light text-white">
        <img src={props.url} className="card-img" alt="Failed to load" />
      </div>
    </div>
  );
}

export default Card;