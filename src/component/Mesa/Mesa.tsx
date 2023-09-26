import React, { useState } from 'react';
import Conteudo from '../../compenentes-compartilhados/Conteudo/Conteudo'
import InputGroup from '../../compenentes-compartilhados/InputGroup/InputGroup'
import './Mesa.css'

function Mesa() {

    const [showAccordion, setShowAccordion] = useState(true)

    return <Conteudo >
            <div className='HeaderMesa'>
                <h2>Mesa virtual</h2>
                <InputGroup></InputGroup>
            </div>

            <div className="accordion-heading" onClick={() => setShowAccordion(false)} >Documentos criados</div>
            <div className="accordion-content" hidden={showAccordion}>
                Documentos criados
            </div>

            <div className="accordion-heading" onClick={() => { setShowAccordion(false) }} >Documentos recebidos</div>

            <div className="accordion-heading" onClick={() => setShowAccordion(false)} >Documentos tramitados</div>

            <div className="accordion-heading" onClick={() => setShowAccordion(false)} >Documentos assinados</div>

        </Conteudo>
    
}

export default Mesa