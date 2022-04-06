import React, {FC, useEffect} from 'react';
import styled from "styled-components";
import CatalogNavBar from "../components/CatalogNavBar";
import ProductList from "../components/ProductList";
import {useActions} from "../hooks/useActions";
import {useTypeSelector} from "../hooks/useTypeSelector";

const CatalogWrapper = styled.div`
`

const Catalog:FC = () => {
    const {fetchProducts} = useActions()
    const {products} = useTypeSelector(state => state.product)
    console.log(products);

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <CatalogWrapper>
            <CatalogNavBar/>
            <ProductList products={products}/>
        </CatalogWrapper>
    );
};

export default Catalog;