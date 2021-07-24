import styled, { createGlobalStyle } from 'styled-components';
import { robotoRegular, baseStyle } from '@wexond/ui';

export const GlobalStyle = createGlobalStyle`
  ${baseStyle};

  body {
    background-color: #0a0a0a;
  }
`;

export const StyledApp = styled.div`
  font-size: 14px;
  ${robotoRegular};
`;

export const Container = styled.div`
  margin: 128px;
`;
