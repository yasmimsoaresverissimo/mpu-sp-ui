import React, { useEffect, useState } from "react";
import './SubHeader.css' 
import { Avatar, Chip } from "@mui/material";
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";
import Button from "../../compenentes-compartilhados/Button/Button";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router";

function SubHeader() {
    const [nameUser, setNameUser] = useState('');
    const cookies = new Cookies();
    const navigate = useNavigate();
    useEffect(() => {
        const token = cookies.get('Token');
        if (!token) {
            return 
        }
        const object = JSON.parse(atob(token.split('.')[1]))
        setNameUser(object['nome']);
    }, [setNameUser]);

    function logout() {
        cookies.remove('Token', { path: '/' })
        navigate('/login');
    }

    return <div className="AppSubHeader" hidden={ !cookies.get('Token') ? true : false }>
                <Conteudo>
                    <div className="MenuSubHeader">
                        <div className="Ambiente">
                            <p>Ambiente de <b>desenvolvimento</b></p>
                        </div>
                            
                        <div className="Container2">
                            <Chip className="Avatar" avatar={<Avatar sx={{ background: 'white' }}>{nameUser.substring(0,1).toUpperCase()}</Avatar>} label={nameUser} />
                            <Button onClick={() => logout()} value="Sair" color="danger" className="BotaoSair" />
                        </div> 
                    </div>
                </Conteudo>
        </div>
}

export default SubHeader