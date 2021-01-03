import React, { useState, useEffect }from "react";
import { useParams } from "react-router";


function dispalyObject(object) {
  return (
    <div></div>
  )
}

function handleSubmit(event) {
  event.preventDefault();
}

function handleChange(event) {

}


function Plant() {
  const { id } = useParams();
  console.log({id});

  const [hasError, setErrors] = useState(false);
  const [plants, setPlants] = useState({entries:[]});

  useEffect(() =>
    fetch(`${process.env.REACT_APP_BACK_URL}${id}`)
      .then(res => res.json())
      .then(res => setPlants(res))
      .catch(() => setErrors(true)),[] // [] ref of what looking at to refresh the render
  );  

  return (
    <div className="plant">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Plant</h1>
            <p>
              {plants.plantSpecies} {plants.plantName}
              <br />
              <form onSubmit={handleSubmit}>
                <input type="text" value="sdsdsd" onChange={handleChange} />
              </form>
              {plants.plantDescription}
              {plants && plants.entries.map(dispalyObject)} {/* Displays second value if first is true  */}
              {plants?.entries.map(dispalyObject)}  {/* handle undefine case */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plant;