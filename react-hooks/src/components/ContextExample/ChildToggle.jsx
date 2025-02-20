import React, { useContext } from 'react'
import { GlobalStateContext } from '.';

const ChildToggle = () => {
   const { setIsToggle } = useContext(GlobalStateContext);
   
  return (
    <div>
      <button onClick={() => setIsToggle((prev) => !prev)}>ChildToggle</button>
    </div>
  );
}

export default ChildToggle