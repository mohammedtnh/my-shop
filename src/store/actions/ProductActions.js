import * as types from "./actionTypes";
import instance from "./instance";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/products");
      dispatch({
        type: types.FETCH_PRODUCTS,
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
      await instance.delete(`products/${productId}`);
      dispatch({
        type: types.DELETE_PRODUCT,
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
      const formData = new FormData();
      for (const key in newProduct) formData.append(key, newProduct[key]);

      const res = await instance.post(
        `/shops/${newProduct.shopId}/products`,
        formData
      );
      dispatch({
        type: types.CREATE_PRODUCT,
        payload: { newProduct: res.data },
      });
    } catch (error) {
      console.log(`POST Request Error: ${error}`);
    }
  };
};

export const updateProduct = (updatedProduct) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in updatedProduct)
        formData.append(key, updatedProduct[key]);
      const res = await instance.put(
        `/products/${updatedProduct.id}`,
        formData
      );

      dispatch({
        type: types.UPDATE_PRODUCT,
        payload: { updatedProduct: res.data },
      });
    } catch (error) {
      console.log(`PUT Request Error: ${error}`);
    }
  };
};
