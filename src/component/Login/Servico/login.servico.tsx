import http from "../../../utils/http"; 
import { LoginModel } from "../Login";

export const logar = (loging: LoginModel ) => {
    console.log('######################')
    return http.post('/v1/auth/login', loging)
            .then(response => response.data);
}
