
import http from "../../../utils/http"; 
import { Usuario } from "../FormularioUsuario";
import { UserActive } from "../Tabela/TabelaUsuario";

const baseURL = '/v1/user'

export const cadastrarUsuario = (usuario: Usuario) =>{
    http.post(`${baseURL}/cadastrar`, usuario)
}

export const listarUsuario = (nome?: string, departamento?: string, page?: any, size?: any) => {
    return http
        .get(`${baseURL}/listar`)
        .then(response => response.data); 
}

export const editarUsuario = (usuario: Usuario, id: String) =>{
    http.put(`${baseURL}/editar/${id}`, usuario)
}

export const ativarDesativarUsuario = (id: String, departmentActive: UserActive) => {
    return http
        .patch(`${baseURL}/ativar-desativar/${id}`, departmentActive)
        .then(response => response.data); 
}
export const buscarUsuarioPorId = (id:string) => {
    return http
        .get(`${baseURL}/buscar/${id}`)
        .then(response => response.data); 
} 