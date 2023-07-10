import React from 'react'
import { useFormContext } from './../../contexts/FormContextProvider'
import {addOrden,useOrdenDispatch} from './../../contexts/OrdenTaskContext'
import { useAuthState } from '../../contexts/AuthTaskContext';
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';

export function FinalStep() {
    const {userData, finalData} = useFormContext();
    const dispatch = useOrdenDispatch();
    const authState = useAuthState();
    const navigate = useNavigate();
    console.log("Form finalizado: ",userData);

    const handleOnClick = async () =>{
        const {nombreCliente, email,numeroContacto,tipoIdentificacion, identificacion} = userData;
        const {marca,modelo,placa,nivTanqGas,detallesVehiculo} = userData;
        let cliente = {
            nombreCliente: nombreCliente,
            email:email,
            numeroContacto:numeroContacto,
            tipoIdentificacion:tipoIdentificacion,
            identificacion:identificacion
        }
        let vehiculo = {
            marca:marca,
            modelo:modelo,
            placa:placa,
            nivelTanqueGas:nivTanqGas,
            detalle:detallesVehiculo
        }
        let data = {
            cliente: cliente,
            vehiculo: vehiculo,
            servicios: finalData
        }
        let response = await addOrden(data,authState.token,authState.user,dispatch);
        if(response.error!=null){
            toast.error(response.error);
        }else{
            setTimeout(()=>{
                toast.done("Orden generada con exito");
            },"2000");
            navigate('/cargando',{replace: true});
            
        }



    }
    return(
        <>
            <div className='mb-4'>
                <h1 className='text-lg font-bold mb-2 text-center'>Confirmación de datos</h1>
                <h2 className='text-lg font-bold mb-2'>Datos personales</h2>
                <p className='mb-2'><span className='font-semibold'>Nombre: </span>{userData.nombreCliente}</p>
                <p className='mb-2'><span className='font-semibold'>Correo electrónico: </span>{userData.email}</p>
                <p className='mb-2'><span className='font-semibold'>tipo de identificación: </span>{userData.tipoIdentificacion}</p>
                <p className='mb-2'><span className='font-semibold'>Número identificación: </span>{userData.identificacion}</p>
            </div>
            <hr className="my-4 border-gray-400" /> 
            <div>
                <h2 className='text-lg font-bold mb-2'>Datos del vehículo</h2>
                <p className='mb-2'><span className='font-semibold'>Marca: </span>{userData.marca}</p>
                <p className='mb-2'><span className='font-semibold'>Modelo: </span>{userData.modelo}</p>
                <p className='mb-2'><span className='font-semibold'>placa: </span>{userData.placa}</p>
                <p className='mb-2'><span className='font-semibold'>Nivel del tanque: </span>{userData.nivTanqGas}</p>
                <p className='mb-2'><span className='font-semibold'>Detalles adicionales: </span>{userData.detallesVehiculo}</p>
            </div>
            <hr className="my-4 border-gray-400" /> 
            <div>
                <h2 className='text-lg font-bold mb-2'>Servicios Elegidos</h2>
                <ul>
                    {finalData.map((service,index)=>(
                        <li className='mb-2' key={index}><span>{service}</span></li>    
                    ))}
                </ul>
            </div>
            <hr className="my-4 border-gray-400" /> 
            <div>
                <p className='mb-2'><span className='font-semibold'>Fecha y hora estimada de entrega: </span>{new Date().toLocaleString()}</p>
            </div>
            <div className='flex flex-col items-center'>
                <button className='h-10 px-5 text-green-700 transition-colors
                duration-150 border border-gray-300 rounded-lg
                focus: shadow-out-line hover:bg-green-500 hover:text-green-100' onClick={handleOnClick}>
                    Guardar
                </button>
            </div>
            <ToastContainer />
        </>
        
    )
}
