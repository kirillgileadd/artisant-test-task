import React, {FC, useEffect, useState} from 'react';
import CatalogNavBar from "../components/CatalogNavBar";
import ProductList from "../components/ProductList";
import {useActions} from "../hooks/useActions";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useSortedPosts} from "../hooks/useProduct";

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
            {
                loading ? <div>...Loading</div> : <ProductList products={sortedProducts}/>
            }
        </div>
    );
};

export default Catalog;