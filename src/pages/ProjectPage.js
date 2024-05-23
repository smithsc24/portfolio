import React from "react"
import { forEach, map } from "lodash";

import Project from "../components/Project"
import { projectList } from "../config/project-list.js"

import "../styles/pages/project-page.scss";

const ProjectPage = () => {
  const projectItems = map(projectList, function(prj, idx) {    return (
      <Project
        project={prj}
        key={idx}
      />
    )
  })
  
  return (
    <div className="projects-container">
      <div className="title-block">
        <h2 className="page-title"></h2>
      </div>
      <div className="project-list">
        {projectItems}
      </div>
    </div>
  )
}
export default ProjectPage;