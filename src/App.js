import { BrowserRouter as Router, Route } from "react-router-dom"; //Navigation modules

import Header from "./elements/Header";
import Footer from "./elements/Footer";

import ArcGISMap from "./components/arcgis/ArcGISMap";
import SwedenMap from "./components/SwedenMap";

//<ArcGISMap />
function App() {
  return (
    <div className="App">
      <Header/>
      <SwedenMap/>
      <Footer/>      
    </div>
  );
}

export default App;
