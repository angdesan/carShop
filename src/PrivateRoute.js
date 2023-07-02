import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({element: Component, ...rest}) =>{
    const auth = (rest.isAuthenticated)? true: false;

    return auth? <Outlet/>: <Navigate to='/'/>
}