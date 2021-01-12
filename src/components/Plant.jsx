import React, { useState, useEffect }from "react";
import { useParams } from "react-router";
import { Formik, Form, Field, FieldArray , ErrorMessage } from 'formik';
import PlantComment from "./PlantComment";


// function dispalyObject(object) {
//   return (
//     <input type="text" value={object.type} onChange={handleChange} />
//     );
// }

// function handleSubmit(event) {
//   event.preventDefault();
// }

// function handleChange(event) {

// }
// function dispalyObject(entry, index) {
//   if ( entry.type === 'commment' ) {
//     return (
//       <Field type="text" name={`${index}-comment`} />
//     )
//   }
// }

// function dispalyTest(entry, index) {
//   return (
//       <Field type="text" name={index} />
//     )
// }


function Plant() {
  const { id } = useParams();
  // console.log({id});

  const [hasError, setErrors] = useState(false);
  const [plants, setPlants] = useState({entries:[]});

  useEffect(() =>
    fetch(`${process.env.REACT_APP_BACK_URL}${id}`)
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
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/100x90"
              alt=""
            />
          </div>
          <div className="col-lg-7">
            <h1 className="font-weight-light"></h1>

            <Formik
              enableReinitialize
              initialValues={{ plantSpecies: plants.plantSpecies, plantName: plants.plantName, plantDescription:plants.plantDescription, entries:plants.entries }}
              onSubmit={values =>
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
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
                            onClick={() => arrayHelpers.push({ name: '', age: '' })}
                          >
                            +
                          </button>
                        </div>
                      )}
                    />
                    
                 
                  
                  {
                    plants.entries.map( (entry, index) => {
                      <div key={index}>
                         <label htmlFor={`friends.${index}`}>First Name</label>
                        <Field type="text" name={`friends.${index}`} />
                      </div>
                    })
                  }
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
