import React, { useEffect, useState } from 'react';
import Conteudo from '../../compenentes-compartilhados/Conteudo/Conteudo'
import InputGroup from '../../compenentes-compartilhados/InputGroup/InputGroup'
import './Mesa.css'

function Mesa() {

    const [showAccordion1, setAccordion1] = useState(true)
    const [showAccordion2, setAccordion2] = useState(false)
    const [showAccordion3, setAccordion3] = useState(false)
    const [showAccordion4, setAccordion4] = useState(false)

    function handleClick (ids:any) {
        if(ids === 1) {
            setAccordion1(true)
            setAccordion2(false)
            setAccordion3(false)
            setAccordion4(false)
        } else if(ids === 2) { 
            setAccordion1(false)
            setAccordion2(true)
            setAccordion3(false)
            setAccordion4(false)
        } else if(ids === 3) { 
            setAccordion1(false)
            setAccordion2(false)
            setAccordion3(true)
            setAccordion4(false)
        } else if(ids === 4) { 
            setAccordion1(false)
            setAccordion2(false)
            setAccordion3(false)
            setAccordion4(true)
        }
        
    }

    return <Conteudo >
            <div className='HeaderMesa'>
                <h2>Mesa virtual</h2>
                <InputGroup></InputGroup>
            </div>

            <div className="accordion-heading" onClick={() => handleClick(1) } >Documentos criados</div>
           
            {showAccordion1 && (
                <div className="accordion-content" >
                    Documentos criados
                </div>
            )}

            <div className="accordion-heading" onClick={() =>  handleClick(2) } >Documentos recebidos</div>
            
            {showAccordion2 && (
                <div className="accordion-content" >
                    Documentos recebidos
                </div>
            )}

            <div className="accordion-heading" onClick={() => handleClick(3)} >Documentos tramitados</div>
            
            {showAccordion3 && (
                <div className="accordion-content" >
                    Documentos tramitados
                </div>
            )}

            <div className="accordion-heading" onClick={() => handleClick(4)} >Documentos assinados</div>
            
            {showAccordion4 && (
                <div className="accordion-content" >
                    Documentos assinados
                </div>
            )}

        </Conteudo>
    
}

export default Mesa