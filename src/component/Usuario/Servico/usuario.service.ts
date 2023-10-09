
import http from "../../../utils/http"; 
import { Usuario } from "../FormularioUsuario";

export const listarUsuarios = () => {
    return http
        .get('/usuario/listar')
        .then(response => response.data); 
}

export const buscarUsuarios = (nome?:string, id?:string, cpf?:string, endereco?:string) => {
    console.log(nome)
    return http
        .get(`/usuario/buscar?nome=${nome}&id=${id}&cpf=${cpf}&endereco=${endereco}`)
        .then(response => response.data); 
} 

export const buscarUsuario = (id:string) => {
    return http
        .get(`/usuario/buscar?id=${id}`)
        .then(response => response.data); 
}   

export const cadastrarUsuario = (usu: Usuario) => {
    http.post('/usuario/cadastro', usu)
}
