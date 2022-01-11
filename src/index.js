import React from 'react';
import ReactDOM from 'react-dom';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import 'primeflex/primeflex.css'
import './assets/_overrides.scss';
import 'primeflex/src/_variables.css';
import 'primeflex/src/_grid.css';
import 'primeflex/src/_formlayout.css';
import 'primeflex/src/_display.css';
import 'primeflex/src/_text.css';
import 'primeflex/src/flexbox/_flexbox.css';
import 'primeflex/src/_spacing.css';
import 'primeflex/src/_elevation.css';
 
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
