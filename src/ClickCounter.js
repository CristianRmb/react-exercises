import React, { useState } from 'react';
/* Rewrite the ClickCounter component from Events 01 as a function component, 
and use the useState hook to track the state of the counter. */
export function ClickCounter({ incrementBy = 1, initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  function incrementCounter() {
    setCounter((counter) => counter + incrementBy);
  }

  return (
    <div>
      <h2>Count: {counter}</h2>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}
