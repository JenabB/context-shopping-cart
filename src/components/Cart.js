import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import { formatRp } from "../utils/formatRp";
import CartItem from "./CartItem";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const { cart } = useContext(GlobalContext);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.quantity;
      price += item.quantity * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <div>
      <div className="lg:flex">
        <div className="grid lg:w-3/4 lg:grid-cols-3 grid-cols-1 m-10">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="lg:m-10 m-4 lg:w-1/4">
          <h1 className="bg-gray-400 text-white rounded-lg px-4 py-2">
            Cart Summary
          </h1>
          <div className="p-4">
            <h1>Total: {totalItems} items</h1>
            <h2>{formatRp(totalPrice)}</h2>
          </div>

          <button className="bg-gray-500 px-4 py-2 rounded-lg text-white">
            Process To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
