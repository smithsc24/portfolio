import React, { useContext, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

import { mapContext } from "../../providers/MapboxProvider";

export const Popup = ( {children, coords, onClose} ) => {
  const { map } = useContext(mapContext)
  const popupRef = useRef();

  useEffect(() => {
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
