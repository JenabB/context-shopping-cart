import React from "react";
import { useHistory, Link } from "react-router-dom";

const AppBar = () => {
  let history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  return (
    <nav className="bg-gray-200 text-white sticky top-0 p-4 shadow flex justify-between">
      <div></div>
      <h1 className="font-bold text-center text-lg" onClick={goHome}>
        Shopping Cart
      </h1>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default AppBar;
