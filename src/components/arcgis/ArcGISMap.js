import React, {useEffect, useState, useRef} from 'react';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import esriConfig from '@arcgis/core/config.js';
import {apikey} from '../../config/config.js';


const ArcGISMap = () => {

  esriConfig.apiKey = apikey

  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState()
  const [lat, setLat] = useState()

  //there has to be a better way to do this than in a useEffect?
  useEffect(() => {

    if (mapContainerRef.current) {
      //initialize map
      const webmap = new Map({
        basemap: 'topo-vector'
      })
      const view = new MapView({
        container: mapContainerRef.current,
        map: webmap,
        center: [-63.582687, 44.651070],
        zoom: 12,
      });

      return () => view && view.destroy()
    }
  }, []);

  return <div className='map-container' ref={mapContainerRef} style={{height: '100vh', width: '100%'}}></div>;
}

export default ArcGISMap;
