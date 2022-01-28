import React, { MutableRefObject, useEffect, useRef } from "react";

export default function UseRefDemo() {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const divRef = useRef() as MutableRefObject<HTMLDivElement>;

  const onFocusButton = () => {
    inputRef.current.focus();
    console.log("Focus on input");
  };

  const onDivBorder = () => {
    divRef.current.style.border = "1px solid black";
  };
  useEffect(() => {
    console.log(inputRef.current);
  });
  return (
    <div className="App" ref={divRef}>
      <h1>React Dersleri</h1>
      <h2>Türkçe React Kaynağı</h2>
      <input ref={inputRef} placeholder="Buraya yaziniz" />
      <button onClick={onFocusButton}>Input'a Focus Ol</button>
      <button onClick={onDivBorder}>Div'e border ekle</button>
    </div>
  );
}
