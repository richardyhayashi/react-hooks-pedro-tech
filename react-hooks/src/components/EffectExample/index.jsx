import React, { useEffect, useState } from 'react'

const EffectExample = () => {
   const [data, setData] = useState([]);
   const [show, setShow] = useState(false);

   useEffect(() => {
      //console.log("Page Rendered");
      fetch("https://jsonplaceholder.typicode.com/posts")
         .then((response) => response.json())
         .then((json) => {
            //console.log(json);
            setData(json);
         });
   }, [show]);

   useEffect(() => {
      console.log("Here!");
   }, [show]);
  return (
    <div>
      <button onClick={() => setShow(prev => !prev)}>Toggle</button>
      <h1>Posts</h1>
      <ul>
         {data.map((item) => (
            <li key={item.id}>{item.title}</li>
         ))}
      </ul>
    </div>
  );
};

export default EffectExample;