import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15); // setCounter is a methode
  // let counter = 15;
  const addValue = () => {
    counter += 1;
    console.log("Value added");
    setCounter(counter);
  };
  const decreaseValue = () => {
    if (counter > 0) {
      counter -= 1;
    }
    console.log("Decreased added");
    setCounter(counter);
  };
  return (
    <>
      <h1>MANIPULATING <br /> the counter value using the concept of Hooks</h1>
      <h1>Counter value : {counter}</h1>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
