import React, { useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalState";

const AppBar = () => {
  const [cartCount, setCartCount] = useState(0);
  const { cart } = useContext(GlobalContext);

  let history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <nav className="bg-gray-400 text-white sticky top-0 p-4 shadow flex justify-between">
      <div></div>
      <h1
        className="font-bold text-center cursor-pointer text-lg"
        onClick={goHome}
      >
        Shopping Cart
      </h1>
      <Link to="/cart">
        <div className="flex">
          <h1 class="material-icons md-24">shopping_cart</h1>
          <h1 className="mx-4 bg-white text-black px-3 rounded-lg">
            {cartCount}
          </h1>
        </div>
      </Link>
    </nav>
  );
};

export default AppBar;
