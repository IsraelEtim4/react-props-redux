import React, { Component } from "react";
import './refscript.css';


export class Ref extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    this.setState({value: event.target.value})
    event.preventDefault();
  }

  render(){
    return (
      <div className="wrapper">
        <h1>Form with no effect</h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>
              Name: <input type="text" value= {this.state.value} onChange= {this.handleChange}/>
            </label>
            <input type="submit" value= "Submit" />
          </fieldset>
        </form>
        <div>
          <h2>Hi... {this.handleSubmit}</h2>
          
        </div>
      </div>
    )
  } 
}

export default Ref;