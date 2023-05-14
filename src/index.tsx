import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <HashRouter></HashRouter>
  </React.StrictMode>
);
