import React, {FC, useEffect, useState} from 'react';
import CatalogNavBar from "../components/CatalogNavBar";
import ProductList from "../components/ProductList";
import {useActions} from "../hooks/useActions";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useSortedPosts} from "../hooks/useProduct";
import Loader from "../components/Loader";
import styled from "styled-components";

const Products = styled.div`
  height: calc(100vh - 200px);
`

const Catalog: FC = () => {
    const [check, setCheck] = useState<boolean>(false)
    const {fetchProducts} = useActions()
    const {products, loading} = useTypeSelector(state => state.product)
    const sortedProducts = useSortedPosts(products, check)

    useEffect(() => {
        fetchProducts()
    }, [])

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheck(event.target.checked)
    }

    return (
        <div>
            <CatalogNavBar check={check} handleCheckboxChange={handleCheckboxChange}/>
            <Products>
                {loading ? <Loader/> : <ProductList products={sortedProducts}/>}
            </Products>
        </div>
    );
};

export default Catalog;