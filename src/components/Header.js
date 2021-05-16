import React from "react";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary text-white">
      <h1>React Clicky Game</h1>
      <div className="navbar-nav ml-auto">
        <h1>Score: 0 | Top Score: 0</h1>
      </div>
    </nav>
  );
}

export default Header;
