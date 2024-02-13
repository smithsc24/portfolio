import React, { useContext } from "react";
import { mapContext } from "../../providers/MapboxProvider";

export default function PopupContent({ feature, layer }) {
  const isOil = layer === "oilandgasenglish-17d4ye"

  return (
    <div className="contents">
        {
          //Determine what we are using for a header
          isOil ? <h3>{feature.MINESITE_E}</h3> : <h3>{feature.COMMODIT_E}</h3>
        }
          <div className="table">
          </div>
        </div>
  );
}
