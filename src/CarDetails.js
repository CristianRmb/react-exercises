import React, { useState, useEffect, useRef } from 'react';

/* Create a CarDetails uncontrolled form that uses the HTML Form API to allow the user to 
insert details about a car, such as the model, the year and the color. Allow the form to
receive a initialData prop that contains the default values of each input, and reset the 
form every time the initialData value changes. */

export function CarDetails({ initialData }) {
  const [car, setCar] = useState({ model: '', year: '', color: '' });

  const refForm = useRef();

  useEffect(() => {
    refForm.current.reset();
  }, [initialData]);

  function handleInputs(event) {
    const { name, value } = event.target;
    setCar((car) => {
      return {
        ...car,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form ref={refForm}>
        <input
          name='model'
          defaultValue={initialData.model}
          onChange={handleInputs}
        />
        <input
          name='year'
          defaultValue={initialData.year}
          onChange={handleInputs}
        />
        <input
          name='color'
          defaultValue={initialData.color}
          onChange={handleInputs}
        />
      </form>
    </div>
  );
}
