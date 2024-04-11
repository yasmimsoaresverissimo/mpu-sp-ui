
import http from "../../../utils/http-department"; 
import { Department } from "../FormularioSetor";

const baseURL = '/v1/department'

export const cadastrarSetor = (department: Department) => {
    http.post(`${baseURL}/cadastrar`, department)
}

export const editarSetor = (department: Department, id: String) => {
    http.put(`${baseURL}/editar/${id}`, department)
}

export const buscarSetorPorId = (id:string) => {
    return http
        .get(`${baseURL}/buscar/${id}`)
        .then(response => response.data); 
}  