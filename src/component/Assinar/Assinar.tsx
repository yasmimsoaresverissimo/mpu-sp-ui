import React from 'react'
import { Dialog, DialogTitle, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import Button from '../../compenentes-compartilhados/Button/Button';
import './Assinar.css'
import IconAssinar from "./Files/icon-assinar.png"

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
    tituloHeader?: string,
    titulo?: string
    radius?: boolean
    codigoDocumento: any
}
  
function Assinar(props: SimpleDialogProps) {
    const { onClose, selectedValue, open, titulo, codigoDocumento, tituloHeader, radius } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    return (
      <Dialog onClose={handleClose} open={open} >
        <DialogTitle>{ tituloHeader } <b>{ codigoDocumento }</b></DialogTitle>
        <div className='AppModal'>
        
        <div className='AppIcon'>
            <img src={ IconAssinar } />
        </div>
        
        <h2>{ titulo }</h2>
  
        { radius && 
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="senha"
              name="radio-buttons-group" 
            >
              <FormControlLabel value="senha" control={<Radio />} label="Senha" />
              <FormControlLabel value="certificado" control={<Radio />} label="Certificado digital" />
            </RadioGroup>
        </FormControl>
        }
  
        <Button value='Selecionar'/>
        </div>
      </Dialog>
    );
}

export default Assinar