import axios from "axios";

const base_api_url = "http://127.0.0.1:8000/api/v1";
// or if you prefer using localhost:
// const base_api_url = "http://localhost:8000/api/v1";

// Configure axios defaults
axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export default {
    //AUTH
    getRegister:(data)=>axios.post(`${base_api_url}/auth/register`,data),
    getLogin:(data)=>axios.post(`${base_api_url}/auth/login`,data),
    getLogout:(data)=>axios.post(`${base_api_url}/auth/logout`,data)
}