import React from 'react'
import { Dialog, DialogTitle, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import Button from '../../compenentes-compartilhados/Button/Button';
import CircularProgressWithLabel from '../../compenentes-compartilhados/CircularProgressWithLabel/CircularProgressWithLabel';
import './AssinarComCertificadoDigital.css'
import IconAssinar from "./Files/icon-assinar.png"
import Conteudo from '../../compenentes-compartilhados/Conteudo/Conteudo';


export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
   
}
  
function AssinarComCertificadoDigital(props: SimpleDialogProps) {
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    return (<Dialog onClose={handleClose} open={open} >
          <Conteudo>
            <DialogTitle>Assinando com certificado digital</DialogTitle>
            <CircularProgressWithLabel   />
          </Conteudo>
        </Dialog>

    );
}

export default AssinarComCertificadoDigital