import React from "react";
import { Link  } from "react-router-dom";

import ArcGISMap from "../components/arcgis/ArcGISMap";
import SwedenMap from "../components/SwedenMap";
import MapBox from "../components/mapbox/MapBox";

import { MapboxProvider } from "../providers/MapboxProvider";


const Maps = () => {
  return (
    <div className="map-container">
      <h2>Choose a map</h2>
      <ul>
      <Link to="/Maps/arcgis">ArcGIS</Link>
      <Link to="/Maps/ai2html">ai2html</Link>
      <Link to="/Maps/mapbox">Mapbox</Link>
      </ul>
    </div>
  )
}

export default Maps