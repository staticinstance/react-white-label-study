import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './components/packages'

//todo make this a cli / config var for build
window.portal = 'herocorp';

require.ensure([], function(require) {
  try{
    //import portal overrides
    require(`./components/${window.portal}/packages.js`);

    ReactDOM.render(
      <App components={window.Zw.packages.header}/>,
      document.getElementById('root')
    );
  }catch(e){}
})
