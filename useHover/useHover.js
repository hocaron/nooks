import { useState, useEffect, useRef } from "react";

const useHover = (onHover) => {
  if (typeof onHover !== "function") {
    return;
  }
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.reomeveEventListener("mouseenter", onHover);
      }
    };
  }, []);

  return element;
};

export default function App() {
  const sayHello = () => console.log("say hello");
  const title = useHover(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>hi</h1>
    </div>
  );
}
