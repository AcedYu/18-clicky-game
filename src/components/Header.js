import React from "react";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary text-white sticky-top">
      <h1>React Clicky Game</h1>
      <div className="navbar-nav ml-auto">
        <h1>{props.status}</h1>
      </div>
      <div className="navbar-nav ml-auto">
        <h1>Score: {props.score} | Top Score: {props.topscore}</h1>
      </div>
    </nav>
  );
}

export default Header;
