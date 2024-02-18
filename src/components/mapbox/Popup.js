/**
 * Author: Samuel Smith
 * Course: CRTY 1033
 * Instructor: Jill Ejdrygiewicz
 * Due Date: February 23rd, 2024
 * 
 * Popup wrapper component
 */
import React, { useContext, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

import { mapContext } from "../../providers/MapboxProvider";
import '../../styles/components/popup.scss';


export const Popup = ( {children, coords, onClose} ) => {
  const { map } = useContext(mapContext)
  const popupRef = useRef();

  useEffect(() => {
    // Initialize the popup and add it to the map
    const popup = new mapboxgl.Popup({})
      .setLngLat(coords)
      .setDOMContent(popupRef.current)
      .addTo(map);
    
      popup.on("close", onClose);

  }, [children, coords]);

  return (
    <div style={{display:'none'}}>
      <div ref={popupRef} className="popup">{children}</div>
    </div>
  );
};

export default Popup;
