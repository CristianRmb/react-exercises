import React, { useState, useEffect } from 'react';

/* Rewrite the Counter component from State 1 as a function component and add a side effect that 
initializes the interval as soon as the component renders,
and clears it when the component unmounts. */

export function Counter({
  incrementBy = 1,
  interval = 1000,
  initialValue = 0,
}) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count + incrementBy);
    }, interval);

    return () => {
      console.log('i am unmounting...');
      clearInterval(intervalId);
    };
  }, []);

  return <h1>Count: {count}</h1>;
}
