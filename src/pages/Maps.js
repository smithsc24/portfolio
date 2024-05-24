import React from "react";
import { Outlet } from "react-router-dom";

import Button from '../elements/Button';
import Footer from "../elements/Footer";



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
        <Footer />
      </div>
    </div>
  )
}

export default Maps