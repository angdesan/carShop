import React from 'react';
import {LoginPage} from './../components/login/Login'
import { AgregarOrden } from '../components/menu/AgregarOrden';
import Dashboard from '../components/menu/Dashboard';
import Profile from '../components/menu/Profile';
import { SignupPage } from '../components/signup/Signup';
const routes = [
    {
        path: '/login',
        component: <LoginPage/>,
        isPrivate: false
    },
    {
        path: '/register',
        component: <SignupPage/>,
        isPrivate: false
    },
    {
        path: '/',
        component: <Dashboard/>,
        isPrivate: true

    },
    {
        path: '/generarOrden',
        component: <AgregarOrden/>,
        isPrivate: true
    },
    {
        path: '/profile',
        component: <Profile/>,
        isPrivate: true
    }
]
    

