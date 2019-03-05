import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LivefeedEngagementSrc from "../images/livefeedEngagement.png";
import LivefeedEngagementTasks from "../images/livefeedTasks.png";


import ExperienceLayout from '../components/experienceLayout'
import Image from "../components/image";
import ImageWrapper from "../components/imagesWrapper";

const tasks = [
  'worked on several small and big projects (frontend and backend)',
  'helped upgrade frontend packages to improve performance (upgrade babel, webpack, react, ...etc)',
  'debugged customer and QA issues',
  'added prettier into frontend app',
]

const MarketoPage = () => (
    // <SEO title="marketo" />
    <ExperienceLayout header="Marketo, an Adobe Company" subtitle="Associate Frontend Software Engineer">
      <p>
        Since joining Marketo in November 2017, I've worked on several projects, learned a lot of technical and soft skills, and made great friendships.
        This was my first full-time software engineering job so I was definitely eager and ready to learn everything I could.

        <ul>
          {tasks.map((task) => <li>{task}</li>)}
        </ul>
        {/* <ImageWrapper>
          <Image src={LivefeedEngagementSrc} />
          <Image src={LivefeedEngagementTasks} />
        </ImageWrapper> */}
      </p>
    </ExperienceLayout>
)

export default MarketoPage
