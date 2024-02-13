import { BrowserRouter as Router, Route } from "react-router-dom"; //Navigation modules

import Header from "./elements/Header";
import Footer from "./elements/Footer";

import ArcGISMap from "./components/arcgis/ArcGISMap";
import SwedenMap from "./components/SwedenMap";
import MapBox from "./components/mapbox/MapBox";
import { MapboxProvider } from "./providers/MapboxProvider";

//<ArcGISMap />
function App() {
  return (
    <div className="App">
      <MapboxProvider>
        <MapBox />   
      </MapboxProvider>
    </div>
  );
}

export default App;
