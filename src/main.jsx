// Fichero src/main.jsx, fichero principal desde el que arrancamos el proyecto de React

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
