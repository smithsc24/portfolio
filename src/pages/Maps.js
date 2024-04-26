import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

import ArcGISMap from "../components/arcgis/ArcGISMap";
import SwedenMap from "../components/SwedenMap";
import MapBox from "../components/mapbox/MapBox";

import { MapboxProvider } from "./providers/MapboxProvider";


const Maps = () => {
  // this will let us build relative urls and paths
  // Will we? Maybe later, but not for now
  let { path, url } = useRouteMatch();
  return (
    <div className="map-container">
      <div className="map-tabs">
        <ul>
          <li>
            <Link to={`${url}/arcgis`}>ArcGIS JS</Link>
          </li>
          <li>
            <Link to={`${url}/ai2html`}>ai2html</Link>
          </li>
          <li>
          <Link to={`${url}/mapbox`}>Mapbox</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a map to view</h3>
        </Route>
        <Route path={`${path}/arcgis`}><ArcGISMap/></Route>
        <Route path={`${path}/ai2html`}><SwedenMap/></Route>
        <Route path={`${path}/mapbox`}><MapboxProvider><MapBox/></MapboxProvider></Route>
      </Switch>
    </div>
  )
}

export default Maps