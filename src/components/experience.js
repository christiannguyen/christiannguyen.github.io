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
  padding-bottom: 5px;

  a {
    text-decoration: none;
  }
`;

const EXPERIENCE_BANK = [
  {
    link: 'marketo',
    label: 'Marketo, an Adobe Company',
  },
  {
    link: 'procore',
    label: 'Procore Technologies',
  },
  {
    link: 'dabble',
    label: 'Dabble (Side Project)'
  },
];

    {/* <Link to="/page-2/">Go to page 2</Link> */}

const Experience = ({ siteTitle }) => (
  <ExperienceWrapper>
    <ExperienceTitle>Things I've Done</ExperienceTitle>
    <ExperienceUnorderedList>
      {EXPERIENCE_BANK.map(({ link, label }) => (
        <ExperienceListItem><Link to={link}>{label}</Link></ExperienceListItem>
      ))}
    </ExperienceUnorderedList>
  </ExperienceWrapper>
)

export default Experience;
