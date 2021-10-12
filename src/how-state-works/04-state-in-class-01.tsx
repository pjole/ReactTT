import { Component } from "react";

export class StateClass01Example extends Component {
  state = {
    count: 0
  };

  render() {
    const { count } = this.state;
    console.log("(re)render StateClass02Example", this.state);

    return (
      <div>
        <h3>StateClass01Example</h3>
        <span>{count}</span>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
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
