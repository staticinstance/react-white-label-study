import React from 'react';
import './App.css';
import WhiteLabeledComponent from './components/white-labeled-component';
import NullableComponent from './components/nullable-component';

class App extends WhiteLabeledComponent {
  render() {
    return (
      <div className="App">
        { this.props.components.map((path) => <NullableComponent key={this.getComponentName(path)} cmp={this[this.getComponentName(path)] } /> ) }
      </div>
    );
  }
}

export default App;
