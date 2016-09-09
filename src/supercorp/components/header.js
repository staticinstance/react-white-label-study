import DefaultHeader from '../../components/header';

class MyHeader extends DefaultHeader {
  constructor(props){
    super(props);
    this.text = "The supercorp header"
  }
}

export default MyHeader;
