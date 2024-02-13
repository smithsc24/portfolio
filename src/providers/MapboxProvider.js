import React, { createContext, useState } from "react";

// This will let us manipulate the state of our map
const mapContext = createContext('');

// A "provider" is used to encapsulate only the
// components that need the state in this context
function MapboxProvider({ children }) {
  const [popupContent, setPopupContent] = useState([]);
  const [map, setMap] = useState(null);
  const [coords, setCoords] = useState({ lng: null, lat: null });


  const Provider = mapContext.Provider;

  return (
    <Provider
      value={{
        popupContent,
        setPopupContent,
        map,
        setMap,
        coords,
        setCoords,
      }}
    >
      {children}
    </Provider>
  );
}

export { MapboxProvider, mapContext };
