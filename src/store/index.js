import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { fetchProducts } from "./actions/ProductActions";
import { fetchShops } from "./actions/ShopActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchProducts());
store.dispatch(fetchShops());

export default store;
