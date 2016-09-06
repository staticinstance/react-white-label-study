import React from 'react';
import './App.css';
import WhiteLabeledComponent from './white-labeled-component';

class App extends WhiteLabeledComponent {
  constructor(props) {
    super(props);
    this.state = {portal: window.portal};
    this.Button = null
    this.Header = null
  }

  componentWillMount(){
    //this is how to import components
    //first define them in state
    //then dynamically import them
    this.getWhitelabeledComponents('Header', 'header');
    this.getWhitelabeledComponents('Button', 'button');
  }

  getWhitelabeledButton(portal = ''){
    var that = this;
    var path = './' + (portal || "") + (portal ? "-" : "") + 'button'

    //todo require a portal bundle like att.bundle
    //that includes all the overridden components
    // require.ensure(['att'], function(require) {
    //   Button = require('button').default;
    //   that.forceUpdate()
    // })

    //try to dynamically import the button
    require.ensure([], function(require) {
      try{
        //check to see if there is an override for the portal
        that.Button = require(path).default;
      }catch(e){
        //if not use default
        that.getWhitelabeledButton()
      }

      that.forceUpdate()
    })
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
        <br/>
        <button onClick={() => this.getWhitelabeledButton('supercorp')}>supercorp</button>
        <button onClick={() => this.getWhitelabeledButton('herocorp')}>herocorp</button>
        <button onClick={() => this.getWhitelabeledButton('')}>default</button>
      </div>
    );
  }
}

export default App;
