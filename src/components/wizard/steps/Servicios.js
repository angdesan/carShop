import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useFormContext } from '../../../contexts/FormContextProvider';
import { services } from '../../../constants/constantes';

export default function Servicios() {
  const { userData, setUserData, errors, setErrors } = useFormContext();
  const handleSubmit = (values) =>{
    console.log(values)
  }
  const validationForm = (values)=>{
    const errors = {}
    if(values.checked.length<1){
      errors.checked = 'Debe seleccionar al menos un servicio';
    }
  }

  return (
    <Formik
    initialValues={{checked:[]}}
    onSubmit={handleSubmit}
    validate={validationForm}>
      {(formikProps)=>(
        <form className="max-w-full mx-3 px-3">
          <div className="mb-4 grid grid-cols-2 gap-4">
              {services.map((s)=>(
                <div className='grid grid-rows-2' key={s}>
                  <label htmlFor={s} className='font-semibold'>
                    <Field type='checkbox' name='checked' value={s} className='m-1' style={{width: "20px",height: "20px"} }/>
                    {s}
                  </label>
                </div>
              ))}
          </div>
        </form>
      )}
    </Formik>
  )
}
