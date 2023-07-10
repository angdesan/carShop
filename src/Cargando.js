import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useOrdenDispatch, fetchOrden, useOrdenState} from './contexts/OrdenTaskContext'
import { logout } from './contexts/AuthTaskContext';
import loader from './images/loader.gif';
export default function Cargando() {
    const navigate = useNavigate();
    const dispatch = useOrdenDispatch();
    const state = useOrdenState();
    const token = localStorage.getItem('auth_token');
    const user = localStorage.getItem('currentUser');
    const token2 = state.token;

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                console.log(token2);
                let response = await fetchOrden(token,user,dispatch);
                navigate('/dashboard',{replace: true});

            } catch(error){
                logout(dispatch);
                navigate('/', {replace: true});
            }
        }
        fetchData();
    }, [])

    return (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-4">Cargando...</h1>
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
          </div>
        </div>
      );
}
