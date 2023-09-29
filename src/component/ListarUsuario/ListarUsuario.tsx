import React, { useEffect, useState } from 'react';
import Conteudo from '../../compenentes-compartilhados/Conteudo/Conteudo'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import InputGroup from '../../compenentes-compartilhados/InputGroup/InputGroup'
import Button from '../../compenentes-compartilhados/Button/Button';
import { Chip, Grid } from "@mui/material";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Table from '../Mesa/Table/TableMesa'


function ListarUsuario () {
    return <Conteudo >
    <div className='HeaderMesa'>
        <h2>Lista de Usuários <AssignmentIndIcon /></h2>

        <div className='left'>
            <InputGroup></InputGroup>
        </div>
    
        <div className="Avatar">
                 <Chip icon= {<PersonAddAltIcon/>} label="Novo Usuário"  variant="outlined"/>                      
        </div> 
        
        <div className="clear"></div>

    </div>
    <table className="AppTable">
        <thead>
                <tr>
                    <th>Nome</th>
                    <th>Setor</th>
                    <th>Contato</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Fulano</td>
                    <td>Setor1</td>
                    <td>(x)xxxxx-xxxx</td>
                </tr>
            </tbody>

        </table>
    

    </Conteudo>

}

export default ListarUsuario