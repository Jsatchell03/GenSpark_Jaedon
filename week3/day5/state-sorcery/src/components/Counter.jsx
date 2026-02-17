import React, { useState } from "react";

export default function Counter({ setLastAction }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>Counter</h4>
      <p>{`Count: ${count}`}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          setLastAction("Increment counter");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          if (count === 0) {
            alert("Count cannot go below 0");
          } else {
            setCount(count - 1);
            setLastAction("Decrement counter");
          }
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(0);
          setLastAction("Reset counter");
        }}
      >
        Reset
      </button>
    </div>
  );
}
