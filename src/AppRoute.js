import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/menu/Dashboard';
import Profile from './components/menu/Profile';
import { AgregarOrden } from './components/menu/AgregarOrden';
import {LoginPage} from './components/login/Login'
import {SignupPage}  from './components/signup/Signup'
import {useAuthState} from './contexts/AuthTaskContext'
import { LoginRoute } from './LoginRoute';
import { Logout } from './components/auth/Logout';
import {PrivateRoute} from './PrivateRoute'
import React from 'react'
import Cargando from './Cargando';
import { OrdenTaskProvider } from './contexts/OrdenTaskContext';
import VerOrdenes from './components/menu/VerOrdenes';

export default function AppRoute() {
    const state = useAuthState();
  return (
    <OrdenTaskProvider>
        <Routes>
            
            <Route path='/' element={<LoginRoute isAuthenticated = {state.isAuthenticated} token = {state.token} />} >
                <Route path='/' element={<LoginPage/>}/>
            </Route>
            <Route path='/logout' element={<Logout/>}/>
            {/* ruta de logout */}
            
            <Route path='/cargando' element={<PrivateRoute isAuthenticated={state.isAuthenticated}/>} >
              <Route path='/cargando' element={<Cargando/>}/>
            </Route>
            
            <Route path='/dashboard' element={<PrivateRoute isAuthenticated={state.isAuthenticated}/>} >
              <Route path='/dashboard' element={<Dashboard/>}/>
            </Route>

            <Route path='/generarOrden' element={<PrivateRoute isAuthenticated={state.isAuthenticated}/>}>
              <Route path='/generarOrden' element={<AgregarOrden/>}/>
            </Route>

            <Route path='/profile' element={<PrivateRoute isAuthenticated={state.isAuthenticated}/>} >
              <Route path='/profile' element={<Profile/>}/>
            </Route>

            <Route path='/ordenes' element={<PrivateRoute isAuthenticated={state.isAuthenticated}/>} >
              <Route path='/ordenes' element={<VerOrdenes/>}/>
            </Route>

            <Route path='/signup' element={<SignupPage/>}/>
            
        </Routes>

    </OrdenTaskProvider>
  )
}
