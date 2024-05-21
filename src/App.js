import React from "react";
import { Routes, Route, Outlet } from 'react-router-dom'
import ArcGISMap from "./components/arcgis/ArcGISMap";
import SwedenMap from "./components/SwedenMap";
import MapBox from "./components/mapbox/MapBox";
import Maps from "./pages/Maps";
import HomePage from "./pages/HomePage"

import { MapboxProvider } from "./providers/MapboxProvider";

import Header from "./elements/Header";
import Footer from "./elements/Footer";
import Sidebar from "./elements/Sidebar"



//<ArcGISMap />
function App() {
  
  return (
    <div className="App">
       <Sidebar/>
       <Outlet/>   
       <Routes>
          <Route path="/">
              <Route index={true} element={<HomePage/>}/>
          </Route>
          <Route path="/Maps" element={<Maps/>}>
            <Route path="arcgis" element={<ArcGISMap/>}/>
            <Route path="ai2html" element={<SwedenMap/>}/>
            <Route path="mapbox" element={<MapboxProvider><MapBox/></MapboxProvider>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
