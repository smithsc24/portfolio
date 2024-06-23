import React from "react";
import { Routes, Route, Outlet } from 'react-router-dom'
import ArcGISMap from "./components/arcgis/ArcGISMap";
import SwedenMap from "./components/SwedenMap";
import MapBox from "./components/mapbox/MapBox";
import Maps from "./pages/Maps";
import HomePage from "./pages/HomePage"
import ProjectPage from "./pages/ProjectPage";

import { MapboxProvider } from "./providers/MapboxProvider";

import Sidebar from "./elements/Sidebar"



//<ArcGISMap />
function App() {
  
  return (
    <div className="App">
       <Sidebar/>
       <Outlet/>   
       <Routes>
          <Route path="/portfolio">
              <Route index={true} element={<HomePage/>}/>
          </Route>
          <Route path="/Maps" element={<Maps/>}>
            <Route index path="arcgis" element={<ArcGISMap/>}/>
            <Route path="ai2html" element={<SwedenMap/>}/>
            <Route path="mapbox" element={<MapboxProvider><MapBox/></MapboxProvider>}/>
          </Route>
          <Route path="/Projects" element={<ProjectPage/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
