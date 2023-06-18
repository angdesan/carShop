import React, {useRef, useEffect} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useFormContext } from '../../contexts/FormContextProvider';
import { tipoIdentificacion } from '../../constants/constantes';

export default function Cliente() {
  const { userData, setUserData, errors, setErrors } = useFormContext();
  const firstFieldRef = useRef(null);

  useEffect(() => {
    if (firstFieldRef.current) {
      firstFieldRef.current.focus();
    }
  }, []);
  const initialValues = {
    nombreCliente: userData['nombreCliente']?userData['nombreCliente']: '',
    email: userData['email']? userData['email']: '',
    numeroContacto: userData['numeroContacto']?userData['numeroContacto']:'',
    tipoIdentificacion: userData['tipoIdentificacion']?userData['tipoIdentificacion']: '',
    identificacion: userData['identificacion']?userData['identificacion']:''
}
const handleSubmit = (values) =>{
    console.log(values)
    
}
const validationForm = (values)=>{
  const errors = {}

  if (!values.nombreCliente) {
      errors.nombreCliente = 'El nombre es requerido';
  }

  if (!values.email) {
      errors.email = 'El email es requerido';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Dirección de correo electrónico inválida';
  }
  if(!values.numeroContacto){
    errors.numeroContacto = 'El número de contacto es requerido'
  }else if(!isNaN(values.numerContacto)) errors.numeroContacto = 'El valor ingresado debe ser un número celular válido'
  
  if(!values.tipoIdentificacion){
      errors.tipoIdentificacion = 'El tipo de indetificación es requerido' 
  }
  
  if(!values.identificacion){
      errors.identificacion = 'El numero de identificación es requerido'
  }
  setErrors(errors);
  return errors;
}

  return (
    <Formik 
            initialValues={initialValues}
            validate={validationForm}
            onSubmit={handleSubmit}>
            
            {(formikProps)=>(

            <form className="max-w-full mx-3 px-3">
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div className='grid grid-rows-2'>        
                        <label htmlFor='nameOfClient' className=" font-bold">Nombre del cliente: <span className="text-red-500">*</span></label>
                        <Field type="text" id="nombreCliente" innerRef={firstFieldRef} name="nombreCliente" className="w-full px-3 pb-2 border rounded" onChange={(e)=>{
                          formikProps.handleChange(e);
                          setUserData({ ...userData, [e.target.name]: e.target.value });
                        }}/>
                        <ErrorMessage name="nombreCliente" component="small"  className="text-red-500"/>
                    </div>
                    <div className='grid grid-rows-2'>
                        <label htmlFor='email' className="font-bold">Correo electrónico: <span className="text-red-500">*</span></label>
                        <Field type="text" id="email" name="email" className="w-full px-3 pb-2 border rounded" onChange={(e)=>{
                          formikProps.handleChange(e);
                          setUserData({ ...userData, [e.target.name]: e.target.value });
                        }}/>
                        <ErrorMessage name="email" component="small" className="text-red-500"/>

                    </div>
                    <div className='grid grid-rows-2'>
                        <label htmlFor='numeroContacto' className="font-bold">Número de contacto: <span className="text-red-500">*</span></label>
                        <Field type="number" id="numeroContacto" name="numeroContacto" className="w-full px-3 pb-2 border rounded" onChange={(e)=>{
                          formikProps.handleChange(e);
                          setUserData({ ...userData, [e.target.name]: e.target.value });
                        }}/>
                        <ErrorMessage name="numeroContacto" component="small" className="text-red-500"/>

                    </div>
                    <div className='grid grid-rows-2'>
                        <label htmlFor='tipoIdentificacion' className="font-bold">Tipo de identificación: <span className="text-red-500">*</span></label>
                        <Field as="select" id="tipoIdentificacion" name="tipoIdentificacion" className="w-full px-3 pb-2 border rounded" onChange={(e)=>{
                          formikProps.handleChange(e);
                          setUserData({ ...userData, [e.target.name]: e.target.value });
                        }}>
                          {tipoIdentificacion?.map((tip)=>(
                            <option key={tip} value={tip}>{tip}</option>
                          ))}
                        </Field>
                        <ErrorMessage name="tipoIdentificacion" component="small" className="text-red-500"/>

                    </div>
                    <div className='grid grid-rows-2'>
                        <label htmlFor='indetificacion' className="font-bold">Identificación: <span className="text-red-500">*</span></label>
                        <Field type="text" id="identificacion" name="identificacion" className="w-full px-3 pb-2 border rounded" onChange={(e)=>{
                          formikProps.handleChange(e);
                          setUserData({ ...userData, [e.target.name]: e.target.value });
                        }}/>
                        <ErrorMessage name="identificacion" component="small" className="text-red-500"/>
                    </div>
                </div>
            </form>
            )}
            
        </Formik>
  )
}
