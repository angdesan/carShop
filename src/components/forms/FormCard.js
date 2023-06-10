import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
export const FormCard = ()=>{
    const initialValues = {
        nombreCliente: '',
        email: '',
        numeroContacto: '',
        tipoIdentificacion: '',
        identificacion: ''
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
        
        if(!values.tipoIdentificacion){
            errors.tipoIdentificacion = 'El numero de identificación es requerido'
        }
        
        if(!values.identificacion){
            errors.identificacion = 'El tipo de indetificación es requerido'
        }

        return errors;
    }

    return(
        <Formik 
            initialValues={initialValues}
            validate={validationForm}
            onSubmit={handleSubmit}>
            
            {(formikProps)=>(

            <form className="max-w-full mx-3 px-3">
                <div className="mb-4 grid grid-cols-2 gap-4">
                    <div className='grid grid-rows-2'>        
                        <label htmlFor='nameOfClient' className=" font-bold">Nombre del cliente: <span class="text-red-500">*</span></label>
                        <Field type="text" id="nombreCliente" name="nombreCliente" className="w-full px-3 pb-2 border rounded"/>
                        <ErrorMessage name="nombreCliente" component="small"  className="text-red-500"/>
                    </div>
                    <div className='grid grid-rows-2'>
                        <label htmlFor='email' className="font-bold">Correo electrónico: <span class="text-red-500">*</span></label>
                        <Field type="text" id="email" name="email" className="w-full px-3 pb-2 border rounded"/>
                        <ErrorMessage name="email" component="small" className="text-red-500"/>

                    </div>
                    <div className='grid grid-rows-2'>
                        <label htmlFor='tipoIdentificacion' className="font-bold">Tipo de identificación: <span class="text-red-500">*</span></label>
                        <Field type="text" id="tipoIdentificacion" name="tipoIdentificacion" className="w-full px-3 pb-2 border rounded"/>
                        <ErrorMessage name="tipoIdentificacion" component="small" className="text-red-500"/>

                    </div>
                    <div className='grid grid-rows-2'>
                        <label htmlFor='indetificacion' className="font-bold">Identificación: <span class="text-red-500">*</span></label>
                        <Field type="text" id="identificacion" name="identificacion" className="w-full px-3 pb-2 border rounded"/>
                        <ErrorMessage name="identificacion" component="small" className="text-red-500"/>
                    </div>
                </div>
                
                    
                <div className='flex justify-end'>
                    <button type='submit' 
                    className="bg-slate-500 text-white py-2 px-4 rounded mt-4 hover:bg-slate-700"
                    onClick={(e)=>{
                        if(!formikProps.isValidating){
                            formikProps.handleSubmit(e)
                        }
                    }}>Siguiente</button>
                </div>
            </form>
            )}
            
        </Formik>
    )

}