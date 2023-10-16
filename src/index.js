import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/fonts/IranSansX(Pro)/Webfonts/style.css'
import reportWebVitals from './reportWebVitals';
import { getDirection } from './localization';
require('typeface-muli')
document.getElementsByTagName("body")[0].setAttribute("dir",getDirection())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
