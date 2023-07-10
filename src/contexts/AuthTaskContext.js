import { createContext, useContext, useReducer } from "react";
import {initial_auth_state,authReducer} from './../reducers/authTaskReducer'
import {TYPES_AUTH} from './../constants/types'
import {login} from './../crud/authRequest'
export const AuthContext = createContext();
const AuthDispatchContext = createContext();

export function useAuthState() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuthState must be used within a AuthProvider");
    }   
    return context;
}
export function useAuthDispatch() {
    const context = useContext(AuthDispatchContext);
    if (context === undefined) {
        throw new Error("useAuthDispatch must be used within a AuthProvider");
    }

    return context;
}

export const requestLogin = async (dispatch, data) =>{
    try{
        dispatch({type: TYPES_AUTH.REQUEST_LOGIN, payload: true });
        let response = await login(data);
        if(response){
            let login = {
                user: response.data.idUser,
                auth_token: response.data.token
            }
            dispatch({ type: TYPES_AUTH.LOGIN_SUCCESS, payload: login });
            localStorage.setItem('currentUser',login.user);
            localStorage.setItem('auth_token', login.auth_token);
            return response
        }
    }
    catch(err){
        let errorMessage = err.response.data;
        dispatch({ type: TYPES_AUTH.LOGIN_ERROR, error: errorMessage.error });
        return errorMessage;
    }
}
export const logout = async(dispatch) =>{
    dispatch({type: TYPES_AUTH.LOGOUT});
    // localStorage.removeItem('CurrentUser');
    // localStorage.removeItem('token');
    localStorage.clear();
}

export const AuthProvider = ({children}) =>{
    const [user, dispatch] = useReducer(authReducer, initial_auth_state);

    return (
        <AuthContext.Provider value={user}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext);
}

