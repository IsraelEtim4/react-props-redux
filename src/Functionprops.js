import React from "react";

function Functionprops(props) {
  return (
    <div className="App">
      <h3>This is functional compponent</h3>,
      <h3>Hello {props.name} from {props.place}! Welcome to El'Solo Hub</h3>
    </div>
  );
}

export default Functionprops;