//React imports
import React, {useEffect, useState, useRef} from 'react';

//ArcGIS JS imports
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import esriConfig from '@arcgis/core/config.js';
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import ScaleBar from "@arcgis/core/widgets/ScaleBar.js";
import Legend from "@arcgis/core/widgets/Legend.js";
import Search from "@arcgis/core/widgets/Search.js";


// import our popup component and the popup wrapper
import Popup from '../Popup';
import PopupPortal from '../PopupPortal';

//import api key from config variables
import {apikey} from '../../config/config.js';

// The DOM element we are going to attach our Popup component to
const popupRoot = document.createElement('div');

// ArcGISMap Component
const ArcGISMap = () => {

  esriConfig.apiKey = apikey;
  
  //Create a reference element that we'll use for attaching the mapview to the DOM
  const mapContainerRef = useRef(null);

  //Local state, this is where we will store the data for the popup
  const [popupData, setPopupData] = useState({});

  // Handle sideffects, in this case we are handling the map
  useEffect(() => {

    //Only do stuff if mapContainerRef is an html element
    if (mapContainerRef.current) {
      //initialize map
      const webmap = new Map({
        basemap: 'topo-vector'
      });
      //Inialize feature layer
      const powerLayer = new FeatureLayer({
        url: "https://geoappext.nrcan.gc.ca/arcgis/rest/services/NACEI/energy_infrastructure_of_north_america_en/MapServer/28",
        popupEnabled: true,
        outFields: ["*"] // We don't know all the possible data fields by name, so this should grab all of them
      });

      webmap.add(powerLayer);
      //Initialize our mapView
      const view = new MapView({
        container: mapContainerRef.current, //attach view to our reference element
        map: webmap,
        center: [-63.582687, 44.651070],
        zoom: 6,
        popup: {
          actions: [], // no actions
          dockEnabled: false, // attach popup to clicked feature by default
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
        
        // Override default click event so we can replace the popup content 
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
                // Opens the popup and tells it where toopen
                console.log(attributes)
                view.openPopup({
                  title: attributes.Facility, //Set the popup Title
                  location: evt.mapPoint,
                  content: setPopupContent(attributes) //Call function to set data for the popup

                });
              }
            }
          });
        });
      });

      // Add a simple scalebar
      let scaleBar = new ScaleBar ({
        view : view
      });
      let legend = new Legend({
        view: view
      });
      
      //restrict our search to facilities in our layer
      const sources = [{
        layer: new FeatureLayer({
          url: "https://geoappext.nrcan.gc.ca/arcgis/rest/services/NACEI/energy_infrastructure_of_north_america_en/MapServer/28",
          outfields: ["*"]
        }),
        exactMatch: true,
        placeholder: "facility name",
        searchFields: ["Facility", "PrimSource"],
      }]
      const searchWidget = new Search({
        view: view,
        sources: sources,
        activeSourceIndex: 1, // This makes sure our layer is the default search source, not the global service
        maxSuggestions: 10
      });

      view.ui.add(scaleBar, {
        position: "bottom-right",
      });
      view.ui.add(legend, "top-right");

      view.ui.add(searchWidget, {
        position: "top-left"
      });

      /**
       * @param object attributes
       * What we are doing here is taking the attributes we got from
       * our event listener and using them to fill the local state object popupData
       */
      function setPopupContent (attributes) {
        // calls our local state function, sets values for popupData
        // Doinmg this in a separate function instead of where we called setPopupContent makes sure the data is set when the popup opens
        setPopupData({
          title: attributes.Facility,
          attr: attributes,
        });
        // return the html element we are attaching the Popup component to
        return popupRoot;
      }
      //return the mapview
      return () => view && view.destroy()
    }
  }, [mapContainerRef]); // This makes it so the useEffect callback will run once on load, and then anytime a change is made to mapContainerRef

  /**
   * Return the html that will be rendered on the page
   * 
   * div is the map container, the ref gives us something to refer to when modifying the DOM, also helps to prevent unnecesasary re-render
   * 
   * { popupData && (....)} is telling the component that if popupData is empty or null not to render the following html/components
   * 
   * the PopupPortal takes the Popup component and mounts it to the popupRoot element we created earlier
   */
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
