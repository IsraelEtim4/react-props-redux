import React, { Component } from "react";
import './refscript.css';

class RefScript extends Component {
  constructor(props) {
    super(props);

    this.callRef = React.createRef();
    this.addingRefInput = this.addingRefInput.bind(this);
  }

  addingRefInput() {
    this.callRef.current.focus();
  }

  render() {
    return (
      <div className="wrapper">
        <h2>Name : <input type="text" ref={this.callRef}/></h2>
        <button onClick={this.addingRefInput}>Add Input</button>
        <h3>Hi... </h3>
      </div>
    )
  }
}

export default RefScript;