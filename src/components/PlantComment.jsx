import Reactfrom from "react";

function PlantComment(initialValue, createdOn, modifiedOn) {
  
  return (
    <p>
    {modifiedOn}
      {createdOn}
    <br />
    {initialValue}</p>
  );
}

export default PlantComment;


/**
 * {plants?.entries.map(dispalyObject)}  {/* handle undefine case }
 * {plants && plants.entries.map(dispalyObject)} {//Displays second value if first is true}
 *  <input type="text" value={plants.plantSpecies} onChange={handleChange} /> <input type="text" value={plants.plantName} onChange={handleChange} />
                <br />
                <input type="text" value={plants.plantDescription} onChange={handleChange} />

 */
