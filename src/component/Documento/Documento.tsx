import React, { useState } from "react";
import Form from "../../compenentes-compartilhados/Form/Form";
import Input from "../../compenentes-compartilhados/Input/Input";
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";

import './Documento.css'
import { Grid } from "@mui/material";
import Button from "../../compenentes-compartilhados/Button/Button";
import { Link } from "react-router-dom";

function Documento() {

    return <Conteudo >
        
        <Form titulo={"Criar documento"}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Input label="Modelo"/>
                </Grid>
                <Grid item xs={6}>
                    <Input label="Meus textos padrões"/>
                </Grid>

                <Grid item xs={4}>
                    <Input label="Responsável pela assinatura"/>
                </Grid>
                <Grid item xs={5}>
                    <Input label="Nome completo"/>
                </Grid>
            </Grid>
            <Input label="Interessado"/>
            <Input label="Assunto"/>
            <Input label="Número de referência"/>
            
            <textarea className="TextArea"></textarea>

            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Button value="Criar" color="create" />
                </Grid>
                <Grid item xs={2}>
                    <Button value="Visualizar" />
                </Grid>
                <Grid item xs={2}>
                <Link className='BtnCriarDocumento AppCriarDocumento' to="/mesa-virtual"><Button value="Cancelar" color="grey" /></Link>
                    
                </Grid>
            </Grid>

        </Form>
    </Conteudo>

}

export default Documento