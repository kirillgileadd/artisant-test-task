import React, {FC} from 'react';
import {IProduct} from "../types";
import ProductItem from "./ProductItem";
import Flex from "./UI/Flex";
import styled from "styled-components";

interface ProductListProps {
    products: IProduct[]
}

const ProductListInner = styled(Flex)`
  justify-content: center;
  @media (min-width: 971px) {
    justify-content: space-between;
  }
`

const ProductList: FC<ProductListProps> = ({products}) => {
    return (
        <ProductListInner justify='space-between'>
            {products.map(product => <ProductItem {...product}/>)}
        </ProductListInner>
    );
};

export default ProductList;