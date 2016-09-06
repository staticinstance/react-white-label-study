import React, { Component } from 'react';

class WhiteLabeledComponent extends Component {
  componentWillMount(){
    //it is required that subclasses call super.componentWillMount();
    //or figure out another place to initialize the components
    //dynamically import components
    this.components.forEach((cmp) => this.getWhitelabeledComponent(cmp.name, cmp.path));
  }
  //todo pass in array of components to require
  getWhitelabeledComponent(name, component, useDefault){
    if(!component){
      return <span />;
    }
    let that = this;
    let path;
    path = useDefault
      ? './' + component
      : './' + (window.portal || '') + (window.portal ? "-" : "") + component

    //todo require a portal bundle like att.bundle
    //that includes all the overridden components
    // require.ensure(['att'], function(require) {
    //   TheButton = require('button').default;
    //   that.forceUpdate()
    // })

    //try to dynamically import the component
    require.ensure([], function(require) {
      try{
        //check to see if there is an override for the portal
        that[name] = require(path).default;
      }catch(e){
        //if not use default
        that.getWhitelabeledComponent(name, component, true)
      }

      that.forceUpdate()
    })
  }

  render(){
    return (
      <div>
        Please override the render function!
      </div>
    );
  }
}

export default WhiteLabeledComponent;
