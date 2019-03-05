import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

const HeaderWrapper = styled.div`

`;

const HeaderTitle = styled.h1`

;`

const HeaderDescription = styled.p`
  line-height: 1.5;
`;

const HeaderDescriptionText = `I'm currently a full stack software engineer currently living in San Francisco.
I mainly enjoy writing code in the frontend (JavasSript & React) but also knowledgeable in the backend (Ruby on Rails & ExpressJS).
I love learning and coding but also gymming, music festivals, and game of thrones.
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderTitle>HEY, I'M CHRISTIAN</HeaderTitle>
    <HeaderDescription>{HeaderDescriptionText}</HeaderDescription>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
