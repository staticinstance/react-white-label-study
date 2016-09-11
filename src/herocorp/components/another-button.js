import React from 'react';

import DefaultButton from '../../components/button';

class MyButton extends DefaultButton {
  constructor(props){
    super(props);
    this.text = "I othere";
    this.color = 'green';
  }
  onClick(){
    console.log('another button was here');
    alert("I'm another button and overrode onClick to also write to the console")
  }
  render(){
    return <button style={{"position": "absolute", "right": "0", "top": "0"}}>
        additional button in package
      </button>
  }
}

export default MyButton;
