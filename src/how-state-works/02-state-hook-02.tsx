import { useState } from "react";

const getMyInitialStateValue = () => {
  console.log("getMyInitialStateValue is sending react the initial value", 0);
  return 0;
};

export const StateHook02Example = () => {
  // we compute the value from an external function
  const [count, setCount] = useState(getMyInitialStateValue());
  console.log("The value of count in exmaple 3 is", count);
  return (
    <div>
      <h3>StateHook02Example</h3>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
