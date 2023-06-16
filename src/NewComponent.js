import React, { Component } from "react";
import { connect } from "react-redux";

// Redux tutorial
class NewComponent extends Component {
  styles = {
    fontStyle: "italic",
    color: "purple"
  };
  stylea = {
    color: 'brown'
  };

  render() { 
    return (
      <div className = "App">
        <h1 style={this.stylea}>Welcome</h1>
        <h2 style={this.styles}>{this.props.message}</h2>
        <button onClick={this.props.Buttonchange}>Subscribe</button>
        <p/>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    message: state.message
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    Buttonchange: () => dispatch({type: 'Message change'})
  };
};

export default connect (mapStatetoProps, mapDispatchtoProps) (NewComponent)