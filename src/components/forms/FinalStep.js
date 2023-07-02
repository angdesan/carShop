import React from 'react'
import { useFormContext } from './../../contexts/FormContextProvider'
import {useOrdenes} from './../../contexts/OrdenTaskContext'
export function FinalStep() {
    const {userData, setUserData, finalData} = useFormContext();
    const {ordenes, addOrden} = useOrdenes();
    console.log("Form finalizado: ",userData);

    const handleOnClick = () =>{
        let data = {
            ...userData,
            servicios: finalData
        }
        addOrden(data);


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
                <a className='mt-10' href='/'>
                    <button className='h-10 px-5 text-green-700 transition-colors
                    duration-150 border border-gray-300 rounded-lg
                    focus: shadow-out-line hover:bg-green-500 hover:text-green-100' onClick={handleOnClick}>
                        Guardar
                    </button>
                </a>
            </div>
        </>
        
    )
//   return (
//     <div className='container md:mt-10'>
//         <div className='flex flex-col items-center'>
//             <div className='text-green-400'>
//                 {/* imagen */}
//             </div>
//             <div className='mt-3 text-xl font-semibold uppercase text-green-500'>
//                 Felicitaciones!
//             </div>
//             <div className='text-lg font-semibold text-gray-500'>
//                 Ha generado su compra con éxito!
//             </div>
//             <a className='mt-10' href='/'>
//                 <button className='h-10 px-5 text-green-700 transition-colors
//                 duration-150 border border-gray-300 rounded-lg
//                 focus: shadow-out-line hover:bg-green-500 hover:text-green-100'>
//                     Close
//                 </button>
//             </a>
//         </div>

//     </div>
//   )
}
