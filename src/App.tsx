import React from 'react';
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Catalog from "./pages/Catalog";

const AppWrapper = styled.div`
  width: 100%;
  margin: auto;
  max-width: 1310px;
  min-height: 100vh;
  background: #FFFF;
`

function App() {
  return (
    <AppWrapper>
        <NavBar/>
        <Catalog/>
    </AppWrapper>
  );
}

export default App;
