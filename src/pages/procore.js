import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ExperienceLayout from "../components/experienceLayout"

const ProcorePage = () => (
  <ExperienceLayout header="Procore Technologies" subtitle="Software Engineer Intern">
      <SEO title="procore" />
      <p>
        I started my internship at Procore Technologies (in Santa Barbara) in July 2018. It was a full-stack role where I got to learn both
        Ruby on Rails and React. It was a pretty fun time since everything was new to me since it was basically my first software job.
      </p>
      <p>
        Most of the job was similar to how a regular full-time employee would function:
        <ul>
          <li>fix bugs</li>
          <li>code review process</li>
          <li>implement features</li>
          <li>scrum process</li>
          <li>standups</li>
        </ul>
      </p>
      <p>
        I had two major & fun assignments.
        <ol>
          <li>
            An intern project with a group of 4. We basically had to build from scratch a full-stack
            application for the recruiting team. It was a page where an interviewee coming onto an on-site interview would be able to see things such as
            their interview schedule, information about the company, parking, and etc. The recruiter would be able to add whatever information they wanted.
            I mainly worked on the frontend (in React).
            <a href="https://talent.procore.com/candidates/portal/1UoDweVUIuTF">Demo Link</a>
          </li>
          <li>
            Worked with one another intern to create and display a dashboard that showed the user all of the important items they needed in several cards.
            The UI was pretty old so I was asked to help implement a new UI for it in React. This was also built from scratch since I had to build it in React.
          </li>
        </ol>
      </p>
      <p>
        <strong>Key Takeaways</strong>
        <ul>
          <li>ask good questions</li>
          <li>networking is important, meet other co-workers</li>
          <li>ping pong is really fun</li>
        </ul>
      </p>
    </ExperienceLayout>
)

export default ProcorePage
