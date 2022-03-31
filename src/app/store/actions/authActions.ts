import { AuthApi } from "../../api/api";

export enum AUTH_ACTION_TYPES {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    REGISTER = "REGISTER",
}

export const login = (userName:string,password:string) => ({
    type:AUTH_ACTION_TYPES.LOGIN,
    payload: AuthApi.login(userName,password)
})

export const logout = (userId:string) => ({
    type:AUTH_ACTION_TYPES.LOGOUT,
    payload:AuthApi.logout(userId)
})

export const registerUser = (userName:string,password:string) => ({
    type:AUTH_ACTION_TYPES.REGISTER,
    payload: AuthApi.register(userName,password)
})