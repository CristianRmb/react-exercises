import React, { useState, useCallback } from 'react';

/* Modify the useCounter custom hook from Custom Hooks 01 to use the useCallback 
to memoize the functions used to increment, decrement and reset the counter. */

function useCounter(initialValue) {
  const [counter, setCounter] = useState(initialValue);

  const handleCounterIncrement = useCallback(function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }, []);

  const handleCounterDecrement = useCallback(function handleCounterDecrement() {
    setCounter((c) => c - 1);
  }, []);

  const handleCounterReset = useCallback(
    function handleCounterReset() {
      setCounter(initialValue);
    },
    [initialValue],
  );

  return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  };
}

export function HookCounter({ initialValue = 30 }) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);

  useCallback(() => {}, []);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
