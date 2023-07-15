import React, {useState} from 'react'
import { selectOrden, useOrdenDispatch, useOrdenState } from '../../contexts/OrdenTaskContext';
import Navbar from '../navbar/Navbar';
import OrdenModal from '../dialog/Orden';
import { useAuthState } from '../../contexts/AuthTaskContext';
import { ToastContainer, toast } from 'react-toastify';

export default function VerOrdenes() {
    const [open, setOpen] = useState(false);
    const [ordenSelect, setOrdenSelect] = useState(null);
    const authState = useAuthState()
    const ordenesState = useOrdenState();
    const dispatch = useOrdenDispatch();

    const handleOpen = async (orden) =>{
        try{
            const token = authState.token;

            const response = await selectOrden(orden._id,token,dispatch);
            if(response.error!== null){
                toast.error(response.error);
            }else{
                setOrdenSelect(response.orden)
                setOpen((cur) => !cur);
            }
        }catch(error){
            console.log("ERROR_GET_ORDEN", error);
        }
    }


    return (
        <>
        
        <div>
            <Navbar/>
            <div className='p-4 sm:ml-64'>
                {ordenesState.ordenes.length===0 &&(
                <div className='flex flex-col items-center'>
                    <h2 className="text-xl font-semibold mb-2">No ha realizado ninguna orden</h2>
                </div>
                )}
                {ordenesState.ordenes.length>0 && (
                    <div className="grid gap-2 lg:grid-cols-4">
                        {ordenesState.ordenes.map((items, key) => (
                            items.estadoLogico === 1 &&
                            <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={items._id}>
                                <img
                                    className="object-cover w-full h-48"
                                    src="https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png"
                                    alt="Sin imagen"
                                />
                                <div className="p-4">
                                    <h4 className="text-xl font-semibold text-blue-600">
                                        
                                        Orden No.{key+1}
                                    </h4>
                                    <p className="mb-2 leading-normal">
                                    Estado: {items.estado}
                                    </p>
                                    {items.servicios.map((service,key)=>(
                                        <ul>
                                            <li key={service}>
                                                <p className="mb-2 leading-normal">{service}</p>
                                            </li>
                                        </ul>
                                    ))}
                                    <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
                                    onClick={() => handleOpen(items)}>
                                        ver detalle
                                    </button>
                                    

                                </div>
                            </div>
                        ))}
                    </div>
                
                )}
            </div>
        </div>
        <ToastContainer />
        {open && <OrdenModal orden={ordenSelect} onClose={()=>setOpen(false)}/>}
        
        </>
    )
}
