import DefaultButton from '../../components/button';

class MyButton extends DefaultButton {
  constructor(props){
    super(props);
    this.text = "I'm the supercorp button"
    this.color = 'yellow';
  }
}

export default MyButton;
