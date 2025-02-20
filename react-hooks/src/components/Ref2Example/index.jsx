import React, { useEffect, useRef, useState } from 'react'

const Ref2Example = () => {
   const [count, setCount] = useState(0);
   const prevCount = useRef(0);

   useEffect(() => {
      prevCount.current = count;
   }, [count]);

  return (
    <>
      <h2>Ref2Example</h2>
      <p>Count: {count}</p>
      <p>Previous Count: {prevCount.current}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
}

export default Ref2Example;