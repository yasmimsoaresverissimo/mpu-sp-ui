import React, { useEffect, useState } from "react";
import './TableMesa.scss'
import { Link } from "react-router-dom";
import { buscarDocumento, listarDocumentos } from "../Servico/documento.servico";
import { DocumentoModel } from "../../Documento/Documento";

function TableMesa() {

    const [documentos, setDocumentos] = useState([])

    async function fetchData() {
        const _documentos = await listarDocumentos()
        setDocumentos(_documentos)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return <table className="AppTable">
        <thead>
            <tr>
                <th>Tempo</th>
                <th>Código do documento</th>
                <th>Modelo</th>
            </tr>
        </thead>
        <tbody>
            
                {

                    documentos.map(( listValue:any, index:any ) => {
                        return (
                        <tr key={index}>
                            <td>{listValue.tempo}</td>
                            <td><Link to={
                                {pathname: `/visualizar-documento/${listValue.sigla}`}
                                } >{listValue.sigla}</Link></td>
                            <td>{listValue.modelo}</td>
                        </tr>
                        );
                    })

                }
                
            
        </tbody>
    </table>
}

export default TableMesa