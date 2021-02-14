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
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
      dispatch({
        type: DELETE_PRODUCT,
        payload: { productId: productId },
      });
    } catch (error) {
      console.log(`DELETE Request Error: ${error}`);
    }
  };
};

export const createProduct = (newProduct) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/products/`,
        newProduct
      );
      dispatch({
        type: CREATE_PRODUCT,
        payload: { newProduct: response.data },
      });
    } catch (error) {
      console.log(`POST Request Error: ${error}`);
    }
  };
};

export const updateProduct = (updatedProduct) => {
  return async (dispatch) => {
    try {
      await axios.put(
        `http://localhost:8000/products/${updatedProduct.id}`,
        updatedProduct
      );
      dispatch({
        type: UPDATE_PRODUCT,
        payload: { updatedProduct: updatedProduct },
      });
    } catch (error) {
      console.log(`PUT Request Error: ${error}`);
    }
  };
};
