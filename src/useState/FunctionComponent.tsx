import React, { useState } from "react";

const FunctionComponent = () => {
  const [counter, setCounter] = useState(0);
  console.log("Function Component", counter);

  const increase = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="box">
      <h2>Function Component</h2>
      <p>Counter: {counter}</p>
      <button onClick={() => increase()}>Increase</button>
    </div>
  );
};

export default FunctionComponent;
