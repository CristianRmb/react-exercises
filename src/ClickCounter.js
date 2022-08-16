import React, { useState, useEffect } from 'react';
/* Add a side effect to the ClickCounter component from useState 01 that calls a 
onCounterChange function with the current value of the counter every time value 
of the counter changes. The function should be received as a prop. */
export function ClickCounter({
  incrementBy = 1,
  initialValue = 0,
  onCounterChange,
}) {
  const [counter, setCounter] = useState(initialValue);

  function incrementCounter() {
    setCounter((counter) => counter + incrementBy);
  }

  useEffect(onCounterChange, [counter]);

  return (
    <div>
      <h2>Count: {counter}</h2>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}
