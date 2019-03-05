import React from "react"
import styled from 'styled-components';
import ExperienceLayout from "../components/experienceLayout";

const links = [
  "https://overreacted.io/",
]

const RandomArticles = ({ children }) => (
  <ExperienceLayout header="Random Tech Links" subtitle="List of random tech articles/blogs/etc I enjoyed">
    <ul>
      {links.map((link) => {
        return (
          <li>
            <a href={link} target="_blank">{link}</a>
          </li>
        )
      })}
    </ul>
  </ExperienceLayout>
);

export default RandomArticles;
