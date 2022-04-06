import React, {useEffect} from 'react';
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Catalog from "./pages/Catalog";
import {useTypeSelector} from "./hooks/useTypeSelector";
import {useActions} from "./hooks/useActions";

const AppWrapper = styled.div`
  width: 100%;
  margin: auto;
  max-width: 1310px;
  min-height: 100vh;
  background: #FFFF;
`

function App() {
    const {fetchProducts} = useActions()
    const products = useTypeSelector(state => state.product)
    console.log(products);

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <AppWrapper>
            <NavBar/>
            <Catalog/>
        </AppWrapper>
    );
}

export default App;
