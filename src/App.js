import React, { Component } from 'react';
import Header from './components/header-component';

class App extends Component {
  render() {
    return (
        <Header components={window.app.packages.header} />
    );
  }
}

export default App;
