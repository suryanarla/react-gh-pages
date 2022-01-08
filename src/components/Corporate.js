import React, { Component } from "react";

export class Corporate extends Component {
  render(props) {
    return (
      <div>
        <h1>Corporation bank is located @ {this.props.location}</h1>
      </div>
    );
  }
}

export default Corporate;
