import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //Navigation modules

import Header from "./elements/Header";
import Footer from "./elements/Footer";
import ArcGISMap from "./components/arcgis/ArcGISMap";
import SwedenMap from "./components/SwedenMap";
import MapBox from "./components/mapbox/MapBox";

import Maps from "./pages/Maps";
import HomePage from "./pages/HomePage"
import { MapboxProvider } from "./providers/MapboxProvider";

//<ArcGISMap />
function App() {
  return (
    <div className="App">
      <Header/>
    <div>
      <Router>
        <Routes>
          <Route path="/">
            <Route index={true} element={<HomePage/>}></Route>
          </Route>
          <Route path="/Maps">
            <Route index={true} element={<Maps/>}></Route>
            <Route path=":arcgis" element={<ArcGISMap/>}></Route>
            <Route path=":ai2html" element={<SwedenMap/>}></Route>
            <Route path=":mapbox" element={<MapboxProvider><MapBox/></MapboxProvider>}></Route>
          </Route>
        </Routes>
      </Router>
    </div>     
      
      <Footer />
    </div>
  );
}

export default App;
