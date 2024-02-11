/**
 * Author: Samuel Smith
 * Course: CRTY 1033
 * Instructor: Jill Ejdrygiewicz
 * Due Date: February 6th, 2024
 * 
 * A simple header element
 */
import React from "react";
import  '../styles/elements/header.scss';

const Header = () => (
  <header className="header">
    <h1>Provincial Flowers of Sweden</h1>
    <h3>Created by Samuel Smith</h3>
  </header>
);

export default Header;