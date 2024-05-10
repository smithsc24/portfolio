import React from "react";
import {Link} from "react-router-dom"


const HomePage = () => {
  //This is here for now, make a sidebar with most of the links later
  return (
    <div>
      <h2>homepage placeholder</h2>
      <Link to="/Maps">Go to Map Page</Link>
    </div>
  )
}

export default HomePage