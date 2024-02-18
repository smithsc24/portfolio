/**
 * Author: Samuel Smith
 * Course: CRTY 1033
 * Instructor: Jill Ejdrygiewicz
 * Due Date: February 23rd, 2024
 * 
 * A simple footer element
 */
import React from "react";
import  '../styles/elements/footer.scss';
import cogsLogo from '../assets/logos/BlueGreen_Horizontal_transparent.png';

const Footer = () => (
  <footer className="footer bordered">
  <div className="footer-content">
    <div className='info'>
      <p>This map is produced as a portion of the requirements of the GIS: Cartography and Geovisualization
        program of the Centre of Geographic Sciences, NSCC, Lawrencetown, Nova Scotia. The product is
        unedited, unverified and intended for <strong>educational purposes only.</strong>
      </p>
      <p>This project uses Material Design icons by Google</p>
      <p>Principal Mineral Areas, Producing Mines, and Oil and Gas Fields (900A) (2023) Retrieved from <a href="https://open.canada.ca/data/en/dataset/000183ed-8864-42f0-ae43-c4313a860720">Government of Canada, Open Government </a></p>

  </div>
  <div className='links'>
    <p>&#0169; NSCC COGS 2023</p>
    <p>W3Schools. (2023). HTML Development. <a href="https://w3schools.com" target="_blank" rel="noreferrer">W3Schools</a></p>
    <a href="mailto:w0501117@campus.nscc.ca">Email Me</a><br/>
    
    <a className="cogs-logo" href="https://nscc.ca" target="_blank" rel="noreferrer">
      <img 
        src={cogsLogo}
        alt="COGS logo"
        />
    </a>
    <br/>
    <a href="#" className="btn">Back to Top</a>
  </div>
  </div>
</footer>
)

export default Footer