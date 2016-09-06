import DefaultButton from '../button';

class MyButton extends DefaultButton {
  constructor(props){
    super(props);
    this.text = "I'm the herocorp button"
    this.color = 'green'
  }
  onClick(){
    console.log('the herocorp button was here');
    alert("I'm the herocorp button and overrode onClick to also write to the console")
  }
}

export default MyButton;
