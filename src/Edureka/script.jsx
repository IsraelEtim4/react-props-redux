import React, {Component} from "react";

var styles = {color: 'red'}
var styles2 = {color: 'blue'}

export class Header extends Component {
  render (){
    return (
      <div className="App">
        <h3>{this.props.name}</h3>
        <h2>This is Header Component</h2>
      </div>
    );
  }
};

export class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user : "Israel",
      id : "101"
    }

    setTimeout(() => {
      this.setState({user: "swatee", id: "300"})
    }, 5000);
    // 5000 represent 5seconds
  }
  
  render (){
    return (
      <div className="App">
        <h1>User is : {this.state.user}
        <br/> ID is : {this.state.id}</h1>
        <h2>This is Footer Component</h2>
      </div>
    );
  }
};

export class Script extends Component {
  render() {
    return(
      <div style={styles}>
        <h2 style={styles2}>Hello World</h2>
        <p>It has never been easy, till God helped me out of this whole mess</p>
        <h3>Sum is : {4+5}</h3>
        <Header name = "Alex"/>
        <Header name = "Israel"/>
        <Footer/>

      </div>
    );
  }
};

export default Script;
