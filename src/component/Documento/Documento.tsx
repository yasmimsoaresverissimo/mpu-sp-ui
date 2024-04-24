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

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setDescricao((prevDescricao) => {
          return Object.assign({}, prevDescricao, { [name]: value });
        });
      };
    
      const html = `
      <label style="text-transform: uppercase;
      color: #222;
      font-size: .8em;
      height: 15px;
      letter-spacing: .75px;
      margin-bottom: 10px;">Gabriel</label>
      <input style={{color: "yellow"}} className="Gabriel" name="Gabriel" onChange={handleInputChange}></input>`;
      
    const { sigla } = useParams();
    const [ descricao, setDescricao ] = useState('')
    const [ label, setLabel ] = useState('')

    function ExternalComponent({ html, handleInputChange }: { html: string, handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
        return (
          <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        );
    }

    const handleButtonClick = () => {
        const concatenatedValues = Object.entries(descricao)
        .filter(([key]) => key !== '')
        .map(([key, value]) => `${key}=${value}`)
        .join(';');
        console.log(concatenatedValues);
        setLabel(concatenatedValues);
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
            
            <ExternalComponent html={html} handleInputChange={handleInputChange} />

            <Grid container spacing={1}>
                <Grid item xs={4} sm={2}>
                    <Button value="Criar" color="create" onClick={handleButtonClick}/>
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