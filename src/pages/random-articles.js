import React from "react"
import styled from 'styled-components';
import ExperienceLayout from "../components/experienceLayout";

const FRONTEND_LINKS = [
  "https://overreacted.io/",
  "https://github.com/ryanmcdermott/clean-code-javascript",
  "https://reactpatterns.com/",
  "https://spin.atomicobject.com/2018/04/02/redux-rerendering/",
  "https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578",
  'https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be',
]

const BACKEND_LINKS = [
  "https://github.com/donnemartin/system-design-primer",
]

const OTHER_LINKS = [
  "https://devhints.io/",
  "https://blog.usejournal.com/i-failed-my-effing-coding-interview-ab720c339c8a",
];

const ListItems = styled.li`
  padding: 3px 0;

  a {
    word-break: break-word;
  }
`;

const UnorderedList = styled.ul`
  margin: 0;
`;

const RandomArticles = () => (
  <ExperienceLayout header="Random Tech Links" subtitle="List of random tech articles/blogs/etc I enjoyed">
    <h3>Frontend</h3>
    <UnorderedList>
      {FRONTEND_LINKS.map((link) => {
        return (
          <ListItems>
            <a href={link} target="_blank">{link}</a>
          </ListItems>
        )
      })}
    </UnorderedList>
    <h3>Backend</h3>
    <UnorderedList>
      {BACKEND_LINKS.map((link) => {
        return (
          <ListItems>
            <a href={link} target="_blank">{link}</a>
          </ListItems>
        )
      })}
    </UnorderedList>
    <h3>Other</h3>
    <UnorderedList>
      {OTHER_LINKS.map((link) => {
        return (
          <ListItems>
            <a href={link} target="_blank">{link}</a>
          </ListItems>
        )
      })}
    </UnorderedList>
  </ExperienceLayout>
);

export default RandomArticles;
