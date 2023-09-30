import React from 'react';
import './App.css';
import {} from 'react-router'
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Documento from '../Documento/Documento';
import Login from '../Login/Login';
import Formulario from '../Formulario/Formulario';
import Mesa from '../Mesa/Mesa';
import VisualizarDoc from '../VisualizarDoc/visualizarDoc';
import ListarUsuario from '../ListarUsuario/ListarUsuario'
import VisualizarDocCompleto from '../VisualizarDocCompleto/VisualizarDocCompleto';
function App() { 
  return (
    <div className="App">
        <Routes>
          <Route path="/mesa-virtual" element={<Mesa />} ></Route>
          <Route path="/documento" element={<Documento />} ></Route>
          <Route path="/usuario" element={<Formulario />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/visualizar-documento" element={<VisualizarDoc />} ></Route>
          <Route path="/listarusuario" element={<ListarUsuario />} ></Route>
          <Route path="/visualizar-documento-completo" element={<VisualizarDocCompleto />} ></Route>
        </Routes>
    </div>
    
  );
}

export default App;
