import React, { useContext, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
//this looks silly, but it breaks stuff if I write it without that comment. Basically need to tell webpack to ignmore mapbox
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax


import 'mapbox-gl/dist/mapbox-gl.css';
import '../../styles/components/mapbox.scss';
import { mapboxKey } from "../../config/variables";

import { mapContext } from "../../providers/MapboxProvider";
import Popup from "./Popup";
import PopupContent from "./PopupContent";

// set the access token for mapbox
mapboxgl.accessToken = mapboxKey;

const MapBox = () => {
  const [popupContent, setPopupContent] = useState(null)
  const [popupCoords, setPopupCoords] = useState(null)
  const { map, setMap } = useContext(mapContext);
  const mapContainer = useRef(null)

  function onPopupClose() {
    setPopupContent(null)
    setPopupCoords(null)
  }

  useEffect(()=>{

    const initialiazeMap = ({setMap, mapContainer}) => {
      const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/smithsc2/clsiym2yg03jn01o8cqkc8bos',
      center:[ -101.99725069488107, 55.516969977158666],
      zoom: 4,
    })
    
    // Set the map in our provider so we can access it from other map related components
    map.on('load', () => {
      setMap(map)

      map.resize();
    })
    // Event handler to determine if one of our icon layers was clicked
     map.on('click', evt => {
      // Check the location clicked to see if it contains features from one of three layers
      const features = map.queryRenderedFeatures(evt.point, {
        layers: [
          "metalworksenglish-3cajz2",
           "oilandgasenglish-17d4ye",
          "producingminesenglish-39ikgc"
        ]
      });
      // do stuff if there's something there
      if (features.length > 0) {
        // grab the data from the selected feature 
        const properties = features[0].properties
        const layer = features[0].layer.id
        setPopupCoords(evt.lngLat)
        setPopupContent(properties)
        return <PopupContent
          feature={properties}
          layer={layer}
          />
      }
    });
  }
  if (!map) initialiazeMap({setMap, mapContainer})
  },[map, setMap])
 
  return (
    <div>
      {
        popupCoords && (
          <Popup coords={popupCoords} onClose={onPopupClose}>
            {popupContent}
          </Popup>
        )
      }
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}

export default MapBox