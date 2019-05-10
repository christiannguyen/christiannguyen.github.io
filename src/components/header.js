import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
// import Toggle from 'react-toggle'
// import "react-toggle/style.css"
{
  /* <Toggle
defaultChecked={true}
icons={false}
// onChange={this.handleBaconChange}
/> */
}
const HeaderWrapper = styled.div``

const HeaderTitle = styled.h1``

const HeaderDescription = styled.p`
  line-height: 1.5;
`

const Header = () => (
  <HeaderWrapper>
    <HeaderTitle>HEY, I'M CHRISTIAN</HeaderTitle>
    <HeaderDescription>
      I'm currently a full stack software engineer at
      <strong>Marketo, an Adobe Company</strong> and residing in San Francisco.
      I mainly enjoy writing code in the frontend (JavaScript & React) but also
      knowledgeable in the backend (Ruby on Rails & ExpressJS). I love learning
      and coding but also gymming, music festivals, and game of thrones.
    </HeaderDescription>
  </HeaderWrapper>
)

export default Header
