/**
 * Author: Samuel Smith
 * Course: CRTY 1033
 * Instructor: Jill Ejdrygiewicz
 * Due Date: February 6th, 2024
 */

import React, {useState} from "react";
import '../styles/components/ai2html.scss';
import '../styles/components/sweden-map.scss';

import { provinceLabels, provinceFlowers } from "../config/variables";

// With react the svg needs to be imported as avariable, and that variable used as the img tags source
const provinces = require.context('../assets/img/provinces', true);
const provinceList = provinces.keys().map(province => provinces(province));
let provinceName = ''

//This Doesn't do anything for now, it just displays the map
const SwedenMap = () => {
  const [selectedProvince, setSelectedProvince] = useState("");

  return (
  <div className="sweden-container">
    <div id="g-Sverigekarta-Landskap_Text-box" className="ai2html sweden-map">
      <div id="g-Sverigekarta-Landskap_Text-Artboard_1" className="g-artboard" style={{maxWidth: "500px", maxHeight: "1091px"}} data-aspect-ratio="0.458" data-min-width="0">
      <div style={{padding: "0 0 218.1465% 0"}}></div>
        {provinceList.map((province, index) => {
          // This looks scary. Basically, I'm using some regex to strip out the name of each province from the filename to use as alt text
          provinceName =province.match('^/(.+/)*(.+).(.+)$')[2].split('.')[0]
          // still using the styles from ai2html but rendering each individual province instead of one big one
          return (
          <img id="g-Sverigekarta-Landskap_Text-Artboard_1-img" className="g-Sverigekarta-Landskap_Text-Artboard_1-img g-aiImg" key={index} src={province} alt={provinceName} />
        )})}
        {provinceLabels.map((province, index)=> {
          // Didn't like how long this page was, so this is just shrinking it for readability
          // generating a label for each povince name.
          return (
            <div key={index} id={`g-ai0-${index+1}`} className="g-svg2 g-aiAbs g-aiPointText">
              <p className="g-pstyle0" onClick={() => setSelectedProvince(province)}>{province}</p>
            </div>
          )
        })}
      </div>
    </div>
    <div className="sweden-sidebar">
        <div className="sidebar-content">
        <h2>Project Purpose</h2>
        <p>The primary goal of this project is to explore responsive web maps generated using the <a href="https://ai2html.org" target="_blank" rel="noreferrer">ai2html</a> tool created by The New York Times.</p>
        <p>I am also using it as an opportunity to practice some basic React skills by taking the generated html output and shortening it by using an loop to place each province and label.</p>
        <h3>Provincial Flowers of Sweden</h3>
          <p>Much like Canada, each Swedish province has a designated flower. A colour from each flower has been used to colour their respective province.</p>
          <p>Click on a province's label to learn more!</p>
          {selectedProvince && (
            <div className="flower-info">
              <h3>
                  {selectedProvince}
              </h3>
              <a href={provinceFlowers[selectedProvince]?.url} target="_blank" rel="noreferrer">{provinceFlowers[selectedProvince]?.flowerName}</a>
              <p>{provinceFlowers[selectedProvince]?.info}</p>
              <img
                className="flower"
                src={provinceFlowers[selectedProvince]?.img}
                alt={provinceFlowers[selectedProvince]?.flowerName}
              />
              <h6>Image Attribution:</h6>
              <p dangerouslySetInnerHTML={{__html: provinceFlowers[selectedProvince]?.attr}}></p>
            </div>
          )}
        </div>
    </div>
  </div>
)};
export default SwedenMap;