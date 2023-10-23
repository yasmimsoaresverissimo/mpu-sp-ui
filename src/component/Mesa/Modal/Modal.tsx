import React from 'react'
import { Dialog, DialogTitle, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import './Modal.css'
import IconDocumento from "./Files/icon-assinar.png"
import { Link } from 'react-router-dom'

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
    tituloHeader?: string,
    titulo?: string
    desc?:any
    siglaDocumento?:string
}
  
function Modal(props: SimpleDialogProps) {
    const { onClose, selectedValue, open, titulo, tituloHeader, desc } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    return (
      <Dialog onClose={handleClose} open={open} >
        <DialogTitle>{ tituloHeader } </DialogTitle>
        <div className='AppModal'>
        
        <div className='AppIcon'>
            <img src={ IconDocumento } />
        </div>
        
        <h2>{ titulo }</h2>
  
        <b>{ props.siglaDocumento }</b>
        <br />
  
        <Link className='AppLink' to={
            {pathname: `/visualizar-documento/${props.siglaDocumento}`}
                                } ><button>Visualizar</button></Link>
        </div>
      </Dialog>
    );
}

export default Modal