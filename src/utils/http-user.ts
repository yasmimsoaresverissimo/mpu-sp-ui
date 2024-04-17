import axios from "axios";
import Cookies from "universal-cookie";

const httpUser = axios.create({
    baseURL: 'http://localhost:8082/'
});

httpUser.interceptors.request.use(async config => {
    const cookies = new Cookies();
    const token = cookies.get('Token');
    if (token) {
        httpUser.defaults.headers.authorization = `Bearer ${token}`;
    }
    return config;
});
 
export default httpUser;