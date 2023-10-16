
import http from "../../../utils/http"; 
import { Setor } from "../FormularioSetor";

export const cadastrarSetor = (usu: Setor) => {
    http.post('/setor/cadastro', usu)
}