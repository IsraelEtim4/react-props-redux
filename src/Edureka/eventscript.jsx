import React, {Component} from "react";
import B1 from "./B1.png";
import B2 from "./B2.png";


class Bulb extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imageURL: B1,
      sub: "Click"
    };
  }

  styles = {
    fontStyle: "italic",
    color: "purple"
  };

  Buttonchange = () => {
    this.setState({
      imageURL: B2,
      sub: "Clicked"
    });
  };

  render() { 
    return (
      <div  className="App">
        <img 
          style = {{width: "150px"}}
          src = {this.state.imageURL}
          alt = '' />
          <button onClick={this.Buttonchange}>{this.state.sub}</button>
      </div>
    );
  }
}

export default Bulb;