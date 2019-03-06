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
        <span>
          Mainly worked on the the frontend. Created a tab where users could create tasks (email, call, inmail) and take actions on it.
          Collaborated with UX designer to help with designing the look and feel.
        </span>
      <h4>Outlook Email Reply Tracking</h4>
        <span>
          Worked with Microsoft's Outlook REST and SOAP APIs to monitor a user's inbox and help identify which new emails were
          replies. This would then notify the user that their specific email has been replied to.
        </span>
      <h4>Marketo Unsubscribes Check</h4>
        <span>
          Had to use Marketo's APIs to check against their database. This would check to see if a particular email was unsubscribed or not
          from emails. If so, we would have to render the correct error messaging on the frontend. We'd have this check everywhere in an app where
          an email was being created.
        </span>
    </ExperienceLayout>
)

export default MarketoPage
