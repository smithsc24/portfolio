import React, { useState } from "react";
import Modal from "react-modal"
import Carousel from "./Carousel";

import "../styles/components/project.scss"
import "../styles/components/modal.scss"

Modal.setAppElement("#root")
const Project = ({project}) => {
  const {imgDir, thumbnail, name, description, images} = {...project}
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function openModal() {
    setModalIsOpen(true)
  }
  function closeModal() {
    setModalIsOpen(false)
  }
  return (
    <>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      portalClassName="modal"
    >
        <Carousel dir={imgDir} images={images}/>
    </Modal>
      <div className="project-item">
        <div className="project-thumbnail">
          {thumbnail && (
            <img onClick={openModal}className="thumbnail" alt={`${name} thumbnail`}src={`${imgDir}${thumbnail}`}/>
          )} 
        </div>
        <div className="project-description">
          <h3 className="project-title">{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default Project;