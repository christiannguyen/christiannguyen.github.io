import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';


const SkillsWrapper = styled.div`

`;

const SkillsTitle = styled.h2`
  font-weight: 400;
;`

const SkillsUnorderedList = styled.ul`
  /* list-style-type: ; */
`;

const SkillsListItem = styled.li`
  padding-bottom: 5px;
`;
const SKILLS_BANK = [
  'JavaScript (ES6)',
  'React',
  'Redux',
  'Ruby',
  'Ruby on Rails',
  'Specs: Mocha & Jest',
  'ExpressJS',
  'Webpack'
];

const Skills = ({ siteTitle }) => (
  <SkillsWrapper>
    <SkillsTitle>Things I Know</SkillsTitle>
    <SkillsUnorderedList>
      {SKILLS_BANK.map((skill) => (
        <SkillsListItem>{skill}</SkillsListItem>
      ))}
    </SkillsUnorderedList>
  </SkillsWrapper>
)

export default Skills;
