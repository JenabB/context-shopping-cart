import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";
import products from "./products.json";

const initialState = {
  products: products.products,
  cart: [],
  currentItem: null,
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

  function loadCurrentItem(item) {
    dispatch({
      type: "LOAD_CURRENT_ITEM",
      payload: item,
    });
  }

  function adjustQuantity(itemId, value) {
    return {
      type: "ADJUST_QUANTITY",
      payload: {
        id: itemId,
        quantity: value,
      },
    };
  }

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        currentItem: state.currentItem,
        addToCart,
        removeFromCart,
        loadCurrentItem,
        adjustQuantity,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
