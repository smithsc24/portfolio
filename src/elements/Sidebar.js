import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //Navigation modules
import Button from './Button';
import ArcGISMap from "../components/arcgis/ArcGISMap";
import SwedenMap from "../components/SwedenMap";
import MapBox from "../components/mapbox/MapBox";
import Maps from "../pages/Maps";
import HomePage from "../pages/HomePage"

import { MapboxProvider } from "../providers/MapboxProvider";

const Sidebar = () => {
  return (
    <div className="sidebar">
          <Routes>
            <Route path="/">
              <Route index={true} element={<HomePage/>}></Route>
            </Route>
            <Route path="/Maps">
              <Route index={true} element={<Maps/>}></Route>
              <Route path="arcgis" element={<ArcGISMap/>}></Route>
              <Route path="ai2html" element={<SwedenMap/>}></Route>
              <Route path="mapbox" element={<MapboxProvider><MapBox/></MapboxProvider>}></Route>
            </Route>
          </Routes>
        <div className="links">
          <Button
            path="/Maps"
            label="Webmaps"
          />
        </div>
    </div>
  )
}

export default Sidebar;