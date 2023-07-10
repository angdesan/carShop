import { createContext, useContext, useReducer } from "react";
import { initial_orden_task, ordenTaskReducer, TYPES } from './../reducers/ordenTaskReducer'
import { createOrden, getOrdenes, getOrden, deleteOrden, updateOrden } from './../crud/ordenCrud'
export const OrdenContext = createContext();
const OrdenDispatchContext = createContext();

export function useOrdenState() {
  const context = useContext(OrdenContext);
  if (context === undefined) {
      throw new Error("useOrdenState must be used within a AuthProvider");
  }   
  return context;
}
export function useOrdenDispatch() {
  const context = useContext(OrdenDispatchContext);
  if (context === undefined) {
      throw new Error("useOrdenDispatch must be used within a AuthProvider");
  }

  return context;
}

export const fetchOrden = async (token,user,dispatch) => {
  try {
    dispatch({ type: TYPES.SET_LOADING, payload: true });
    const ordenes = await getOrdenes(token,user);
    if(ordenes){
      dispatch({ type: TYPES.SET_ORDENES, payload: ordenes });
      return ordenes;
    } 
  } catch (error) {
    let errorMessage = error.response.data
    dispatch({ type: TYPES.SET_ERROR, payload: errorMessage });
    return errorMessage
  }
};

export const selectOrden = async (itemId,token,dispatch) => {
  try {
    dispatch({ type: TYPES.SET_LOADING, payload: true });
    const orden = await getOrden(itemId,token);
    if(orden){
      dispatch({ type: TYPES.SET_SELECTED_ORDEN, payload: orden });
      return {orden:orden, error: null};
    }
  } catch (error) {
    let errorMessage = error.response.data
    dispatch({ type: TYPES.SET_ERROR, payload: errorMessage });
    return errorMessage
  }
};

export const addOrden = async (itemData,token,user,dispatch) => {
  try {
    dispatch({ type: TYPES.SET_LOADING, payload: true });
    const newOrden = await createOrden(itemData,token,user);
    if(newOrden){
      dispatch({ type: TYPES.ADD_ORDEN, payload: newOrden });
      return newOrden;
    }
  } catch (error) {
    let errorMessage = error.response.data
    dispatch({ type: TYPES.SET_ERROR, payload: errorMessage });
    return errorMessage;
  }
};

export const updatedOrden = async (dispatch,itemId, itemData) => {
  try {
    dispatch({ type: TYPES.SET_LOADING, payload: true });
    const editarOrden = await updateOrden(itemId, itemData);
    if(editarOrden){
      dispatch({ type: TYPES.UPDATE_ORDEN, payload: editarOrden });
      return editarOrden;
    }else {
      let errorMessage = editarOrden.response.data
      dispatch({ type: TYPES.SET_ERROR, payload: errorMessage });
      return errorMessage;
    }
  } catch (error) {
    dispatch({ type: TYPES.SET_ERROR, payload: error.message });
  }
};

export const deletedOrden = async (dispatch,itemId) => {
  try {
    dispatch({ type: TYPES.SET_LOADING, payload: true });
    const eliminarOrden = await deleteOrden(itemId);
    if(eliminarOrden){
      dispatch({ type: TYPES.DELETE_ORDEN, payload: itemId });
      return eliminarOrden
    }else {
      let errorMessage = eliminarOrden.response.data
      dispatch({ type: TYPES.SET_ERROR, payload: errorMessage });
      return errorMessage;
    }
  } catch (error) {
    dispatch({ type: TYPES.SET_ERROR, payload: error.message });
  }
};

export function OrdenTaskProvider({ children }) {
  const [state, dispatch] = useReducer(ordenTaskReducer, initial_orden_task);
  return (
    <OrdenContext.Provider value={state}>
      <OrdenDispatchContext.Provider value = {dispatch}>
        {children}
      </OrdenDispatchContext.Provider>
    </OrdenContext.Provider>
  )

  

}

export function useOrdenes() {
  return useContext(OrdenContext);
}