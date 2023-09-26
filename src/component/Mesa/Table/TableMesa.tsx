import React from "react";
import './TableMesa.scss'

function TableMesa() {
    return <table className="AppTable">
        <thead>
            <tr>
                <th>Tempo</th>
                <th>Código do documento</th>
                <th>Modelo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>29/09/2023 18:50;55</td>
                <td>documento;criado;detran</td>
                <td>Processo</td>
            </tr>
            <tr>
                <td>28/09/2023 19:10;35</td>
                <td>novo documento;criado documento;secretaria da educação</td>
                <td>Memorando</td>
            </tr>
        </tbody>
    </table>
}

export default TableMesa