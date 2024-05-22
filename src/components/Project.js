import React from "react";

import "../styles/components/project.scss"

const Project = ({project}) => {
  const {imgDir, thumbnail, name, description, images} = {...project}
  return (
    <div className="project-item">
      <div className="project-thumbnail">
        {thumbnail && (
          <img className="thumbnail" alt={`${name} thumbnail`}src={`${imgDir}${thumbnail}`}/>
        )} 
      </div>
      <div className="project-description">
        <h3 className="project-title">{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;