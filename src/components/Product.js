import React, { useContext } from "react";
import { formatRp } from "../utils/formatRp";
import { GlobalContext } from "../contexts/GlobalState";

const Product = ({ product }) => {
  const { addToCart } = useContext(GlobalContext);

  return (
    <div className="shadow-lg rounded p-2 m-2">
      <img
        src={product.image}
        alt={product.title}
        style={{ height: "300px" }}
      />
      <div>
        <div className="p-4">
          <p className="font-bold mb-2">{product.title}</p>
          <p className="line-clamp-2">{product.description}</p>
          <p className="text-blue-400 font-bold inline-block px-3 mt-4">
            {formatRp(product.price)}
          </p>
        </div>
        <div className="p-4">
          <button
            className="bg-blue-400 px-2 py-1 text-white rounded-lg"
            onClick={() => addToCart(product.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
