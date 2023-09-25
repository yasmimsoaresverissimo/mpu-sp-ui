import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App/App';
import Header from './component/Header/Header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header></Header>
    <App />
  </React.StrictMode>
);
