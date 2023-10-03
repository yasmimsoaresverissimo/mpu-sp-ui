import React, { useState } from 'react';
import '../VisualizarDoc.css'
import Button from "../../../compenentes-compartilhados/Button/Button"; 
import { Grid } from "@mui/material";
import Assinar from '../../Assinar/Assinar';

export interface FuncoesProp {
    codigoDocumento?: string
}

function Funcoes(props: FuncoesProp) {

    const [open, setOpen] = React.useState(false);

    const handleClose = (value: string) => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    return <div className="AppFucoes"> 
        <Grid container spacing={0.5}>
            <Grid item xs={1.4}>
                <Button value='Finalizar'/> 
            </Grid>
            <Grid item xs={1.4}> 
                <Button value="Assinar" onClick={handleClickOpen} />
            </Grid>
            <Grid item xs={1.4}>
                <Button value="Editar"/>
            </Grid>
            <Grid item xs={1.4}> 
                <Button value="Excluir"/>
            </Grid>
            <Grid item xs={2}> 
                <Button value="Incluir Cossignatário"/>
            </Grid>
            </Grid>

            <Assinar
                selectedValue={'selectedValue'}
                open={open}
                onClose={handleClose}
                titulo='Qual forma de assinatura?'
                tituloHeader='Assinar documento'
                radius={true}
                codigoDocumento={ props.codigoDocumento }
            />
    </div>

}
export default Funcoes