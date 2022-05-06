import { Product } from "../../types/Product";
import { AddProduct, ProductActionTypes, SetLoadedProducts } from "../../types/storeTypes/products/Actions";

export const setProducts = (payload:Product[]):SetLoadedProducts => ({
  type: ProductActionTypes.SET_LOADED_PRODUCTS,
  payload
})

export const addProduct = (payload:Product):AddProduct => ({
  type: ProductActionTypes.ADD_PRODUCT,
  payload
})