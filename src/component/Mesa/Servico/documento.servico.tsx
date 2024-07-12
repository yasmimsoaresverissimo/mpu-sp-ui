
import http from "../../../utils/http-document"; 
import { DocumentoModel } from "../../Documento/Documento"; 

const baseURL = '/v1/mobil'
const baseURLMovimentacoes = '/v1/movimentacao/'

export const listarDocumentos = () => {
    return http
        .get('/documento/listar')
        .then(response => response.data); 
}

export const buscarDocumento = (sigla:string) => {
    return http
        .get(`${baseURL}/buscar/${sigla}/sigla`)
        .then(response => response.data); 
} 

export const filtro = (mobilId: number, typeMovement:number) => {
    return http
    .get(`${baseURLMovimentacoes}/filtro`, {
        params: {
            mobilId,
            typeMovement
        }
    })
    .then(response => response.data);
}

export const filtroBoolean = (mobilId: number, typeMovement: string) => {
    return http
     .get(`${baseURLMovimentacoes}/filtro-boolean`, {
        params: {
          mobilId,
          typeMovement
        }
      })
     .then(response => response.data.isFinalized);
  }

  export const finalizarDocumento = (sigla: string, subscritorId: number) => {
    return http
     .post(`${baseURLMovimentacoes}/finalizacao-documento/${sigla}`, { subscritorId })
     .then(response => response.data)
  }

export const cadastrarDocumento = (documento: DocumentoModel) => {
    http.post('/documento/cadastro', documento)
}
