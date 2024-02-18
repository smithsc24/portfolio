/**
 * Author: Samuel Smith
 * Course: CRTY 1033
 * Instructor: Jill Ejdrygiewicz
 * Due Date: February 23rd, 2024
 * 
 * The mapbox brains
 */

import React, { useContext, useEffect, useRef, useState } from "react";
//this looks silly, but it breaks stuff if I write it without that comment. Basically need to tell webpack to ignmore mapbox
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { MapboxSearchBox } from '@mapbox/search-js-web';
import RulerControl from '@mapbox-controls/ruler';
import '@mapbox-controls/ruler/src/index.css';

import 'mapbox-gl/dist/mapbox-gl.css';
import '../../styles/components/mapbox.scss';

import { mapboxKey } from "../../config/variables";
import { mapContext } from "../../providers/MapboxProvider";
import Popup from "./Popup";
import PopupContent from "./PopupContent";

// set the access token for mapbox
mapboxgl.accessToken = mapboxKey;

const MapBox = () => {
  // Set up our local state
  const [popupContent, setPopupContent] = useState(null)
  const [popupCoords, setPopupCoords] = useState(null)
  // Grab the map state functions from the context
  const { map, setMap } = useContext(mapContext);
  const mapContainer = useRef(null)

  // Clear popup state when popup is closed
  function onPopupClose() {
    setPopupContent([])
    setPopupCoords(null)
  }

  useEffect(()=>{
    // Initialize the map itself
    const initializeMap = ({setMap, mapContainer}) => {
      const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/smithsc2/clsiym2yg03jn01o8cqkc8bos',
      center:[ -101.99725069488107, 55.516969977158666],
      zoom: 4,
    })
    // Initialize and Add a search box to the map
    const searchBox = new MapboxSearchBox();
    searchBox.accessToken = mapboxKey;
    searchBox.options = {
      language:'en',
      country: 'CA',
      types:'address, poi'
    };
    searchBox.marker = true;
    searchBox.mapboxgl = mapboxgl;
    map.addControl(searchBox);

    //Add ruler control to map
    map.addControl(new RulerControl(), 'top-right');
    // Add a scale control to the map
    map.addControl(new mapboxgl.ScaleControl());
    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());
    // Add fullscreen control
    map.addControl(new mapboxgl.FullscreenControl());

    // Set the map in our provider so we can access it from other map related components
    map.on('load', () => {
      setMap(map);
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
        // populate the PopupCOntent component
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
  // If the map doesn't already exist, initialize it
  if (!map) initializeMap({setMap, mapContainer})
  },[map, setMap])
 
  return (
    <div className='map'>
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