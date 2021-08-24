import React, { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalState";

const Search = () => {
  const [query, setQuery] = useState(null);
  const { searchProduct } = useContext(GlobalContext);

  const handleChange = (e) => {
    setQuery(e.target.value);
    searchProduct(e.target.value);
  };

  return (
    <div className="text-center">
      <input
        className="bg-gray-100 px-2 py-1 rounded text-center"
        type="search"
        placeholder="search product"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
