import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./resetCss.scss"
import "./globalStyles.scss"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
