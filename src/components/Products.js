import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import Filter from "./Filter";
import Product from "./Product";

const Products = () => {
  const { products } = useContext(GlobalContext);

  return (
    <div className="mt-5 w-3/4 mx-auto">
      <Filter />
      <div className="grid lg:grid-cols-3">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
