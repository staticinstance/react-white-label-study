import React from 'react';
import '../App.css';
import NullableComponent from 'nullable-component';
import WhiteLabeledComponent from '../white-labeled-component';

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
