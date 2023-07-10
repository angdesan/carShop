import React from 'react';

const OrdenModal = ({ onClose, orden }) => {
    console.log(orden);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-75"></div>
      <div className="bg-white rounded-lg shadow-lg p-6 relative">
        <h2 className="text-2xl font-semibold mb-4">Detalle de la orden</h2>
        {/* Agrega aquí el contenido adicional del modal */}
        <button
          className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className='mb-4'>
            <h2 className='text-lg font-bold mb-2'>Datos personales</h2>
            <p className='mb-2'><span className='font-semibold'>Nombre: </span>{orden[0].cliente.nombre}</p>
            <p className='mb-2'><span className='font-semibold'>Correo electrónico: </span>{orden[0].cliente.correo}</p>
            <p className='mb-2'><span className='font-semibold'>tipo de identificación: </span>{orden[0].cliente.tipoIdentificacion}</p>
            <p className='mb-2'><span className='font-semibold'>Número identificación: </span>{orden[0].cliente.identificacion}</p>
        </div>
        <hr className="my-4 border-gray-400" /> 
        <div>
            <h2 className='text-lg font-bold mb-2'>Datos del vehículo</h2>
            <p className='mb-2'><span className='font-semibold'>Marca: </span>{orden[0].vehiculo.marca}</p>
            <p className='mb-2'><span className='font-semibold'>Modelo: </span>{orden[0].vehiculo.modelo}</p>
            <p className='mb-2'><span className='font-semibold'>placa: </span>{orden[0].vehiculo.placa}</p>
            <p className='mb-2'><span className='font-semibold'>Nivel del tanque: </span>{orden[0].vehiculo.nivTanqGas}</p>
            <p className='mb-2'><span className='font-semibold'>Detalles adicionales: </span>{orden[0].vehiculo.detallesVehiculo}</p>
        </div>
        <hr className="my-4 border-gray-400" /> 
        <div>
            <h2 className='text-lg font-bold mb-2'>Servicios Elegidos</h2>
            <ul>
                {orden[0].servicios.map((service,index)=>(
                    <li className='mb-2' key={service}><span>{service}</span></li>    
                ))}
            </ul>
        </div>
        <button
          className="px-4 py-2 mt-4 text-sm text-gray-100 bg-gray-500 rounded shadow"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default OrdenModal;
