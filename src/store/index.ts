import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./products/productsReducer";

const rootReducer = combineReducers({ 
  products: productsReducer,
}
);

export type rootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))