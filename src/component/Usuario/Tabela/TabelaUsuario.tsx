import React, { useEffect, useState } from 'react';
import Conteudo from '../../../compenentes-compartilhados/Conteudo/Conteudo'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import InputGroup from '../../../compenentes-compartilhados/InputGroup/InputGroup'
import { Link } from 'react-router-dom';
import './TabelaUsuario.scss'
import Button from '../../../compenentes-compartilhados/Button/Button';
import { listarUsuarios } from '../Servico/usuario.service';

function TabelaUsuario() {

    const [ usuarios, setUsuarios ] = useState([])

    async function fetchData() {
        const _usuarios = await listarUsuarios()
        setUsuarios(_usuarios)
    }

    useEffect(() => {
        fetchData()
        console.log(usuarios)
    }, [])

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
                
            {

                usuarios.map(( listValue:any, index:any ) => {
                    return (
                        <tr key={index}>
                            <td>{ listValue.nome }</td>
                            <td>{ listValue.setor }</td>
                            <td>{ listValue.telefone }</td> 
                        </tr>
                    );
                })

            }

            </tbody>

        </table>
    
    </Conteudo>

}

export default TabelaUsuario