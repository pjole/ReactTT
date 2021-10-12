import { useEffect, useState } from "react";

// an exploration of global observable state management

class MainState {
  data = {
    count: 1
  };

  callbacks: Function[] = [];

  triggerUpdate = () => {
    this.callbacks.forEach((callback) => callback());
  };

  subscribe = (callback: Function) => {
    this.callbacks.push(callback);
  };
}

const mainStateSingleton = new MainState();

export const Counter = () => {
  const [_, setTickTac] = useState(false);
  useEffect(() => {
    mainStateSingleton.subscribe(() => {
      setTickTac((s) => !s);
    });
  }, []);

  useEffect(() => {
    setInterval(() => {
      console.log("internval check", mainStateSingleton.data.count);
    }, 1000);
  }, []);

  return (
    <div>
      {mainStateSingleton.data.count}
      <button
        onClick={() => {
          mainStateSingleton.data.count += 1;
          mainStateSingleton.triggerUpdate();
        }}
      >
        Increment
      </button>
    </div>
  );
};
