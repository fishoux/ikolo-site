import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Formik, Form, Field, FieldArray } from 'formik';
import QRCode from 'qrcode.react';

function Plant() {
  
  // console.log({id});
  const { id } = useParams();
  const urlToken = `${process.env.REACT_APP_SITE_URL}plant/${id}`;
  const [hasError, setErrors] = useState(false);

  const [plants, setPlants] = useState({entries:[]});
  plants.id = id;
  useEffect(() => 
  
    fetch(`${process.env.REACT_APP_BACK_GET_URL}${id}`)
    .then(res => res.json())
    .then(res => { 
      setPlants(res) ;
     })
    .catch(() => setErrors(true)),[] // [] ref of what looking at to refresh the render
  );

  // console.log({plants});
     
  // plants.entries.map( (entry, index) => {
  //   console.log(`${index}`, `${entry}`);
  // })

  return (
    <div className="plant">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-2">
          <QRCode value={urlToken}> </QRCode>
          </div>
          <div className="col-lg-7">
            <h1 className="font-weight-light"></h1>

            <Formik
              enableReinitialize
              initialValues={{ id:plants.id, plantSpecies: plants.plantSpecies, plantName: plants.plantName, plantDescription:plants.plantDescription, entries:plants.entries }}
              onSubmit={values =>
                setTimeout(() => {
                  fetch(process.env.REACT_APP_BACK_POST_URL, {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                  })
                  .then(response => response.json())
                  .catch(err => console.log(err));
                  
                }, 500)
              }
              render={({ values }) => (    
                <Form>
                  
                  <Field type="text" name="plantSpecies" />
                  <Field type="text" name="plantName" />
                  <br />
                  <Field type="text" name="plantDescription" />
                  <br />
                   <FieldArray name="entries"
                      render={arrayHelpers => (
                        <div>
                          {values.entries.map((entry, index) => (
                            <div key={index}>
                              {/** both these conventions do the same */}
                              <Field name={`entries[${index}].name`} />
                              <button type="button" onClick={() => arrayHelpers.remove(index)}>
                                -
                              </button>
                            </div>

                          ))}
                          <button
                            type="button"
                            onClick={() => arrayHelpers.push({ type:'comment', name: ''})}
                          >
                            +
                          </button>
                        </div>
                      )}
                    />
                  <button type="submit">
                    Submit
                  </button>
                </Form>
            )}
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Plant;


/**
 * {plants?.entries.map(dispalyObject)}  {/* handle undefine case }
 * {plants && plants.entries.map(dispalyObject)} {//Displays second value if first is true}
 *  <input type="text" value={plants.plantSpecies} onChange={handleChange} /> <input type="text" value={plants.plantName} onChange={handleChange} />
                <br />
                <input type="text" value={plants.plantDescription} onChange={handleChange} />

 */
