import { Component } from "react";

type ComponentState = {
  count: number;
  myBoolean: boolean;
};

export class StateClass04Example extends Component<{}, ComponentState> {
  state = {
    count: 0,
    myBoolean: false
  };

  render() {
    const { count } = this.state;
    console.log("(re)render StateClass04Example", this.state);
    return (
      <div>
        <h3>StateClass04Example</h3>
        <span>{count}</span>
        <button
          onClick={() => {
            this.setState((currentState) => ({
              count: currentState.count + 1
            }));
            this.setState((currentState) => ({
              myBoolean: !currentState.myBoolean
            }));
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setTimeout(() => {
              this.setState((currentState) => ({
                count: currentState.count + 1
              }));
              this.setState((currentState) => ({
                myBoolean: !currentState.myBoolean
              }));
            }, 100);
          }}
        >
          + (async)
        </button>
      </div>
    );
  }
}
