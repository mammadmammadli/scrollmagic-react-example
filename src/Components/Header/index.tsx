import * as React from 'react'

import Logo from '../../logo.png';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  padding: 14px 0;
  background-color: black;

  img {
    height: 65px;
  }
`;

export const Header = (): React.ReactElement => {
  return (
    <StyledHeader>
      <img src={Logo} />
    </StyledHeader>
  )
}