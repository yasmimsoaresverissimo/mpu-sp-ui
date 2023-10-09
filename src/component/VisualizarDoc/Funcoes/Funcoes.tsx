import React, { useState } from 'react';
import '../VisualizarDoc.css'
import Button from "../../../compenentes-compartilhados/Button/Button"; 
import { Grid } from "@mui/material";
import { deflate } from "zlib";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";
import Assinar from '../../Assinar/Assinar'; 

declare interface FuncoesProp {
    codigoDocumento?: string
}

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
                <Button>Finalizar</Button> 
            </Grid>
            <Grid item xs={1.4}> 
                <Button onClick={handleClickOpen}>Assinar</Button>
            </Grid>
            <Grid item xs={1.4}>
                <Button>Editar</Button>
            </Grid>
                <Grid item xs={1.4}> 
                <Button onClick={Excluir}>Excluir</Button>
            </Grid>
            
            <Grid item xs={2}> 
                <Button>Incluir Cossignatário</Button>
            </Grid>
            <Grid item xs={2}> 
                <Link to="/visualizar-documento-completo">
                    <Button>Visualizar Documento Completo</Button>
                </Link>
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