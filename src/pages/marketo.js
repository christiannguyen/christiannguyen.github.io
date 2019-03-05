import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LivefeedEngagementSrc from "../images/livefeedEngagement.png";
import LivefeedEngagementTasks from "../images/livefeedTasks.png";
import ExperienceLayout from '../components/experienceLayout'
import Image from "../components/image";
import ImageWrapper from "../components/imagesWrapper";

const tasks = [
  'worked on several small and big projects (frontend and backend)',
  'helped upgrade frontend packages to improve performance (babel, webpack, react, ...etc)',
  'led a project and currently leading another one',
  'debugged customer and QA issues',
  'added prettier into frontend app',
  'colloborated with product managers and UX designer',
]

const MarketoPage = () => (
    // <SEO title="marketo" />
    <ExperienceLayout header="Marketo, an Adobe Company" subtitle="Associate Frontend Software Engineer">
      <p>
        Since joining Marketo in November 2017, I've worked on several projects, learned a lot of technical and soft skills, and made great friendships.
        This was my first full-time software engineering job so I was definitely eager and ready to learn everything I could.
        {/* <ImageWrapper>
          <Image src={LivefeedEngagementSrc} />
          <Image src={LivefeedEngagementTasks} />
        </ImageWrapper> */}
      </p>
      <span>Some tasks/accomplishments</span>
      <ul>
        {tasks.map((task) => <li>{task}</li>)}
      </ul>
      <h3>Projects I did</h3>
      <h4>Livefeed</h4>
        <ul>
          <li>...</li>
        </ul>
      <h4>Outlook Email Reply Tracking</h4>
        <ul>
          <li>...</li>
        </ul>
      <h4>Marketo Unsubscribes Check</h4>
    </ExperienceLayout>
)

export default MarketoPage
