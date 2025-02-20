import React, { useState } from 'react'

const StateExample = () => {
   const [count, setCount] = useState(0);

   const increaseCount = () => {
      setCount((prev) => prev + 1);

      console.log(count);
   }

   return (
    <div>
      <h1>StateExample</h1>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Increase</button>
    </div>
  );
};

export default StateExample;