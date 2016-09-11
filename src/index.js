import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './packages'

//todo make this a cli / config var for build
window.portal = 'herocorp';

if(window.portal){
  require.ensure([], function(require) {
    try{
      //import portal overrides
      require(`./${window.portal}/packages.js`);
      ReactDOM.render(
        <App />,
        document.getElementById('root')
      );
    }catch(e){}
  })
}else{
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
