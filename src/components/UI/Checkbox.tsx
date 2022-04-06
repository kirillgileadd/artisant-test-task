import React, {FC} from 'react';
import styled from "styled-components";
import {space, SpaceProps} from "styled-system";
import Flex from "./Flex";

interface StyleCheckBoxProps {
    isChecked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string
}

type StyleCheckBoxType = StyleCheckBoxProps & SpaceProps

const StyledCheckBox = styled.input<StyleCheckBoxType>`
  ${space};
  width: 20px;
  height: 20px;
`

const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
`

const CheckBox: FC<StyleCheckBoxType> = (props) => {
    return (
        <Flex align='center' mb={32}>
            <StyledCheckBox mr={2} type='checkbox' id={props.label} {...props} />
            <StyledLabel htmlFor={props.label}>{props.label}</StyledLabel>
        </Flex>)
};

export default CheckBox;