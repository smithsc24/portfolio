import React, {useEffect, useState, useRef} from 'react';

import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import esriConfig from '@arcgis/core/config.js';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import ScaleBar from "@arcgis/core/widgets/ScaleBar.js";

import Popup from '../Popup';
import PopupPortal from '../PopupPortal';

import {apikey} from '../../config/config.js';

const popupRoot = document.createElement('div');

const ArcGISMap = () => {

  esriConfig.apiKey = apikey;

  const mapContainerRef = useRef(null);

  const [popupData, setPopupData] = useState({});

  //there has to be a better way to do this than in a useEffect?
  useEffect(() => {

    if (mapContainerRef.current) {
      //initialize map
      const webmap = new Map({
        basemap: 'topo-vector'
      });

      const aqLayer = new FeatureLayer({
        url: "https://geoappext.nrcan.gc.ca/arcgis/rest/services/NACEI/energy_infrastructure_of_north_america_en/MapServer/28",
        popupEnabled: true,
        outFields: ["*"] // We don't know all the possible data fields by name, so this should grab all of them
      });

      webmap.add(aqLayer);

      const view = new MapView({
        container: mapContainerRef.current,
        map: webmap,
        center: [-63.582687, 44.651070],
        zoom: 12,
        popup: {
          actions: [],
          dockEnabled: false,
          dockOptions: {
            buttonEnabled: true,
            breakpoint: false,
          }
        }
      });
      // Listen for the MapView to be ready
      view.when(() => {
        // This is deprecated, but if this line isn't here then the popup won't open on left click
        view.popup.autoOpenEnabled = false;
        // attempt to override default click event 
        view.on("click", (evt) => {
          // perform a hitTest to see if a graphic was clicked
          view.hitTest(evt).then(function(response) {
            // Make sure there was something where we clicked
            if (response.results.length) {
              // grab the graphic we clicked (hopefully an icon)
              const graphic = response.results[0].graphic;
              // pull out the attributes of the Icon clicked, if an icon wasn't clicked, return null
              const attributes = graphic.attributes.OBJECTID ? graphic.attributes : null
              
              // We have Attrutes? Let's populate our popup
              if (attributes) {
                view.openPopup({
                  title: attributes.Facility,
                  location: evt.mapPoint,
                  content: setPopupContent(attributes)

                });
              }
            }
          });
        });
      });

      let scaleBar = new ScaleBar ({
        view : view
      });
      view.ui.add(scaleBar, {
        position: "bottom-right",
      }); 
      /**
       * @param object attributes
       * What we are doing here is taking the attributes we got from
       * our event listener and using them to fill the local state object popupData
       */
      function setPopupContent (attributes) {
        setPopupData({
          title: attributes.Facility,
          attr: attributes,
        });
        return popupRoot;
      }

      return () => view && view.destroy()
    }
  }, [mapContainerRef]);



  return ( 
    <div className='map-container' ref={mapContainerRef} style={{height: '100vh', width: '100%'}}>
      {popupData && (
        <PopupPortal mount={popupRoot}>
          <Popup data={popupData}></Popup>
        </PopupPortal>  
      )}
    </div>
  );
}

export default ArcGISMap;
