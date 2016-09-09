import React from 'react';
import '../App.css';
import WhiteLabeledComponent from '../white-labeled-component';
import NullableComponent from '../nullable-component';

class Header extends WhiteLabeledComponent {
  render() {
    return (
      <div className="App">
        { this.props.components.map((path) => <NullableComponent key={this.getComponentName(path)} cmp={this[this.getComponentName(path)] } /> ) }
      </div>
    );
  }
}

export default Header;
