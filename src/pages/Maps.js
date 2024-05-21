import React from "react";
import { Link, Outlet } from "react-router-dom";

import ArcGISMap from "../components/arcgis/ArcGISMap";
import SwedenMap from "../components/SwedenMap";
import MapBox from "../components/mapbox/MapBox"
import Button from '../elements/Button';


import { MapboxProvider } from "../providers/MapboxProvider";

import '../styles/pages/maps.scss'

const Maps = () => {
  return (
    <div className="map-container">
      <div className="map-navbar">
        <Button path="/Maps/arcgis" label="ArcGIS"/>
        <Button path="/Maps/ai2html" label="ai2html"/>
        <Button path="/Maps/mapbox" label="Mapbox"/>
      </div>
      <div className="map-view">
        <Outlet/>
      </div>
    </div>
  )
}

export default Maps