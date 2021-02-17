import * as types from "./actionTypes";
import instance from "./instance";

export const fetchShops = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("shops");
      dispatch({
        type: types.FETCH_SHOPS,
        payload: { shops: response.data },
      });
    } catch (error) {
      console.log(`GET Request Error: ${error}`);
    }
  };
};

export const createShop = (newShop) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newShop) formData.append(key, newShop[key]);

      const res = await instance.post(`shops`, formData);
      dispatch({
        type: types.CREATE_SHOP,
        payload: { newShop: res.data },
      });
    } catch (error) {
      console.log(`POST Request Error: ${error}`);
    }
  };
};
