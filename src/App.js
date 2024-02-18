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
      <Header/>
      <MapboxProvider>
        <MapBox />   
      </MapboxProvider>
      <Footer />
    </div>
  );
}

export default App;
