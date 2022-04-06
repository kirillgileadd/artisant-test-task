import React, {FC} from 'react';
import {IProduct} from "../types";
import styled from "styled-components";
import product from '../assets/product.png'
import {layout, space, SpaceProps, LayoutProps} from "styled-system";
import Flex from "./UI/Flex";
import Typography from "./UI/Typography";

type ProductItemType = SpaceProps | LayoutProps

const ProductItemInner = styled.div<ProductItemType>`
  ${space};
  ${layout};
  width: 305px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  margin-left: 0;
  margin-right: 0;
  @media (min-width: 630px) {
    margin-left: 8px;
    margin-right: 8px;
  }
`

const ProductContent = styled(Flex)`
  color: white;
  border-radius: 8px 8px 0 0;
  background-image: url("${product}");
`

const ProductItem: FC<IProduct> = ({name, created_by, quantity,quantity_available, initial_price}) => {
    return (
        <ProductItemInner mb={3}>
            <Flex direction='column'>
                <ProductContent p={16} height={404} direction='column' justify='spase-between'>
                    <div>
                        <Typography fontSize={12} color='#F3F3F3'>created by:</Typography>
                        <Typography fontSize={14} fontWeight={700} lineHeight='24px'>{created_by.display_name}</Typography>
                    </div>
                    <div style={{marginTop: 'auto'}}>
                        <Typography fontSize={18}>{name}</Typography>
                    </div>
                </ProductContent>
                <Flex p={16} justify='space-between'>
                    <div>
                        <Typography fontSize={12}>available</Typography>
                        <Typography color='black' fontWeight={700}>{quantity_available} of {quantity}</Typography>
                    </div>
                    <div>
                        <Typography fontSize={12}>price</Typography>
                        <Typography color='#0040E6' fontWeight={700}>{initial_price} ETH</Typography>
                    </div>
                </Flex>
            </Flex>
        </ProductItemInner>
    );
};

export default ProductItem;