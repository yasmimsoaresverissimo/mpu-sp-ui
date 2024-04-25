import React, { useEffect, useRef, useState } from "react";

import ModeloMemorando from "../modelos/ModeloMemorando";
import Form from "../../compenentes-compartilhados/Form/Form";
import Input from "../../compenentes-compartilhados/Input/Input";
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";
import './Documento.css'
import { Grid } from "@mui/material";
import Button from "../../compenentes-compartilhados/Button/Button";
import { Link } from "react-router-dom";
import User from "../../compenentes-compartilhados/User/User";
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

export class DocumentoModel {
    sigla?: string
    siglaResponsavelAssinatura?: string
    modelo?: number 
    tempo?: string
}

function Documento() {

    useEffect(() => {
        // Função para importar '../../scriptQualquer' após o HTML ser renderizado
        const importarScriptQualquer = async () => {
            const scriptQualquer = require(/* webpackIgnore: true */ '../../scriptQualquer');        };
    
        // Chama a função para importar o script após o HTML ser renderizado
        importarScriptQualquer();
      }, []);

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setDescricao((prevDescricao) => {
          return Object.assign({}, prevDescricao, { [name]: value });
        });
      };
      
    const { sigla } = useParams();
    const [descricao, setDescricao] = useState('');
    const [ label, setLabel ] = useState('')
    const [valorConcatenado, setValorConcatenado] = useState("");

    const handleConcatenatedValueChange = (value: string) => {
        setValorConcatenado(value);
      };

      const handleConcatenateButtonClick = () => {
        // Lógica a ser executada quando o botão de concatenação for clicado
        console.log("Botão de concatenação clicado!");
      };

    const html = `
    
    <!DOCTYPE html>
    <html>
      <head>
        <title>Login</title>
      </head>
      <body>
        <form id="loginForm">
          <label for="matricula">Matricula:</label>
          <input type="text" id="matricula" name="matricula" required />
          <br />
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <br />
          <button type="submit">Login</button>
        </form>
        <div id="response"></div>
        </body>
    </html>
    
    `

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
            <div>
            {parse(html)}
            </div>
            

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