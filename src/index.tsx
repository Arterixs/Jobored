import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './app/App';
import { contextBody, MyContext } from './context/context-api';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <MyContext.Provider value={contextBody}>
        <App />
      </MyContext.Provider>
    </HashRouter>
  </React.StrictMode>
);
