import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ThoughtsWrapper = styled.div``

const ThoughtsTitle = styled.h2`
  font-weight: 400;
`

const ThoughtsUnorderedList = styled.ul`
  /* list-style-type: ; */
`

const ThoughtsListItem = styled.li`
  padding-bottom: 10px;
`

const TagItem = styled.span`
  border: 1px solid #cfdae6;
  border-radius: 5px;
  color: #2f363d;
  font-weight: 500;
  margin-left: 10px;
  padding: 1px 5px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.4px;
  background-color: #cfdae6;
`

const THOUGHTS_BANK = [
  {
    link: "my-career",
    label: "my career so far",
    type: "May 7, 2019",
  },
]

{
  /* <Link to="/page-2/">Go to page 2</Link> */
}

const Thoughts = ({ siteTitle }) => (
  <ThoughtsWrapper>
    <ThoughtsTitle>Things I Think About</ThoughtsTitle>
    <ThoughtsUnorderedList>
      {THOUGHTS_BANK.map(({ link, label, type }) => (
        <ThoughtsListItem>
          <Link to={link}>{label}</Link>
          <TagItem>{type}</TagItem>
        </ThoughtsListItem>
      ))}
    </ThoughtsUnorderedList>
  </ThoughtsWrapper>
)

export default Thoughts
