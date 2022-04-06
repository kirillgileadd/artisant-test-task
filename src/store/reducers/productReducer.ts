import {ProductAction, ProductState} from "../../types/products";

const initialState: ProductState = {
    products: [],
    error: null,
    loading: false
}

export const productReducer = (state = initialState, action: ProductAction): ProductState => {
    switch (action.type) {


        default: {
            return state
        }
    }
}