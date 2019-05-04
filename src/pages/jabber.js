import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ExperienceLayout from "../components/experienceLayout"
import styled from "styled-components"

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
`

const TechWrapper = styled.div`
  margin-bottom: 20px;
`

const TECH_STACK = ["react", "express", "styled components"]

const JabberPage = () => (
  <ExperienceLayout header="Jabber" subtitle="Side Project">
    <SEO title="jabber" />
    <TechWrapper>
      {TECH_STACK.map(tech => (
        <Lozenges>{tech}</Lozenges>
      ))}
    </TechWrapper>
    <a href="https://github.com/christiannguyen/jabber">Github Repo</a>
    <h3>Work in Progress</h3>
    <p>
      Currently not hosted anywhere yet. Main idea was just to learn and play
      around with React Hooks and some other frontend things I've never really
      touched such as styled-components. Worked with Indeed's API to grab a list
      of postings. Express backend handles making the request to Indeed's API
      and parsed/organized in the backend. The data is then passed frontend to
      be displayed.
    </p>
  </ExperienceLayout>
)

export default JabberPage
