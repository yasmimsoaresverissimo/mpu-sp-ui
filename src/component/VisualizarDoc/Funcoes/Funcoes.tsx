import React, { useState, useEffect } from 'react';
import '../VisualizarDoc.css';
import Button from "../../../compenentes-compartilhados/Button/Button";
import { Grid } from "@mui/material";
import Assinar from '../../Assinar/Assinar';
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";
import Finalizar from '../../../compenentes-compartilhados/BtnFinalizar/Finalizar';
import { buscarDocumento, finalizarDocumento } from '../../Mesa/Servico/documento.servico';

interface FuncoesProp {
  codigoDocumento?: string;
}

const Excluir = () => {
  Swal.fire({
    title: 'Você tem certeza?',
    text: "Você não vai poder reverte essa ação!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim, Excluir!',
    cancelButtonText: 'Cancelar!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deletado!',
        'Seu documento foi deletado!.',
        'success'
      );
    }
  });
};

function Funcoes(props: FuncoesProp) {
  const [openAssinar, setOpenAssinar] = useState(false);
  const [openIncluir, setOpenIncluir] = useState(false);
  const [showFinalizar, setShowFinalizar] = useState(true);
  const [documentoData, setDocumentoData] = useState<any>({});

  const navigate = useNavigate();
  const { codigoDocumento } = props;

  useEffect(() => {
    if (codigoDocumento) {
      fetchDocumento(codigoDocumento);
    }
  }, [codigoDocumento]);

  const fetchDocumento = async (codigoDocumento: string) => {
    try {
      const documento = await buscarDocumento(codigoDocumento);
      setDocumentoData({ ...documento, subscritorId: documento.subscritorId });
      const ultimaMovimentacao = documento.movimentacoes[documento.movimentacoes.length - 1];
      if (ultimaMovimentacao.typeMovement === "FINALIZACAO") {
        setShowFinalizar(false);
      } else {
        setShowFinalizar(true);
      }
    } catch (error) {
      console.error('Erro ao buscar documento:', error);
    }
  };

  const handleIncluirConsignatario = () => {
    if (codigoDocumento) {
      navigate('/Incluir-Consignatario', { state: { siglaDocumento: codigoDocumento } });
    } else {
      Swal.fire('Erro', 'Código do documento não encontrado', 'error');
    }
  };

  const handleClose = (value: string) => {
    setOpenAssinar(false);
    setOpenIncluir(false);
  };

  const handleAssinarClick = () => {
    setOpenAssinar(true);
  };

  const handleIncluirClick = () => {
    setOpenIncluir(true);
  };

  return (
    <div className="AppFucoes">
      <Grid container spacing={0.7}>
        
          { showFinalizar ? <Grid item xs={4} sm={2.4}><Finalizar codigoDocumento={codigoDocumento} /></Grid> : null }
        
        <Grid item xs={4} sm={2.4}>
          <Button onClick={handleAssinarClick}>Assinar</Button>
        </Grid>
        <Grid item xs={4} sm={2.4}>
          <Link className='BtnCriarDocumento AppCriarDocumento' to={`/documento/${codigoDocumento}`}>
            <Button>Editar</Button>
          </Link>
        </Grid>
        <Grid item xs={4} sm={2.4}>
          <Button onClick={Excluir}>Excluir</Button>
        </Grid>
        <Grid item xs={4} sm={2.4}>
          <Button onClick={handleIncluirConsignatario}>Incluir Consignatário</Button>
        </Grid>
        <Grid item xs={4} sm={2.4}>
          <Link to="/visualizar-documento-completo">
            <Button>Visualizar</Button>
          </Link>
        </Grid>
        <Grid item xs={4} sm={2.4}>
          <Link to="/Tramitar-documento">
            <Button>Tramitar Documento</Button>
          </Link>
        </Grid>
      </Grid>
      
      <Assinar
        open={openAssinar}
        selectedValue=""
        onClose={() => setOpenAssinar(false)}
        tituloHeader="Assinatura do Documento"
        titulo="Escolha o método de assinatura"
        radius={true}
        codigoDocumento={codigoDocumento}
      />
    </div>
  );
}

export default Funcoes;