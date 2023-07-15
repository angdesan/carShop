import { useState } from 'react';
import { signupFields } from "../../constants/FormFields"
import {FormAction} from "./FormAction";
import {Input} from "./Input";
import { register } from '../../crud/authRequest';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

export  function Signup(){
  const [signupState,setSignupState]=useState(fieldsState);
  const navigate = useNavigate();
  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit= async (e)=>{
    e.preventDefault();
    const nombre = signupState['nombre'];
    const correo = signupState['email-address'];
    const password = signupState['password'];
    const confirmPassword = signupState['confirm-password'];
    if(password!==confirmPassword){
      toast.error("Las contraseñas no coinciden");
    }else{
      let payload ={
        nombre: nombre,
        correo: correo,
        password: password
      }
      try{
        let response = await register(payload);
        if(response){
          doLogin();
        }
      }catch(error){
        console.log("ERROR_SIGNUP", error.response.data);
        setSignupState(fieldsState);
        toast.error(error.response.data.error);
      }
    }
  }
  const doLogin = () =>{
    navigate('/', {replace: true})
  }

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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
          <FormAction handleSubmit={handleSubmit} text="Signup" />
          <ToastContainer />
        </div>

         

      </form>
    )
}