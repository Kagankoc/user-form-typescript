import { UserInfo } from "../store/models/user";
import { apiInstance } from "./axiosSetup";



export class userApi  {

    public deleteUser(
        selectedUser?:UserInfo,
    ){
        return apiInstance.delete('/user/delete',{data: {userId:selectedUser?.userId}});
    }
    public editUser(
        selectedUser?:UserInfo,
    ){
        return apiInstance.put('/user/edit',selectedUser);
    }
    public getUsers(
    ){
        return apiInstance.get('/user');
    }
}