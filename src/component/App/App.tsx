import React from 'react';
import './App.css';
import Button from '../../compenentes-compartilhados/Button/Button';
import Documento from '../Documento/Documento';
import Header from '../Header/Header';
import SubHeader from '../SubHeader/SubHeader';
import Formulario from '../Formulario/Formulario';

function App() {
  return (
    <>
      <Header></Header>
      <SubHeader></SubHeader>
      <Documento></Documento>
      <Formulario></Formulario>
    </>
  );
}

export default App;
