import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";

import reportWebVitals from './reportWebVitals';
import WeatherTemplate from './WeatherTemplate';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <WeatherTemplate />
 

  </React.StrictMode>
);


reportWebVitals();
