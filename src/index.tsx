import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App/App';
import Header from './component/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import SubHeader from './component/SubHeader/SubHeader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header hidden={ false }></Header>
      <SubHeader hidden={ false } />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
