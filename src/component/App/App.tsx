import React from 'react';
import './App.css';
import {} from 'react-router'
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Documento from '../Documento/Documento';
import Login from '../Login/Login';
import Formulario from '../Formulario/Formulario';
import Mesa from '../Mesa/Mesa';

function App() { 
  return (
    <div className="App">
      
        <Routes>
          <Route path="/mesa-virtual" element={<Mesa />} ></Route>
          <Route path="/documento" element={<Documento />} ></Route>
          <Route path="/usuario" element={<Formulario />} ></Route>
          <Route path="/login" element={<Login />} ></Route>

        </Routes>
    </div>
  );
}

export default App;
