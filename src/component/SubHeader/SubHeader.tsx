import React from "react";
import './SubHeader.css' 
import { Avatar, Chip, Grid } from "@mui/material";
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";
import Button from "../../compenentes-compartilhados/Button/Button";

declare interface SubHeaderProps {

    hidden?: boolean

}

function SubHeader(props: SubHeaderProps) {
    return <div className="AppSubHeader" hidden={ props.hidden }>
            <Conteudo>
                <div className="MenuSubHeader">
                    <div className="Ambiente">
                        <p>Ambiente de <b>desenvolvimento</b></p>
                    </div>
                        
                    <div className="Container2">
                        <Chip className="Avatar" avatar={<Avatar sx={{ background: 'white' }}>G</Avatar>} label="Yasmin Soares" />
                        <Button value="Sair" color="danger" className="BotaoSair" />
                    </div> 
            
                </div>
                    
             
            </Conteudo>
        </div>
}

export default SubHeader