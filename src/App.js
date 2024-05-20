import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //Navigation modules

import Header from "./elements/Header";
import Footer from "./elements/Footer";
import Sidebar from "./elements/Sidebar"



//<ArcGISMap />
function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>     
      <Footer />
    </div>
  );
}

export default App;
