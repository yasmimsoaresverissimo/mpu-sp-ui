import React from 'react'
import Conteudo from "../../compenentes-compartilhados/Conteudo/Conteudo";
import './NaoAutorizado.css'

    function NaoAutorizado() {

            return <Conteudo>
                <div className='AppCenterContext'>
                <img src="https://cdn-icons-png.flaticon.com/512/4926/4926183.png" alt="img: 404" />
                <h1>Você não possui autorização para acessar essa página!</h1>
                <p>Você tentou acessar uma página a qual não lhe é permitida. Converse com o seu Gestor para lhe dar acesso.</p>
                </div>
                </Conteudo>
    }

export default NaoAutorizado