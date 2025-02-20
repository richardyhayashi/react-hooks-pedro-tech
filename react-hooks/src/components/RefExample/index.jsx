import React, { useEffect, useRef } from 'react';

const RefExample = () => {
   const inputRef = useRef();

   const onClick = () => {
      //console.log(inputRef.current.value);
      inputRef.current.focus();
      inputRef.current.value = "Testing...";
   }

   useEffect(() => {
      console.log("Page re-rendered!");
   })

   return (
     <>
         <h2>Ref Example</h2>
         <input type="text" ref={inputRef} />
         <button onClick={onClick}>Console Log</button>
     </>
   );
}

export default RefExample;