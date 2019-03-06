/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Avenir", sans-serif;
    font-size: 16px;
    margin-top: 30px;
  }

  a {
    text-decoration: none;
  }
`

const LayoutContainer = styled.div`
  display: flex;
  margin-top: 100px;
  width: 35%;
  margin: auto;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 50%;
  }

  @media (max-width: 450px) {
    width: 80%;
  }
`;

const Layout = ({ children }) => (
  <LayoutContainer>
    <GlobalStyle />
    {children}
  </LayoutContainer>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
