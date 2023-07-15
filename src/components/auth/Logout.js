import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout, useAuthDispatch } from '../../contexts/AuthTaskContext'
export const Logout = () =>{
    const navigate = useNavigate()
    const dispatch = useAuthDispatch()

    useEffect(()=>{
        logout(dispatch);
        //navigate('/', {replace: true});
    }, []);

    return ( <div></div>)
}