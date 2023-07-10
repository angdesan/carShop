import {TYPES_AUTH} from './../constants/types'

//let user = localStorage.getItem("currentUser")? JSON.parse(localStorage.getItem("currentUser")).user: "";
let user = localStorage.getItem('currentUser')? localStorage.getItem('currentUser') : '';
let token = localStorage.getItem("auth_token")? localStorage.getItem("auth_token") : "";

export const initial_auth_state = {
    user: "" || user,
    token: "" || token,
    isAuthenticated: user==="" && token===""? false: true,
    loading: false,
    error: null
}

export const authReducer = (initialState, action) => {
    switch (action.type) {
      case TYPES_AUTH.REQUEST_LOGIN:
        return {
          ...initialState,
          loading: true
        };
      case TYPES_AUTH.LOGIN_SUCCESS:
        return {
          ...initialState,
          user: action.payload.user,
          token: action.payload.auth_token,
          isAuthenticated: true,
          loading: false
        };
      case TYPES_AUTH.LOGOUT:
        return {
          ...initialState,
          user: "",
          token: "",
          isAuthenticated: false
        };
   
      case TYPES_AUTH.LOGIN_ERROR:
        return {
          ...initialState,
          loading: false,
          errorMessage: action.error,
          isAuthenticated: false
        };
   
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  };