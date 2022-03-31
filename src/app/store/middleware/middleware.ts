import { Dispatch } from "react";

const isPromise = (val:any) => val && typeof val.then === 'function';

// eslint:disable-next-line: no-any

interface DispatchProps {
    dispatch: Dispatch<{}>
}
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ dispatch }:DispatchProps) => (next:any)=> async (action:any) => {
    if(!isPromise(action.payload)) {
        return next(action);
    }
    if(!action.payload) {
        return;
    }
    try {
        const response = await action.payload;
    
    return dispatch({
        ...action,
        payload:response.data,
        error:false,
    })   
    } catch(error) {
        window.console.log(action.type,JSON.parse(JSON.stringify(error)));
        return dispatch({
            ...action,
            payload: undefined,
            error,
          });
     
    }
};