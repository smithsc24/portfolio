import React, { useContext, useEffect, useRef, useState } from "react";
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
  const [popupLayer, setPopupLayer] = useState('')
  const [popupCoords, setPopupCoords] = useState(null)
  const { map, setMap } = useContext(mapContext);
  const mapContainer = useRef(null)

  function onPopupClose() {
    setPopupContent([])
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
     map.on('click', [
      "metalworksenglish-3cajz2",
       "oilandgasenglish-17d4ye",
      "producingminesenglish-39ikgc"
    ],  evt => {
      // Grab the features from the layer and generate a popup
      const popup = evt.features.map((elem) => {
        return (<PopupContent
          key={elem.properties.OBJECTID}
          feature={elem.properties}
          layer={elem.layer.id}
        />
    )});
      setPopupContent(popup)
      setPopupCoords(evt.lngLat)
    });
  }
  if (!map) initialiazeMap({setMap, mapContainer})
  },[map, setMap])
 
  return (
    <div>
      {
        popupCoords && (
          <Popup
            coords={popupCoords} onClose={onPopupClose}>
            {popupContent}
          </Popup>
        )
      }
      <div ref={mapContainer} className="map-container" />
    </div>
  )
}

export default MapBox