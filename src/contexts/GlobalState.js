import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";
import products from "./products.json";

const initialState = {
  initialProducts: products.products,
  products: products.products,
  cart: [],
  product: null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function addToCart(itemId) {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: itemId,
      },
    });
  }

  function removeFromCart(itemId) {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id: itemId },
    });
  }

  function getProductDetail(item) {
    dispatch({
      type: "SHOW_PRODUCT_DETAIL",
      payload: item,
    });
  }

  function adjustQuantity(itemId, value) {
    dispatch({
      type: "ADJUST_QUANTITY",
      payload: {
        id: itemId,
        quantity: value,
      },
    });
  }

  function searchProduct(query) {
    dispatch({
      type: "SEARCH_PRODUCT",
      payload: {
        query: query,
      },
    });
  }

  function orderByPrice(products, order) {
    dispatch({
      type: "ORDER_BY_PRICE",
      payload: {
        products: products,
        order: order,
      },
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        product: state.product,
        addToCart,
        removeFromCart,
        getProductDetail,
        adjustQuantity,
        searchProduct,
        orderByPrice,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
