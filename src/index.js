import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//todo make this a cli / config var for build
window.portal = 'herocorp';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
