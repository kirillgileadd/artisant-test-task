import {IProduct} from "./index";

export interface ProductState {
    products: IProduct[];
    loading: boolean;
    error: null | string;
}

export enum ProductActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR'
}

export interface FetchProductAction {
    type: ProductActionTypes.FETCH_PRODUCTS
}

export interface FetchProductSuccessAction {
    type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: IProduct[]
}

export interface FetchProductErrorAction {
    type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
    payload: string
}

export type ProductAction = FetchProductAction | FetchProductSuccessAction | FetchProductErrorAction