import { combineReducers } from "redux";
import productReducer from "./productReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  productReducer,
  shopReducer,
});

export default rootReducer;
