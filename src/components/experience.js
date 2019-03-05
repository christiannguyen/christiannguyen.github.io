import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import { Link } from "gatsby"

const ExperienceWrapper = styled.div`

`;

const ExperienceTitle = styled.h2`
  font-weight: 400;
;`

const ExperienceUnorderedList = styled.ul`
  /* list-style-type: ; */
`;

const ExperienceListItem = styled.li`
  padding-bottom: 10px;
`;

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

const EXPERIENCE_BANK = [
  {
    link: 'marketo',
    label: 'Marketo, an Adobe Company',
    type: 'work',
  },
  {
    link: 'procore',
    label: 'Procore Technologies',
    type: 'work',
  },
  {
    link: 'dabble',
    label: 'Dabble',
    type: 'side project',
  },
];

    {/* <Link to="/page-2/">Go to page 2</Link> */}

const Experience = ({ siteTitle }) => (
  <ExperienceWrapper>
    <ExperienceTitle>Things I've Done</ExperienceTitle>
    <ExperienceUnorderedList>
      {EXPERIENCE_BANK.map(({ link, label, type }) => (
        <ExperienceListItem>
          <Link to={link}>{label}</Link>
          <TagItem>{type}</TagItem>
        </ExperienceListItem>
      ))}
    </ExperienceUnorderedList>
  </ExperienceWrapper>
)

export default Experience;
