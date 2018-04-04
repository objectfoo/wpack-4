delete(window.Symbol);
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const initialProps = {
  message: 'Hello Kitty'
};

ReactDOM.render(
  <App {...initialProps} />,
  document.getElementById('app')
);
