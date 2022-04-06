import React from 'react';
import styled from "styled-components";
import Catalog from "./pages/Catalog";

const AppWrapper = styled.div`
  width: 100%;
  margin: auto;
  padding: 16px;
  min-width: 320px;
  min-height: 100vh;
  background: #FFFF;
  max-width: 1380px;
  color: #828282;
`

function App() {
    return (
        <AppWrapper>
            <Catalog/>
        </AppWrapper>
    );
}

export default App;
