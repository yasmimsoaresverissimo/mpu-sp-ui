
import http from "../../../utils/http"; 
import { Usuario } from "../FormularioUsuario";

export const listarUsuarios = () => {
    return http
        .get('/usuario/listar')
        .then(response => response.data); 
}

export const cadastrarUsuario = (usu: Usuario) => {
    http.post('/usuario/cadastro', usu)
}
