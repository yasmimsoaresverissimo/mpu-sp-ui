
import http from "../../../utils/http-user"; 
import { Usuario } from "../FormularioUsuario";

const baseURL = '/v1/user'

export const cadastrarUsuario = (usuario: Usuario) =>{
    http.post(`${baseURL}/cadastrar`, usuario)
}
export const editarUsuario = (usuario: Usuario, id: String) =>{
    http.put(`${baseURL}/editar/${id}`, usuario)
}
export const buscarUsuarioPorId = (id:string) => {
    return http
        .get(`${baseURL}/buscar/${id}`)
        .then(response => response.data); 
} 
export const listarUsuarios = () => {
    return http
        .get('/usuario/listar')
        .then(response => response.data); 
}

export const buscarUsuarios = (nome?:string) => {
    console.log(nome)
    return http
        .get(`/usuario/buscar?nome=${nome}`)
        .then(response => response.data); 
} 

export const buscarUsuario = (id:string) => {
    return http
        .get(`/usuario/buscar?id=${id}`)
        .then(response => response.data); 
}   

