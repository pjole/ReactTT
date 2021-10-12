import { useState } from "react";

/**
 * Is each state update independed, or are there any ways we can batch
 * updates?
 *
 * Stack overflow quetsion https://stackoverflow.com/questions/53048495/does-react-batch-state-update-functions-when-using-hooks
 * Github ticket explaing batch updates https://github.com/reactwg/react-18/discussions/21
 */

export const StateHook03Example = () => {
  // we compute the value from an external function
  const [count, setCount] = useState(0);
  const [myBoolean, setBoolean] = useState(false);
  // Question: When the button is clicked, do we see two
  // messages of this console log or just one?
  console.log("StateHook03Example (re)renders", myBoolean, count);
  return (
    <div>
      <h3>StateHook03Example</h3>
      <span>{count}</span> <span>{JSON.stringify(myBoolean)}</span>
      <button
        onClick={() => {
          setCount((oldCount) => oldCount + 1);
          setBoolean((oldBooleanValue) => !oldBooleanValue);
        }}
      >
        +
      </button>
    </div>
  );
};

export const StateHook03V2Example = () => {
  // we compute the value from an external function
  const [count, setCount] = useState(0);
  const [myBoolean, setBoolean] = useState(false);

  // Question: When the button is clicked, do we see two
  // messages of this console log or just one?
  console.log("StateHook03V2Example (re)renders", myBoolean, count);

  return (
    <div>
      <h3>StateHook03V2Example</h3>
      <span>{count}</span> <span>{JSON.stringify(myBoolean)}</span>
      <button
        onClick={() => {
          // this behaviour will change in React 18
          setTimeout(() => {
            setCount(count + 1);
            setBoolean((oldBooleanValue) => !oldBooleanValue);
          }, 100);
        }}
      >
        +
      </button>
    </div>
  );
};
