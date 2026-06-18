import React, { useState } from "react";

function Counter() {

  // State Variable
  const [count, setCount] = useState(0);

  // Increase Function
  const increase = () => {
    setCount(count + 1);
  };

  // Decrease Function
  const decrease = () => {
    setCount(count - 1);
  };

  // Reset Function
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{
      textAlign: "center",
      marginTop: "50px"
    }}>

      <h1>useState Hook Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={increase} style={{ margin: "5px" }}>
        Increase
      </button>

      <button onClick={decrease} style={{ margin: "5px" }}>
        Decrease
      </button>

      <button onClick={reset} style={{ margin: "5px" }}>
        Reset
      </button>

    </div>
  );
}

export default Counter;