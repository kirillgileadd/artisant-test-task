import {IProduct} from "../types";
import {useMemo} from "react";

export const useSortedPosts = (products: IProduct[], check: boolean): IProduct[] => {
    const sortedProducts = useMemo(() => {
        if(check) {
            return products.filter((product) => product.quantity_available)
        }
        return products;
    }, [check, products])

    return sortedProducts;
}