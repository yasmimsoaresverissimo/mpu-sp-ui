import React from 'react';
import Conteudo from '../../../compenentes-compartilhados/Conteudo/Conteudo'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import InputGroup from '../../../compenentes-compartilhados/InputGroup/InputGroup'
import { Link } from 'react-router-dom';
import './TabelaUsuario.scss'
import Button from '../../../compenentes-compartilhados/Button/Button';

function TabelaUsuario () {
    return <Conteudo >
    <div className='HeaderUsuario'>
        <h2>Lista de Usuários <AssignmentIndIcon /></h2>

        <div className='left'>
            <InputGroup></InputGroup>
        </div>
    
        <Link className='BtnCriarDocumento AppCriarDocumento right' to="/formulario-usuario"><Button value='Novo usuário' color='create'></Button></Link>
        
        <div className="clear"></div>

    </div>
    <table className="AppTabelaUsuario">
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

export default TabelaUsuario