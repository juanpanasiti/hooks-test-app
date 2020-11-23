import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(100);

  return (
    <>
      <h1>Counter With Hook: {state}</h1>
      <hr />

      <button className='btn btn-success' onClick={() => increment(2)}>+1</button>
      <button className='btn btn-warning' onClick={reset}>Reset</button>
      <button className='btn btn-danger' onClick={() => decrement(2)}>-1</button>
    </>
  );
};
