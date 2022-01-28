import React, { useState } from "react";
import ClassComponent from "./useState/ClassComponent";
import FunctionComponent from "./useState/FunctionComponent";
import ClassComponentEffect from "./useEffect/ClassComponent";
import FunctionComponentEffect from "./useEffect/FunctionComponent";
import ContextAPI from "./contextAPI/Context";
import UseReducerDemo from "./useReducer/useReducerDemo";

function App() {
  const [showComponent, setShowComponent] = useState(true);
  return (
    <div className="App">
      <UseReducerDemo></UseReducerDemo>
      {/* <ContextAPI></ContextAPI> */}
      {/* <ClassComponent></ClassComponent>
      <FunctionComponent></FunctionComponent>
      <button onClick={() => setShowComponent(!showComponent)}>
        Toggle Component
      </button>
      {showComponent ? (
        <FunctionComponentEffect></FunctionComponentEffect>
      ) : (
        <div></div>
      )}
      <ClassComponentEffect></ClassComponentEffect> */}
    </div>
  );
}

export default App;
