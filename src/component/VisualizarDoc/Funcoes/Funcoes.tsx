import React, { useState, useEffect } from 'react';
import '../VisualizarDoc.css';
import Button from "../../../compenentes-compartilhados/Button/Button";
import { Grid } from "@mui/material";
import Assinar from '../../Assinar/Assinar';
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";
import Finalizar from '../../../compenentes-compartilhados/BtnFinalizar/Finalizar';
import { buscarDocumento} from '../../Mesa/Servico/documento.servico';
import Excluir from '../../../compenentes-compartilhados/BtnExcluir/Excluir';

interface FuncoesProp {
  codigoDocumento?: string;
}

function Funcoes(props: FuncoesProp) {
  const [openAssinar, setOpenAssinar] = useState(false);
  const [openIncluir, setOpenIncluir] = useState(false);
  const [showFinalizar, setShowFinalizar] = useState(true);
  const [showExcluir, setShowExcluir] = useState(true);
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
      if (ultimaMovimentacao.typeMovement === "EXCLUSAO_DOCUMENTO") {
        setShowExcluir(false);
      } else {
        setShowExcluir(true);
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
          <Link className='BtnCriarDocumento AppCriarDocumento' to="/editar-documento">
            <Button>Editar</Button>
          </Link>
        </Grid>
     
         {showExcluir ? <Grid item xs={4} sm={2.4}><Excluir codigoDocumento={codigoDocumento} /></Grid> : null}

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