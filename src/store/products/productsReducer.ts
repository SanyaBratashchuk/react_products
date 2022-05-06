import { ProductActionType, ProductActionTypes } from "../../types/storeTypes/products/Actions"
import { ProductsState } from "../../types/storeTypes/products/State"

const initialState:ProductsState = {
  products:[]
} 

export const productsReducer = (state = initialState, action:ProductActionType):ProductsState => {
  switch (action.type) {
    case ProductActionTypes.ADD_PRODUCT:
      return {...state, products: [...state.products, action.payload]};
    case ProductActionTypes.SET_LOADED_PRODUCTS:
      return {...state, products: [...state.products, ...action.payload]};
    default:
      return state
  }
}

