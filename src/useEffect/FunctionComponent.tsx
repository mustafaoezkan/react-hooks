import React, { useState, useEffect } from "react";

const FunctionComponentEffect = () => {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);
  console.log("Function Component UseEffect", counter);

  useEffect(() => {
    const myTimer = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => clearInterval(myTimer);
  }, []);
  useEffect(() => {
    console.log(timer);
  });
  // UseEffecte herhangi bir dependencies array vermezsek componentDidMount ve componentDidUpdate şeklinde çalışır.
  useEffect(() => {
    console.log("useEffect çalıştı");
  });
  // componentDidMount şeklinde çalışır.
  useEffect(() => {
    console.log("useEffect 1 kez çalıştı");
  }, []);
  // Belirli bir eleman her değiştiğinde çalışır.
  useEffect(() => {
    console.log("useEffect counter değeri değiştiği için çalıştı");
  }, [counter]);

  const increase = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="box">
      <h2>Function Component UseEffect</h2>
      <p>Counter: {counter}</p>
      <button onClick={() => increase()}>Increase</button>
    </div>
  );
};

export default FunctionComponentEffect;
