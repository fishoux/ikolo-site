import React from "react";
import { useParams } from "react-router";
import axios from "axios";

function Plant() {
  const { id } = useParams();
  console.log({id});
  let display = {};

  axios(`${process.env.REACT_APP_BACK_URL}${id}`)
  .then(function(response) {
    display = response.data;
    console.log('display', display);
  })
  .catch(function (error) {
    // handle error
    console.log('error',error);
  })
  
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
              sdqfsdg sgsdgf sd sdgsdf g
              {display.plantSpecies || ''} {display.plantName || ''}
              {display.plantDescription || ''}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plant;