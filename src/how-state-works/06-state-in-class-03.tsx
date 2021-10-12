import { Component } from "react";

const getMyInitialStateValue = () => {
  console.log("getMyInitialStateValue is sending react the initial value", 0);
  return 0;
};

export class StateClass03Example extends Component<{}, { count: number }> {
  state = {
    count: getMyInitialStateValue()
  };

  render() {
    const { count } = this.state;
    console.log("(re)render StateClass03Example", this.state);
    return (
      <div>
        <h3>StateClass03Example</h3>
        <span>{count}</span>
        <button
          onClick={() => {
            this.setState(
              (currentState) => ({
                count: currentState.count + 1
              }),
              () => {
                console.log("Value after state update", this.state.count);
              }
            );
            // Queston: what is the value that we log here?
            // the updated count + 1 or the old count without the + 1?
            console.log("Value in current exectution statck", this.state.count);
          }}
        >
          +
        </button>
      </div>
    );
  }
}
