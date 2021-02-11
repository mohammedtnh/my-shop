import axios from "axios";
// ACTION TYPES
const FETCH_PRODUCTS = "FETCH_PRODUCTS";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const CREATE_PRODUCT = "CREATE_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8000/products/");
      dispatch({
        type: FETCH_PRODUCTS,
        payload: { products: response.data },
      });
    } catch (error) {
      console.log(`GET Request Error: ${error}`);
    }
  };
};

export const deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    payload: { productId },
  };
};

export const createProduct = (newProduct) => {
  return {
    type: CREATE_PRODUCT,
    payload: { newProduct },
  };
};

export const updateProduct = (updatedProduct) => {
  return {
    type: UPDATE_PRODUCT,
    payload: { updatedProduct: updatedProduct },
  };
};
