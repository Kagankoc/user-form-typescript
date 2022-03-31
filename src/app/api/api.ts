import { authApi } from "./loginApi";
import { userApi } from "./userApi";

export const UserApi = new userApi();
export const AuthApi = new authApi();