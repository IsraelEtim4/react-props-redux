import React, {Component} from "react";
import bellA from "./bellA.png";
import bellB from "./bellB.png";


class NewComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "Subscribe to El'Solo Hub",
      sub: "Subscribe",
      imageURL: bellA
    };
  }

  styles = {
    fontStyle: "italic",
    color: "purple"
  };

  Buttonchange = () => {
    this.setState({
      message: "Hit the bell icon to never miss an update",
      sub: "Subscribed"
    });
  };

  imageChange = () => {
    
    this.setState({
      imageURL: bellB,
      message: "Thank you! Happy learning",
      sub: "Subscribed"
    });
  };

  render() { 
    return (
      <div className = "App">
        <h2 style={this.styles}>{this.state.message}</h2>
        <button onClick={this.Buttonchange}>{this.state.sub}</button>
        <p/>
        <img 
          style = {{width: "40px"}}
          src = {this.state.imageURL}
          onClick = {this.imageChange}
          alt = '' />
      </div>
    );
  }
}
 
export default NewComp;