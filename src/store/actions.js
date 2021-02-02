// ACTION TYPES
const DELETE_PRODUCT = "DELETE_PRODUCT";
const CREATE_PRODUCT = "CREATE_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";

// Delete Action
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
