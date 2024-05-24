import React from "react";
import PageTitle from "../elements/PageTitle";

import "../styles/pages/home.scss"
const HomePage = () => {
  //This is here for now, make a sidebar with most of the links later
  return (
    <div className="home-container">
      <PageTitle title="Samuel Smith" />
      <div className="about">
        <h4>About Me</h4>
        <p>
          A hardworking, design-savvy, and detail-oriented Web Developer with 4 years of experience
          working on full-stack and front-end applications using JavaScript with a primary focus on
          the front end focusing on UX(User Experience). Skilled at debugging, maintaining, and 
          breathing life into designs consistent with the designers’ vision and clients’ needs.
          Dedicated to remaining current on software design patterns and industry trends while remaining client,
          solution, and quality-focused to drive business and achieve goals. 
          Exercises strong communication and interpersonal skills to forge effective working relationships with 
          clients and coworkers alike. Proven ability to prioritize competing demands, assess issue severity and
          use time management skills to meet deadlines efficiently and consistently. Currently pursuing a diploma in 
          Geographic Information Systems – Cartography and Geovisualization.
          </p>
          <h4>What can you expect to find here</h4>
          <p>
            This portfolio will remain under construction for awhile, with regular updates (styling and functionality) my goal is to have the following:
            A collection of web maps I have created, some projects I have completed,tears for projects I am working on and
            eventually some hobby related photos.
          </p>
          <p>This portfolio has been built by me using React, both as practice and as a showcase of my abilities.</p>
          </div>
    </div>
  )
}

export default HomePage