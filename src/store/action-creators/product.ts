import {Dispatch} from "react";
import {ProductAction, ProductActionTypes} from "../../types/products";
import axios from "axios";


export const fetchProducts = () => async (dispatch: Dispatch<ProductAction>) => {
    try {
        dispatch({type: ProductActionTypes.FETCH_PRODUCTS})
        let response = await axios.get('https://artisant.io/api/products')
        dispatch({type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data.data.products})
    } catch (e) {
        dispatch({type: ProductActionTypes.FETCH_PRODUCTS_ERROR, payload: 'Error'})
    }
}