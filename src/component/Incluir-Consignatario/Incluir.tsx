import React, { useState } from 'react'
import { Grid } from '@mui/material'
import Button from '../../compenentes-compartilhados/Button/Button';
import './Incluir.css'
import Conteudo from '../../compenentes-compartilhados/Conteudo/Conteudo';
import Form from '../../compenentes-compartilhados/Form/Form';
import Input from '../../compenentes-compartilhados/Input/Input';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import SharedInput from '../../compenentes-compartilhados/SharedInput/SharedInput';
import ModalIncluir from '../../compenentes-compartilhados/SharedInput/ModalIncluir/ModalIncluir';
import { IncluirCossignatario } from './Servico/ServiceT';

function Incluir() {
  const [matricula, setMatricula] = useState('');
  const [nome, setNome] = useState('');
  const [departmentId, setDepartmentId] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false); 
  
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleIncluirClick = async () => {
    try {
      await IncluirCossignatario(); // Aguarda a inclusão do cossignatário
      Swal.fire('Sucesso', `O cossignatário com matrícula ${matricula} foi incluído com sucesso`, 'success');
    } catch (err) {
      if (err instanceof Error) {
        Swal.fire('Oops!', err.message, 'error');
      }
    }
  };

  return (
    <Conteudo>
      <Form
        titulo={"Inclusão de Cossignatário"}
        onSubmit={(e) => { e.preventDefault(); setShowMessage(true); }}
      >
        <Grid container spacing={2}>
        <Grid item xs={6}sm={7}>
        <SharedInput
              label="Matrícula"
              placeholder="Matrícula"
              onButtonClick={handleOpenModal}
              value={matricula}
              disabledValue={nome}
              onChange={(e) => setMatricula(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}sm={5}>
           <Input 
              label="Função; Lotação; Localidade"
              onChange={(e) => setDepartmentId(e.target.value)}
              value={departmentId}
               />
           </Grid>

        </Grid>
        <Grid container spacing={1}>
           <Grid item xs={4}sm={3}>
           <Button onClick={handleIncluirClick}>Incluir</Button>
           </Grid>
               <Grid item xs={4}sm={3}>
                 <Link className='BtnCriarDocumento AppCriarDocumento' to="/visualizar-documento"><Button value="Voltar" color="grey" /></Link>
                </Grid>
       </Grid>
      </Form>
      <ModalIncluir open={modalOpen} 
      handleClose={handleCloseModal}
      setMatricula={setMatricula}
      setNome={setNome}
      setDepartmentId={setDepartmentId} />
    </Conteudo>
  );
}

export default Incluir
