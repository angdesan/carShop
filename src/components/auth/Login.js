import { useContext, useState } from 'react';
import {Input} from "./Input";
import {FormAction} from './FormAction';
import {FormExtra} from './FormExtra';
import { loginFields } from '../../constants/FormFields';
import { requestLogin, logout, useAuthDispatch, useAuthState} from './../../contexts/AuthTaskContext'
import { redirect } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export function Login(){
    const dispatch = useAuthDispatch();
    const state = useAuthState();
    const [loginState,setLoginState]=useState(fieldsState);

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
            }
            // requestLogin(payload)
            // .then((response)=>{
            //     console.log('respuesta: ',response);
            // }).catch((error)=>{
            //     console.log(error);
            // });
            // if(!response.user) {
            //     console.log(response.error);
            // }
            // if(!response.user) return redirect('/dashboard')
        }catch(err){
            console.log("ERROR_LOGIN",err);
        }

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