import React from 'react'; //core lib
import ReactDOM from 'react-dom/client'; //imperting react dom for rendering


import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

