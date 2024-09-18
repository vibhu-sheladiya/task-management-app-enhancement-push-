// src/index.js or src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NotificationManager from './NotificationManager';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <NotificationManager />
  </React.StrictMode>,
  document.getElementById('root')
);
