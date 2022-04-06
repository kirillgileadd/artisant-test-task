import React, {FC} from 'react';
import styled from "styled-components";
import {layout, space, variant, typography, TypographyProps, SpaceProps, LayoutProps} from "styled-system";

interface StyleTypographyProp {
  variant?: string;
  color?: string;
}

type StyleTypographyTypes = SpaceProps & LayoutProps & TypographyProps & StyleTypographyProp

const StyleTypography = styled.div<StyleTypographyTypes>`
  ${variant({
    variants: {
      title: {
        fontWeight: 700,
        fontSize: '32px',
        color: 'black'
      },
      text: {
        fontWeight: 400,
        fontSize: '14px',
      },
    }
  })}
  ${space};
  ${typography}
  ${layout};
  color: ${props => props?.color}
`

StyleTypography.defaultProps = {
  variant: 'text',
}

const Typography: FC<StyleTypographyTypes> = (props) => {
    return <StyleTypography {...props} />
};

export default Typography;