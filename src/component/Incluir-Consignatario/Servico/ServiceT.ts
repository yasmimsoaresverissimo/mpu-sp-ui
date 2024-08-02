import http from "../../../utils/http-document"; 
import { Cossignatario } from "../Incluir";

const baseURL = '/v1/movimentacao'

export const incluircossignatario = async (cossignatario: Cossignatario, siglaDocumento: string) => {
    const response = await http.post(`${baseURL}/incluir-cossignatario/${siglaDocumento}`, cossignatario);
    return response.data;
  }

export const listarCossignatario = (mobilId?: string, typeMovement?: string, page?: any, size?: any) => {
    return http
        .get(`${baseURL}/filtro?page=${page}&size=${size}&mobilId=${mobilId}&typeMovement=${typeMovement}`)
        .then(response => response.data); 
}
export const excluirCossignatario = (siglaDocumento: string, movimentacaoId: string) => {
    return http
        .delete(`${baseURL}/excluir-movimentacao/${siglaDocumento}/${movimentacaoId}`)
        .then(response => response.data); 
} 
