import React, { useState } from "react";
import "./App.css";
import Button from "./Button";
import Display from "./Display";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  return (
    <div className="App">
      <Button onClickFunction={incrementCount} />
      <Display message={count} />
    </div>
  );
}

export default App;
