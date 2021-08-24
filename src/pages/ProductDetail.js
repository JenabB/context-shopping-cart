import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import { formatRp } from "../utils/formatRp";

const ProductDetail = () => {
  const { product, addToCart } = useContext(GlobalContext);

  return (
    <div className="lg:w-2/4 mx-auto mt-10">
      <div className="flex justify-center">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="p-4">
        <p className="my-4 text-black font-bold">{product.title}</p>
        <p>{product.description}</p>
      </div>
      <p className="text-blue-400 font-bold inline-block px-3 mt-4">
        {formatRp(product.price)}
      </p>
      <div className="p-4">
        <button
          className="bg-blue-400 px-2 py-1 text-white rounded-lg"
          onClick={() => addToCart(product.id)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
