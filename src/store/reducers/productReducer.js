import slugify from "react-slugify";
import * as types from "../actions/actionTypes";

const initialState = {
  products: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        loading: false,
      };
    case types.CREATE_PRODUCT:
      const { newProduct } = action.payload;
      newProduct.id = state.products[state.products.length - 1].id + 1;
      newProduct.slug = slugify(newProduct.name, { lower: true });
      return {
        ...state,
        products: [...state.products, newProduct],
      };
    case types.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.productId
        ),
      };
    case types.UPDATE_PRODUCT:
      const { updatedProduct } = action.payload;
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        ),
      };
    default:
      return state;
  }
};

export default reducer;
