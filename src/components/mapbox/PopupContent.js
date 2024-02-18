/**
 * Author: Samuel Smith
 * Course: CRTY 1033
 * Instructor: Jill Ejdrygiewicz
 * Due Date: February 23rd, 2024
 * 
 * A component for holding popup content
 */
import React from "react";

import '../../styles/components/popup-content.scss';

import { miningFriendlyNames } from "../../config/variables";

export default function PopupContent({ feature, layer }) {
  // The oil and Gas Layer uses a minesite name, so we just want to see if the selected feature was on the oil
  const isOil = layer === "oilandgasenglish-17d4ye"

  return (
    <div className="contents">
        {
          //Determine what we are using for a header
          isOil ? <h3>{feature.MINESITE_E}</h3> : <h3>{feature.COM_GROU_E}</h3>
        }
          <div className="table">
    
              {
                // Since not all features have the same data and we are using a generic popup
                // This will iterate over the feature provided and generate a table to display the content
                Object.entries(feature).map(([key, value], index) => {
                  return(
                    <div className="row" key={index}>
                      <div className="cell">{miningFriendlyNames[key]}</div>
                      <div className="cell">{value}</div>
                    </div>
                  )
              })}
          </div>
        </div>
  );
}
