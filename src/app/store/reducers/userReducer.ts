import {Reducer } from "redux";
import { USER_ACTION_TYPES } from "../actions/userActions";
import { Action } from "../models/action";
import UserState from "../models/user";



const initialState : UserState = {
    userList:[]
}

const UserReducer : Reducer<UserState,Action> = (state = initialState ,action) : UserState => {

    switch(action.type) {
        case USER_ACTION_TYPES.EDIT_USER:
            return {
                ...state,
                userList: state.userList.map((user)=> {
                    if(user.userId === action.payload.userId){
                        return action.payload;
                    }
                    else {
                        return user;
                    }
                })
            }
        case USER_ACTION_TYPES.DELETE_USER:
            return{
                ...state,
                userList: state.userList.filter((user)=> user.userId !== action.payload.userId)
            }
        case USER_ACTION_TYPES.GET_USERS:
            return {
                ...state,
                userList:action.payload,
            }     
     default:
         return state;
    }

 }

 export default UserReducer;
 