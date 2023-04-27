import React, { useState, useEffect, useRef } from 'react';

const MyComponent = () => {
  const [state, setState] = useState(0);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      // This will be true only on the initial render (page load)
      isInitialMount.current = false;
    } else {
      // This code will run on every subsequent render, but not on the initial one
      console.log('State changed:', state);
    }
  }, [state]);

  const handleClick = () => {
    setState((prevState) => prevState + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default MyComponent;
