import React, { useState } from "react";
import Form from "../../compenentes-compartilhados/Form/Form";
import Input from "../../compenentes-compartilhados/Input/Input";
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";
import './Documento.css'
import { Grid } from "@mui/material";
import Button from "../../compenentes-compartilhados/Button/Button";
import { Link } from "react-router-dom";
import User from "../../compenentes-compartilhados/User/User";
import { useParams } from 'react-router-dom';

export class DocumentoModel {
    sigla?: string
    siglaResponsavelAssinatura?: string
    modelo?: number 
    tempo?: string
}

function Documento() {

    const { sigla } = useParams();
    const [ descricao, setDescricao ] = useState('')
    const [ label, setLabel ] = useState('')

    const handleInputChange = (event:any) => {
        const { value } = event.target;
        setDescricao((prevValues) => prevValues + " " + value);
    };

    return <Conteudo >
        
        <Form titulo={!sigla ? 'Criar documento' : 'Editar documento'}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Input label="Modelo"/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input label="Meus textos padrões"/>
                </Grid>

                <User />

            </Grid>
            
            <Input label="Interessado" onChange={handleInputChange} />
            <Input label="Assunto" onChange={handleInputChange} />
            <Input label="Número de referência" onChange={handleInputChange} />
            <textarea className="TextArea" value={descricao} />

            <Grid container spacing={1}>
                <Grid item xs={4} sm={2}>
                    <Button value="Criar" color="create" />
                </Grid>
                <Grid item xs={4} sm={2}>
                    <Button>Visualizar</Button>
                </Grid>
                <Grid item xs={4} sm={2}>
                <Link className='BtnCriarDocumento AppCriarDocumento' to="/mesa-virtual"><Button value="Cancelar" color="grey" /></Link>
                    
                </Grid>
            </Grid>

        </Form>
    </Conteudo>

}

export default Documento