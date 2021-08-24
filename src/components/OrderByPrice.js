import React, { useState, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

const OrderByPrice = () => {
  const [order, setOrder] = useState("");
  const { orderByPrice, products } = useContext(GlobalContext);

  const handleChange = (e) => {
    setOrder(e.target.value);
    orderByPrice(products, e.target.value);
  };
  return (
    <div className="my-8 mx-3">
      <label>
        <select
          className="rounded-lg px-2 py-1"
          value={order}
          onChange={handleChange}
        >
          <option value="">Highest to Lowest</option>
          <option value="lowest">Lowest to highest</option>
        </select>
      </label>
    </div>
  );
};

export default OrderByPrice;
