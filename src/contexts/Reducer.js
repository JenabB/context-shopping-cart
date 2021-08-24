// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cart, { ...item, quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case "ADJUST_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: +action.payload.quantity }
            : item
        ),
      };

    case "SHOW_PRODUCT_DETAIL":
      return {
        ...state,
        product: action.payload,
      };

    case "SEARCH_PRODUCT":
      return {
        ...state,
        products:
          action.payload.query !== ""
            ? state.products.filter((item) =>
                item.title
                  .toLowerCase()
                  .includes(action.payload.query.toLowerCase())
              )
            : state.initialProducts,
      };

    default:
      return state;
  }
};
