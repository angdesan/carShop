import { createContext, useContext, useReducer, useEffect } from "react";
import { initial_orden_task, ordenTaskReducer, TYPES } from './../reducers/ordenTaskReducer'
import { createOrden, getOrdenes, getOrden, deleteOrden, updateOrden } from './../crud/ordenCrud'
export const OrdenContext = createContext();
export const OrdenDispatchContext = createContext();

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

const fetchOrden = async (dispatch) => {
  try {
    dispatch({ type: TYPES.SET_LOADING, payload: true });
    const ordenes = await getOrdenes();
    if(ordenes){
      dispatch({ type: TYPES.SET_ORDENES, payload: ordenes });
      return ordenes;
    } else{
      let errorMessage = response.response.data
      dispatch({ type: TYPES.SET_ERROR, payload: errorMessage });
      return errorMessage;
    }
  } catch (error) {
    dispatch({ type: TYPES.SET_ERROR, payload: error });
  }
};

const selectOrden = async (dispatch,itemId) => {
  try {
    dispatch({ type: TYPES.SET_LOADING, payload: true });
    const orden = await getOrden(itemId);
    if(orden){
      dispatch({ type: TYPES.SET_SELECTED_ORDEN, payload: orden });
      return orden;
    } else{
      let errorMessage = response.response.data
      dispatch({ type: TYPES.SET_ERROR, payload: errorMessage });
      return errorMessage;
    }
  } catch (error) {
    dispatch({ type: TYPES.SET_ERROR, payload: error.message });
  }
};

const addOrden = async (dispatch,itemData) => {
  try {
    dispatch({ type: TYPES.SET_LOADING, payload: true });
    const newOrden = await createOrden(itemData);
    if(newOrden){
      dispatch({ type: TYPES.ADD_ORDEN, payload: newOrden });
      return newOrden;
    }else {
      let errorMessage = response.response.data
      dispatch({ type: TYPES.SET_ERROR, payload: errorMessage });
      return errorMessage;
    }
  } catch (error) {
    dispatch({ type: TYPES.SET_ERROR, payload: error.message });
  }
};

const updatedOrden = async (dispatch,itemId, itemData) => {
  try {
    dispatch({ type: TYPES.SET_LOADING, payload: true });
    const editarOrden = await updateOrden(itemId, itemData);
    if(editarOrden){
      dispatch({ type: TYPES.UPDATE_ORDEN, payload: editarOrden });
      return editarOrden;
    }else {
      let errorMessage = response.response.data
      dispatch({ type: TYPES.SET_ERROR, payload: errorMessage });
      return errorMessage;
    }
  } catch (error) {
    dispatch({ type: TYPES.SET_ERROR, payload: error.message });
  }
};

const deletedOrden = async (dispatch,itemId) => {
  try {
    dispatch({ type: TYPES.SET_LOADING, payload: true });
    const eliminarOrden = await deleteOrden(itemId);
    if(eliminarOrden){
      dispatch({ type: TYPES.DELETE_ORDEN, payload: itemId });
      return eliminarOrden
    }else {
      let errorMessage = response.response.data
      dispatch({ type: TYPES.SET_ERROR, payload: errorMessage });
      return errorMessage;
    }
  } catch (error) {
    dispatch({ type: TYPES.SET_ERROR, payload: error.message });
  }
};

export function OrdenTaskProvider({ children }) {
  const [state, dispatch] = useReducer(ordenTaskReducer, initial_orden_task);

  useEffect(() => {
    fetchOrden()
  }, []);

  return (
    <OrdenContext.Provider value={state}>
      <OrdenDispatchContext value = {dispatch}>
        {children}
      </OrdenDispatchContext>
    </OrdenContext.Provider>
  )

  

}

export function useOrdenes() {
  return useContext(OrdenContext);
}