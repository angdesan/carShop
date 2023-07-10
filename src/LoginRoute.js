import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'


export const LoginRoute = ({isAuthenticated, token}) =>{

    const auth = isAuthenticated && token!== ""? true: false

    return auth? <Navigate to={'/cargando'} /> : <Outlet/>
}