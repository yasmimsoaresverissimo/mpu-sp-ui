import http from "../../../utils/http-department"; 

const baseURL = '/v1/department'

export const listarSetores = () => {
    return http
        .get(`${baseURL}/listar`)
        .then(response => response.data); 
}

export const buscarSetores = (nome?:string) => {
    console.log(nome)
    return http
        .get(`${baseURL}/buscar?nome=${nome}`)
        .then(response => response.data); 
} 