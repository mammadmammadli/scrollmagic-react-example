import * as React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;

  > div {
    width: 1168px;
  }
`;

export const Container = (props: any) => {
  return (
    <StyledContainer>
      <div>
        {props.children}
      </div>
    </StyledContainer>
  )
}