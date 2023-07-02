import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'
import { useAuth } from './contexts/AuthTaskContext';


export const LoginRoute = ({element: Component, ...rest}) =>{
    const state = useAuth();

    const auth = rest.isPrivate && state.token!= ''? true: false

    return auth? <Navigate to={'/cargando'} /> : <Outlet/>
}