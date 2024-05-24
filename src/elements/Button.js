import React from "react";
import {NavLink} from "react-router-dom";

import '../styles/elements/button.scss'

const Button = ({path, label}) => {
  return (
    <div className="btn link-btn">
      <NavLink to={path}>{label}</NavLink>
    </div>
  )
}
export default Button;