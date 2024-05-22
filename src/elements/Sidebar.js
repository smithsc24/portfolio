import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //Navigation modules
import Button from './Button';

import '../styles/elements/sidebar.scss'
const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="links">
        <Button path="/" label="Home" />
        <Button path="/Maps" label="Webmaps" />
        <Button path="/Projects" label="Projects" />
      </div>
    </div>
  )
}

export default Sidebar;