import React, {useEffect, useState, useRef} from 'react';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import esriConfig from '@arcgis/core/config.js';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import ScaleBar from "@arcgis/core/widgets/ScaleBar.js";


import {apikey} from '../../config/config.js';


const ArcGISMap = () => {

  esriConfig.apiKey = apikey

  const mapContainerRef = useRef(null);

  //there has to be a better way to do this than in a useEffect?
  useEffect(() => {

    if (mapContainerRef.current) {
      //initialize map
      const webmap = new Map({
        basemap: 'topo-vector'
      })

      const aqLayer = new FeatureLayer({
        url: "https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/Air_Quality_PM25_Latest_Results/FeatureServer"
      });

      webmap.add(aqLayer);

      const view = new MapView({
        container: mapContainerRef.current,
        map: webmap,
        center: [-63.582687, 44.651070],
        zoom: 12,
      });
      let scaleBar = new ScaleBar ({
        view : view
      });
      view.ui.add(scaleBar, {
        position: "bottom-right",
      });
      return () => view && view.destroy()
    }
  }, []);

  return <div className='map-container' ref={mapContainerRef} style={{height: '100vh', width: '100%'}}></div>;
}

export default ArcGISMap;
