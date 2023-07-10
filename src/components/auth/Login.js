import { useContext, useEffect, useState } from 'react';
import {Input} from "./Input";
import {FormAction} from './FormAction';
import {FormExtra} from './FormExtra';
import { loginFields } from '../../constants/FormFields';
import { requestLogin, logout, useAuthDispatch, useAuthState} from './../../contexts/AuthTaskContext'
import { redirect } from 'react-router';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export function Login(){
    const dispatch = useAuthDispatch();
    const state = useAuthState();
    const navigate = useNavigate();
    const [loginState,setLoginState]=useState(fieldsState);

    useEffect(()=>{
        if(state.isAuthenticated == true){
            doLogin();
        }
    },[])


    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }


    const handleSubmit= async (e)=>{
        e.preventDefault();
        const correo = loginState['email-address']
        const password = loginState['password']
        let payload ={
            correo: correo,
            password: password
        }
        try{
            let response = await requestLogin(dispatch,payload);
            if(response.error != null) {
                toast.error(response.error);
                setLoginState(fieldsState);

            }else{
                console.log(response.message)
                doLogin();
            }
        }catch(err){
            console.log("ERROR_LOGIN",err);
        }

    }

    const doLogin = () =>{
        navigate('../cargando', {replace: true})
    }
    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="-space-y-px">
                {
                    fields.map(field=>
                            <Input
                                key={field.id}
                                handleChange={handleChange}
                                value={loginState[field.id]}
                                labelText={field.labelText}
                                labelFor={field.labelFor}
                                id={field.id}
                                name={field.name}
                                type={field.type}
                                isRequired={field.isRequired}
                                placeholder={field.placeholder}
                        />
                    
                    )
                }
            </div> 
            <FormExtra/>
            <FormAction text="Login" disabled={state.loading}/>
            <ToastContainer />

      </form>
    )
}