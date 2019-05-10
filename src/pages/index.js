import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Skills from "../components/skills"
import Experience from "../components/experience"
import Thoughts from "../components/thoughts"
import styled from "styled-components"
import "../../prism.css"

const RandomArticlesLink = styled.h2``

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Header />
      <Skills />
      <Experience />
      {/* <Thoughts /> */}
      <RandomArticlesLink>
        <Link to="random-articles">List of Random Articles</Link>
      </RandomArticlesLink>
    </Layout>
  )
}

export default IndexPage
