import React, { useState } from "react";
import ClassComponent from "./useState/ClassComponent";
import FunctionComponent from "./useState/FunctionComponent";
import ClassComponentEffect from "./useEffect/ClassComponent";
import FunctionComponentEffect from "./useEffect/FunctionComponent";

function App() {
  const [showComponent, setShowComponent] = useState(true);
  return (
    <div className="App">
      <ClassComponent></ClassComponent>
      <FunctionComponent></FunctionComponent>
      <button onClick={() => setShowComponent(!showComponent)}>
        Toggle Component
      </button>
      {showComponent ? (
        <FunctionComponentEffect></FunctionComponentEffect>
      ) : (
        <div></div>
      )}
      <ClassComponentEffect></ClassComponentEffect>
    </div>
  );
}

export default App;
