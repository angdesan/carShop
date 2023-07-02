import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './components/menu/Dashboard';
import Profile from './components/menu/Profile';
import { AgregarOrden } from './components/menu/AgregarOrden';
import {OrdenTaskProvider} from './contexts/OrdenTaskContext'
import {LoginPage} from './components/login/Login'
import {SignupPage}  from './components/signup/Signup'
import {AuthProvider, useAuthState} from './contexts/AuthTaskContext'
import { useContext } from 'react';
import { LoginRoute } from './LoginRoute';
import { Logout } from './components/auth/Logout';
function App() {
  const state = useAuthState();
  return (
    <div className="App">
      {/* <OrdenTaskProvider>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/generarOrden'  element={<AgregarOrden/>} />
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </OrdenTaskProvider> */}
      {/* <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/signup' element={<SignupPage/>} />
        </Routes> */}
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

          <Route path='/signup' element={<SignupPage/>}/>
          
        </Routes>
    </div>
  );
}

export default App;
