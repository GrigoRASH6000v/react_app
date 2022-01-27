import React from "react";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const incriment = () => setCount(count + 1);
  const decriment = () => setCount(count - 1);
  return (
    <div>
      <span>{count}</span>
      <button onClick={incriment}>+</button>
      <button onClick={decriment}>-</button>
    </div>
  );
};
