import React, { useState } from 'react';
import '../VisualizarDoc.css'
import Button from "../../../compenentes-compartilhados/Button/Button"; 
import { Grid } from "@mui/material";
import { deflate } from "zlib";
import Swal from 'sweetalert2'

function Funcoes() {
    const Excluir=()=>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes,  delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }

import { Link } from "react-router-dom";
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
                <Button value="Excluir"onClick={Excluir}/>
            </Grid>
            <Grid item xs={1.4}> 
                <Button value="Excluir"/>
            </Grid>
            <Grid item xs={2}> 
                <Button value="Incluir Cossignatário"/>
                </Grid>
                <Grid item xs={2}> 
                <Link to="/visualizar-documento-completo">
                 <Button value="Visualizar Documento Completo" />
                </Link>
               
                </Grid>
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