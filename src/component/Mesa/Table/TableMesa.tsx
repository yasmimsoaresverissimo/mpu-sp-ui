import React, { useEffect, useState } from "react";
import './TableMesa.scss'
import { Link } from "react-router-dom";
import { listarDocumentos } from "../Servico/documento.servico";
import Swal from "sweetalert2";

function TableMesa() {

    const [documentos, setDocumentos] = useState([])

    async function fetchData() {
        try {
        const _documentos = await listarDocumentos()
        setDocumentos(_documentos)
        } catch(e) {
            error()
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const error = () => {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Falha ao tentar uma comunicação com o Servidor!'
          })

    }

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