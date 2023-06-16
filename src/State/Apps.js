import React from "react";
import NewComp from "./NewComp";

class Apps extends React.Component {
  styles = {
    fontStyle: "bold",
    color: "teal"
  };

  render() {
    return (
       <div className = "App">
        <h1 style={this.styles}>Welcome</h1>
        <NewComp />
       </div>
    );
  }
}
export default Apps;