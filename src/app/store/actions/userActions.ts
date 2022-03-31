import { UserApi } from "../../api/api";
import { UserInfo } from "../models/user";

export enum USER_ACTION_TYPES {
    DELETE_USER = "DELETE_USER",
    EDIT_USER = "EDIT_USER",
    GET_USERS = "GET_USERS",
}

export const deleteUser = (selectedUser?:UserInfo) => ({
    type:USER_ACTION_TYPES.DELETE_USER,
    payload: UserApi.deleteUser(selectedUser),
})
export const editUser = (selectedUser?:UserInfo) => ({
    type:USER_ACTION_TYPES.DELETE_USER,
    payload: UserApi.editUser(selectedUser),
})

export const getUsers = () => ({
    type:USER_ACTION_TYPES.GET_USERS,
    payload:UserApi.getUsers(),
})