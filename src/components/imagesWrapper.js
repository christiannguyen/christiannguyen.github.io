import React from "react"
import styled from 'styled-components';

const ImageWrapperContainer = styled.div`

`;

const ImageWrapper = ({ children }) => (
  <ImageWrapperContainer>
    {children}
  </ImageWrapperContainer>
);

export default ImageWrapper;
