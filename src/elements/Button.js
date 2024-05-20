import React from "react";
import {Link} from "react-router-dom";

import '../styles/elements/button.scss'

const Button = ({path, label}) => {
  console.log(path, label)
  return (
    <div className="btn link-btn">
      <Link to={path}>{label}</Link>
    </div>
  )
}
export default Button;