import React from "react";

import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from "@mui/material";
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";

function Header() {
    return <div className="AppHeader">
            <Conteudo>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img className="Logo" src="https://www.senac.br/images/senac_logo_branco.png" alt="logo do cliente" />
                    </Grid> 
                    <Grid item xs={6}>
                        <div className="menu">
                            <MenuIcon sx={{ color: 'white' }} fontSize="large" />
                        </div> 
                    </Grid> 
                </Grid>
            </Conteudo>
        </div>
}

export default Header