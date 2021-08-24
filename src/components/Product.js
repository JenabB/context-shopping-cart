import React, { useContext } from "react";
import { formatRp } from "../utils/formatRp";
import { GlobalContext } from "../contexts/GlobalState";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { addToCart, getProductDetail } = useContext(GlobalContext);

  return (
    <div className="shadow-lg rounded-lg p-2 m-2">
      <Link
        to={`/product/${product.id}`}
        onClick={() => getProductDetail(product)}
      >
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            style={{ height: "300px" }}
          />
        </div>
        <div>
          <div className="p-4">
            <p className="font-bold mb-2">{product.title}</p>
            <p className="line-clamp-2">{product.description}</p>
            <p className="text-blue-400 font-bold inline-block mt-4">
              {formatRp(product.price)}
            </p>
          </div>
        </div>
      </Link>

      <div className="p-4 text-right">
        <button
          className="bg-blue-400 px-2 py-1 text-white rounded-lg"
          onClick={() => addToCart(product.id)}
        >
          <div className="flex py-1">
            <h1 className="mx-2">Add to Cart</h1>
            <h1 class="material-icons md-24">add_shopping_cart</h1>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Product;
