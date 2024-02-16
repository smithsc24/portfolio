import React, { useContext } from "react";
import { mapContext } from "../../providers/MapboxProvider";

import '../../styles/components/popup-content.scss';

import { miningFriendlyNames } from "../../config/variables";

export default function PopupContent({ feature, layer }) {
  const isOil = layer === "oilandgasenglish-17d4ye"

  return (
    <div className="contents">
        {
          //Determine what we are using for a header
          isOil ? <h3>{feature.MINESITE_E}</h3> : <h3>{feature.COM_GROU_E}</h3>
        }
          <div className="table">
    
              {Object.entries(feature).map(([key, value], index) => {
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
