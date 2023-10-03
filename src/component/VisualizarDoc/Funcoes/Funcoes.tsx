import React from "react";
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

    return <div className="AppFucoes"> 
        <Grid container spacing={0.5}>
            <Grid item xs={1.4}>
            <Button value='Finalizar'/> 
            </Grid>
                <Grid item xs={1.4}> 
                <Button value="Assinar"/>
                </Grid>
                <Grid item xs={1.4}>
                <Button value="Editar"/>
                </Grid>
                <Grid item xs={1.4}> 
                <Button value="Excluir"onClick={Excluir}/>
                </Grid>
                <Grid item xs={2}> 
                <Button value="Incluir Cossignatário"/>
                </Grid>
            </Grid>
    </div>

}
export default Funcoes