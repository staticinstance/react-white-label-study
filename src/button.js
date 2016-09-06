import React, { Component } from 'react';

class MyButton extends Component {
  constructor(props){
    super(props);
    this.text = "I'm the default button"
    this.color = 'blue'
  }
  onClick(){
    alert("I'm the " + (window.portal || 'default') + " button")
  }
  render(){
    return (
      <button onClick={() => this.onClick()} style={{"border": "5px solid "+this.color}}>
        {this.text}
      </button>
    );
  }
}

export default MyButton;
