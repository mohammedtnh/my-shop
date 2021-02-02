import productsData from "../products";
import slugify from "react-slugify";

const initialState = {
  products: productsData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PRODUCT":
      const { newProduct } = action.payload;
      newProduct.id = state.products[state.products.length - 1].id + 1;
      newProduct.slug = slugify(newProduct.name, { lower: true });
      return {
        ...state,
        products: [...state.products, newProduct],
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.productId
        ),
      };
    default:
      return state;
  }
};

export default reducer;
