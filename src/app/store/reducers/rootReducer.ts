import { AnyAction, CombinedState, combineReducers } from "redux";
import { AUTH_ACTION_TYPES } from "../actions/authActions";
import AuthState from "../models/auth";
import UserState from "../models/user";
import AuthReducer from "./authReducer";
import UserReducer from "./userReducer";






export interface RootState {
    auth: AuthState,
    user: UserState,
}


const appReducer =  combineReducers<RootState>({
    auth: AuthReducer,
    user: UserReducer,
});

const rootReducer = (state: CombinedState<RootState> | undefined,action: AnyAction) => 
    appReducer(
        action.type === AUTH_ACTION_TYPES.LOGOUT ? undefined :state,action
        );

export default rootReducer;