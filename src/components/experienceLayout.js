import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import { Link } from "gatsby"
import Layout from './layout';

const ExperienceLayoutWrapper = styled.div`

`;

const HomeLink = styled.p`
  a {
    text-decoration: none;
    text-transform: uppercase;
  }
`;

const ExperienceLayoutHeader = styled.h1`
  margin: 10px 0 0 0;
`;

const ExperienceLayoutSubtitle = styled.span`
  font-weight: 500;
  margin-bottom: 10px;
`;

const ExperienceLayout = ({ children, header, subtitle }) => (
  <Layout>
    <HomeLink><Link to='/'>Home</Link></HomeLink>
    <ExperienceLayoutHeader>{header}</ExperienceLayoutHeader>
    <ExperienceLayoutSubtitle>{subtitle}</ExperienceLayoutSubtitle>
    {children}
  </Layout>
)

export default ExperienceLayout;
