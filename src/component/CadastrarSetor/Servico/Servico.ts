import http from "../../../utils/http-department"; 
import { DepartmentActive } from "../CadastrarSetor";

const baseURL = '/v1/department'

export const listarSetores = (nome?: string, sigla?: string, page?: any, size?: any) => {
    return http
        .get(`${baseURL}/listar?page=${page}&size=${size}&nome=${nome}&sigla=${sigla}`)
        .then(response => response.data); 
}

export const ativarDesativarSetor = (id: String, departmentActive: DepartmentActive) => {
    return http
        .patch(`${baseURL}/ativar-desativar/${id}`, departmentActive)
        .then(response => response.data); 
}