import { Component } from "react";

export class StateClass02Example extends Component<{}, { count: number }> {
  state = {
    count: 0
  };

  render() {
    const { count } = this.state;
    console.log("(re)render StateClass02Example", this.state);

    return (
      <div>
        <h3>StateClass02Example</h3>
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
