import slugify from "react-slugify";

import * as types from "../actions/actionTypes";

const initialState = {
  shops: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SHOPS:
      return {
        ...state,
        shops: action.payload.shops,
        loading: false,
      };
    case types.CREATE_SHOP:
      const { newShop } = action.payload;
      newShop.id = state.shops[state.shops.length - 1].id + 1;
      newShop.slug = slugify(newShop.name, { lower: true });
      return {
        ...state,
        shops: [...state.shops, newShop],
      };
    default:
      console.log("default");
      return state;
  }
};

export default reducer;
