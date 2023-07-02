export const initial_orden_task = {
    ordenes: [],
    selectedOrden: null,
    loading: false,
    error: null
}

export const TYPES = {
    SET_ORDENES: 'SET_ORDENES',
    SET_SELECTED_ORDEN: 'SET_SELECTED_ORDEN',
    ADD_ORDEN: 'ADD_ORDEN',
    UPDATE_ORDEN: 'UPDATE_ORDEN',
    DELETE_ORDEN: 'DELETE_ORDEN',
    SET_LOADING: 'SET_LOADING',
    SET_ERROR: 'SET_ERROR',
  };

export function ordenTaskReducer(state, action){
    switch (action.type){
        case TYPES.SET_ORDENES: {
            return {
                ...state,
                ordenes: action.payload,
                loading: false,
                error:null
            }
        }
        case TYPES.SET_SELECTED_ORDEN: {
            return {
                ...state,
                selectedOrden: action.payload,
                loading: false,
                error:null
            }
        }
        case TYPES.ADD_ORDEN:{
            return {
                ...state,
                ordenes: [...state.ordenes, action.payload],
                loading: false,
                error: null,
              }
        }
        case TYPES.UPDATE_ORDEN:{
            return {
                ...state,
                ordenes: state.ordenes.map((orden)=>
                    orden.id === action.payload.id? action.payload: orden
                ),
                loading: false,
                error: null
            }
        }
        case TYPES.DELETE_ORDEN:{
            return {
                ...state,
                ordenes: state.ordenes.filter((item) => item.id !== action.payload),
                loading: false,
                error: null,
              }
        }
        case TYPES.SET_LOADING:{
            return  {
                ...state,
                loading: action.payload,
              }
        }
        case TYPES.SET_ERROR:{
            return {
                ...state,
                error: action.payload,
                loading: false,
              };
        }
        default:
            return state
    }
}