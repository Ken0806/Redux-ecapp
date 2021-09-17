import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from "redux";
import { UsersReducer } from "../users/reducers";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import { ProductsReducer } from "../products/reducers";

const createStore = (history) => {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
      products: ProductsReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
};

export default createStore;
