import React, { useState, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import { formatRp } from "../utils/formatRp";

const CartItem = ({ item }) => {
  const [input, setInput] = useState(item.quantity);
  const { removeFromCart, adjustQuantity } = useContext(GlobalContext);

  const handleChange = (e) => {
    setInput(e.target.value);
    adjustQuantity(item.id, e.target.value);
  };

  return (
    <div className="lg:m-4 m-2 shadow-lg rounded-lg">
      <img
        className="rounded-t-lg"
        style={{ height: "300px", width: "100%", objectFit: "cover" }}
        src={item.image}
        alt={item.title}
      />

      <div className="p-4">
        <p className="font-bold mb-2">{item.title}</p>
        <p className="line-clamp-2">{item.description}</p>
        <p className="text-blue-400 font-bold">{formatRp(item.price)}</p>
      </div>

      <div className="px-4">
        <label htmlFor="quantity">Quantity</label>
        <input
          className="bg-gray-200 ml-4 w-2/4 pl-2 rounded-lg"
          min="1"
          type="number"
          id="quantity"
          name="quantity"
          value={input}
          onChange={handleChange}
        />
      </div>

      <div className="p-4">
        <button
          className="bg-red-400 text-white px-2 py-1 rounded-lg"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
