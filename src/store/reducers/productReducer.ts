import {ProductAction, ProductActionTypes, ProductState} from "../../types/products";

const initialState: ProductState = {
    products: [],
    error: null,
    loading: false
}

export const productReducer = (state = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionTypes.FETCH_PRODUCTS: {
            return {
                ...state,
                loading: true
            }
        }
        case ProductActionTypes.FETCH_PRODUCTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        }
        case ProductActionTypes.FETCH_PRODUCTS_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        default: {
            return state
        }
    }
}