import React from 'react';
import './App.css';
import WhiteLabeledComponent from './components/white-labeled-component';

class App extends WhiteLabeledComponent {
  constructor(props) {
    super(props);

    //name is what will be used in render ie: <Name />
    //path is the file name without an extension
    this.components = [
    {name: 'Header', path: 'header'},
    {name: 'Button', path: 'button'}];
    this.components.forEach((cmp) => this[cmp.name] = null);
  }

  componentWillMount(){
    super.componentWillMount();
  }

  render() {
    return (
      <div className="App">
        {
          this.Header !== null
          ? <this.Header />
          : null
        }
        {
          this.Button !== null
          ? <this.Button />
          : null
        }
      </div>
    );
  }
}

export default App;
