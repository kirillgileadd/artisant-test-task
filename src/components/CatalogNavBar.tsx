import React, {FC} from 'react';
import styled from "styled-components";
import Typography from "./UI/Typography";

const CatalogNavBarWrapper = styled.div`
`

const CatalogNavBar:FC = () => {
    return (
        <CatalogNavBarWrapper>
            <Typography mb={30} variant='title'>Explore</Typography>
            <Typography mb={32} >
                Buy and sell digital fashion NFT art
            </Typography>
        </CatalogNavBarWrapper>
    );
};

export default CatalogNavBar;