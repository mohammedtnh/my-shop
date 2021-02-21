import { combineReducers } from "redux";
import productReducer from "./productReducer";
import shopReducer from "./shopReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  authReducer,
  productReducer,
  shopReducer,
});

export default rootReducer;
