import React, { Component } from 'react';

class MyHeader extends Component {
  constructor(props){
    super(props);
    this.text = "default header"
  }
  render(){
    return (
      <h1>
        {this.text}
      </h1>
    );
  }
}

export default MyHeader;
