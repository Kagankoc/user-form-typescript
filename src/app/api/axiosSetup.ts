import axios from "axios"

const requestHeaders = {
    'Content-Type': 'application/json',
    Pragma:'no-cache',
}

export const apiInstance = axios.create({
    baseURL:'https://userformbackend.herokuapp.com/',
    headers:requestHeaders,
    validateStatus:()=>true,
})
apiInstance.interceptors.response.use(function(response) {
    return Promise.resolve(response);
},function(error){
    return Promise.reject(error);
})