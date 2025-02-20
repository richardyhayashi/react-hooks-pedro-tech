import React, { useReducer } from 'react'
import reducer from './reducer';

const ReducerExample = () => {
   const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>ReducerExample</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'CLEAR' })}>Clear</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Add</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Subtract</button>
      <button onClick={() => dispatch({ type: 'DOUBLE' })}>Multiply</button>
    </div>
  );
};

export default ReducerExample;