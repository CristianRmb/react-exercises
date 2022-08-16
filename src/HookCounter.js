import React, { useState, useEffect } from 'react';

function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }

  function handleCounterDecrement() {
    setCounter((c) => c - 1);
  }

  function handleCounterReset() {
    setCounter(initialValue);
  }

  return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    onDecrement: handleCounterDecrement,
    onReset: handleCounterReset,
  };
}

export function HookCounter({ initialValue = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
