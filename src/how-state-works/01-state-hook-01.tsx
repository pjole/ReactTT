import { useCallback, useState } from "react";

export const StateHook01Example = () => {
  const [count, setCount] = useState(0);
  console.log("StateHook01Example (re)render", count);
  return (
    <div>
      <h3>StateHook01Example</h3>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
          // Queston: what is the value that we log here?
          // the updated count + 1 or the old count without the + 1?
          console.log("Value in current exectution statck", count);
        }}
      >
        +
      </button>
    </div>
  );
};

let oldSetCount: any = null;
export const StateHook01V2Example = () => {
  const [count, setCount] = useState(0);

  if (oldSetCount) {
    console.log(
      "is setCount the same between renders?",
      setCount === oldSetCount // true
    );
  }

  // TODO discuss in next office hour

  const handleCountIncremet = useCallback(() => {
    console.log("callback has access to count variable", count);
    setCount((oldCount) => oldCount + 1);
  }, []);

  oldSetCount = setCount;

  return (
    <div>
      <h3>StateHook01V2Example</h3>
      <span>{count}</span>
      {/* we have a function instead of a value, as the param of setCount */}
      <button onClick={handleCountIncremet}>+</button>
    </div>
  );
};
