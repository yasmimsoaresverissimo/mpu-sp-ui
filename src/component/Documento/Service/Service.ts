import httpDocument from "../../../utils/http-document";
import http from "../../../utils/http-document"; 
import { TramitarModel } from "../../TramitarDoc/TramitarDoc";


const baseModelURL = '/v1/model'
const baseMobilURL = '/v1/mobil'
const baseURL = '/v1/movimentacao';

export const listarModelos = (name?: string) => {
    return http
        .get(`${baseModelURL}/listar`)
        .then(response => response.data); 
}

export const buscarMobilPorSigla = (sigla?: string) => {
    return http
        .get(`${baseMobilURL}/buscar/${sigla}/sigla`)
        .then(response => response.data); 
}

export const tramitarDocumento = (tramitar: TramitarModel, siglaDocumento: string) => {
  return httpDocument
    .post(`${baseURL}/tramitar-documento/${siglaDocumento}`, tramitar)
    .then(response => response.data)
    };
