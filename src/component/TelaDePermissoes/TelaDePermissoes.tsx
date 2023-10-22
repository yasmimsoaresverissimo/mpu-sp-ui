import React from "react";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import VerifiedIcon from '@mui/icons-material/Verified';

import "./TelaDePermissoes.scss";  

function permissoesUsuario() {
    return (
        <>
            <h1>Permissões do sistema <VerifiedUserIcon fontSize="large" /></h1>
            <table className="Tabelastyle">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Permitir</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CAD_USUARIO</td>
                        <td>cadastro de usuário</td>
                        <td>
                            <input type="checkbox" name="permitir" id="" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default permissoesUsuario;
