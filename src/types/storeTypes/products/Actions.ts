import { Product } from "../../Product";

export enum ProductActionTypes {
  SET_LOADED_PRODUCTS = 'SET_LOADED_PRODUCTS',
  ADD_PRODUCT = 'ADD_PRODUCT'
}

export interface SetLoadedProducts {
  type: ProductActionTypes.SET_LOADED_PRODUCTS,
  payload: Product[]
}

export interface AddProduct {
  type: ProductActionTypes.ADD_PRODUCT
  payload: Product
}


export type ProductActionType = SetLoadedProducts | AddProduct;