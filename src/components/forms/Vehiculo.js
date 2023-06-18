import React,  {useRef, useEffect} from 'react'
import { Formik, Field, ErrorMessage } from 'formik'
import { useFormContext } from './../../contexts/FormContextProvider';

export default function Vehiculo() {
  const { userData, setUserData, errors, setErrors } = useFormContext();
  const firstFieldRef = useRef(null);
  const initialValues = {
    marca: userData['marca']? userData['marca']: '',
    modelo: userData['modelo']? userData['modelo']: '',
    placa: userData['placa']?userData['placa']:'',
    nivTanqGas: userData['nivTanqGas']?userData['nivTanqGas']: '',
    detallesVehiculo: userData['detallesVehiculo']?userData['detallesVehiculo']:''
  }
  useEffect(() => {
    if (firstFieldRef.current) {
      firstFieldRef.current.focus();
    }
  }, []);
  const handleSubmit = (values) =>{
    console.log(values)
    
  }
  const validationForm = (values)=>{
    const errors = {}
  
    if (!values.marca) {
        errors.marca = 'La marca del vehículo es requerida';
    }
  
    if (!values.modelo) {
        errors.modelo = 'El modelo del vehículo es requerido';
    }
    if (!values.placa) {
      errors.placa = 'La placa del vehículo es requerida';
    }
    
    if(!values.nivTanqGas){
        errors.nivTanqGas = 'El nivel del tanque de gasolina es requerido'
    }
    setErrors(errors);
    return errors;
  }
  return (
    <Formik
      initialValues={initialValues}
      validate={validationForm}
      onSubmit={handleSubmit}>

      {(formikProps) => (

        <form className="max-w-full mx-3 px-3">
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className='grid grid-rows-2'>
              <label htmlFor='marca' className=" font-bold">Marca del vehículo: <span className="text-red-500">*</span></label>
              <Field type="text" id="marca" name="marca" innerRef={firstFieldRef} className="w-full px-3 pb-2 border rounded" onChange={(e) => {
                formikProps.handleChange(e);
                setUserData({ ...userData, [e.target.name]: e.target.value });
              }} />
              <ErrorMessage name="marca" component="small" className="text-red-500" />
            </div>
            <div className='grid grid-rows-2'>
              <label htmlFor='modelo' className="font-bold">Modelo del vehículo: <span className="text-red-500">*</span></label>
              <Field type="text" id="modelo" name="modelo" className="w-full px-3 pb-2 border rounded" onChange={(e) => {
                formikProps.handleChange(e);
                setUserData({ ...userData, [e.target.name]: e.target.value });
              }} />
              <ErrorMessage name="modelo" component="small" className="text-red-500" />

            </div>
            <div className='grid grid-rows-2'>
              <label htmlFor='placa' className="font-bold">Placa del vehículo: <span className="text-red-500">*</span></label>
              <Field type="text" id="placa" name="placa" className="w-full px-3 pb-2 border rounded" onChange={(e) => {
                formikProps.handleChange(e);
                setUserData({ ...userData, [e.target.name]: e.target.value.toUpperCase() });
              }} />
              <ErrorMessage name="placa" component="small" className="text-red-500" />

            </div>
            <div className='grid grid-rows-2'>
              <label htmlFor='nivTanqGas' className="font-bold">Nivel de gasolina: <span className="text-red-500">*</span></label>
              <Field type="text" id="nivTanqGas" name="nivTanqGas" className="w-full px-3 pb-2 border rounded" onChange={(e) => {
                formikProps.handleChange(e);
                setUserData({ ...userData, [e.target.name]: e.target.value });
              }} placeholder="cantidad en galones"/>
              <ErrorMessage name="nivTanqGas" component="small" className="text-red-500" />
            </div>
            <div className='grid grid-rows-2'>
              <label htmlFor='detallesVehiculo' className="font-bold">Detalles del vehiculo: <span className="text-red-500">*</span></label>
              <Field type="text" id="detallesVehiculo" name="detallesVehiculo" className="w-full px-3 pb-2 border rounded" onChange={(e) => {
                formikProps.handleChange(e);
                setUserData({ ...userData, [e.target.name]: e.target.value });
              }} />
              <ErrorMessage name="detallesVehiculo" component="small" className="text-red-500" />
            </div>
          </div>


          {/* <div className='flex justify-end'>
                    <button type='submit' 
                    className="bg-slate-500 text-white py-2 px-4 rounded mt-4 hover:bg-slate-700"
                    onClick={(e)=>{
                        if(!formikProps.isValidating){
                            formikProps.handleSubmit(e)
                        }
                    }}>Siguiente</button>
                </div> */}
        </form>
      )}

    </Formik>
  )
}
