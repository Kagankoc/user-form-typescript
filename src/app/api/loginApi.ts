import { apiInstance } from "./axiosSetup";


export class authApi {
    public login (userName:string,password:string) {
        return apiInstance.post('/login',{userName,password});
    }
    public register(userName:string,password:string) {
        return apiInstance.post('/register',{userName,password});
    }
    public logout(userId:string) {
        return apiInstance.post('/logout',{userId})
    }
}