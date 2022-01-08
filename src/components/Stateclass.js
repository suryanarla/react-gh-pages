import React, { Component } from "react";

export default class Stateclass extends Component {
  // rconst
  constructor(props) {
    super(props);

    this.state = {
      name: "surya",
      count: 0,
    };
  }

  render() {
    setTimeout(() => {
      this.setState({
        name: "surya narla",
      });
    }, 2000);
    return (
      <div className="demo">
        <h1>Welcome {this.state.name}</h1>
        <h1>Count : {this.state.count}</h1>

        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment button
        </button>

        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Decrement button
        </button>

        <button
          onClick={() => {
            this.setState({
              count: 0,
            });
          }}
        >
          Reset button
        </button>
      </div>
    );
  }
}
