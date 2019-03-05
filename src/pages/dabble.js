import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ExperienceLayout from "../components/experienceLayout"
import styled from 'styled-components';

const Lozenges = styled.span`
  padding: 3px 8px;
  letter-spacing: 0.5px;
  font-weight: bold;
  margin-right: 5px;
  border-radius: 5px;
  font-size: 12px;
  text-transform: uppercase;
  color: #5885b2;
  background-color: #cbe5ff;
`;

const TechWrapper = styled.div`
  margin-bottom: 20px;
`;

const TECH_STACK = [
  'react',
  'redux',
  'express',
  'mySQL',
]

const DabblePage = () => (
  <ExperienceLayout header="Dabble" subtitle="Side Project">
      <SEO title="dabble" />
      <TechWrapper>
        {TECH_STACK.map((tech) => <Lozenges>{tech}</Lozenges>)}
      </TechWrapper>
      <p>
        Currently a WIP. Will update with more info.
      </p>
    </ExperienceLayout>
)

export default DabblePage
