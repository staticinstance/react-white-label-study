import DefaultHeader from '../header';
class MyHeader extends DefaultHeader {
  constructor(props){
    super(props);
    this.text = "The herocorp header"
  }
}

export default MyHeader;
