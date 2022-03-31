import { Reducer } from "redux";
import { AUTH_ACTION_TYPES } from "../actions/authActions";
import { Action } from "../models/action";
import AuthState from "../models/auth";


const initialState= {
    isLoggedIn:false,
}

const AuthReducer : Reducer<AuthState,Action> = (state = initialState ,action) : AuthState => {
    switch(action.type){
        case AUTH_ACTION_TYPES.LOGIN:
            return {
                ...state,
                ...(!action.error ? {
                   
                    isLogginIn :true,
                }:{
                    errorCount: state.errorCount ? state.errorCount + 1 : 1,
                })
            }
        case AUTH_ACTION_TYPES.LOGOUT:
            return {
                ...state,
                isLoggedIn:false,
                
            }
        case AUTH_ACTION_TYPES.REGISTER:
            return {
                ...state,
                ...(!action.error ? {
                    userName:action.payload.name,
                    password:action.payload.password,
                }:{})
            }
        default:
            return state;    
    }
}

export default AuthReducer;