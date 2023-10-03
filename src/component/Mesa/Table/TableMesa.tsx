import React from "react";
import './TableMesa.scss'
import { Link } from "react-router-dom";

function TableMesa() {

    var listaDocumentos = [
        { 'tempo': '15 horas', 
            'codigo': 'MEM-0006', 
            'modelo': 'Memorando'
        },
        { 'tempo': '2 minutos', 
        'codigo': 'PROC-0006', 
        'modelo': 'Processo'
        }
    ]

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

                    listaDocumentos.map(( listValue, index ) => {
                        return (
                        <tr key={index}>
                            <td>{listValue.tempo}</td>
                            <td><Link to={
                                {pathname: `/visualizar-documento/${listValue.codigo}`}
                                } >{listValue.codigo}</Link></td>
                            <td>{listValue.modelo}</td>
                        </tr>
                        );
                    })

                }
                
            
        </tbody>
    </table>
}

export default TableMesa