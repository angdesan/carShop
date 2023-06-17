import React from 'react';
import Navbar from '../navbar/Navbar';
import { ContainerWizard } from '../wizard/ContainerWizard';

export const AgregarOrden = () =>{
    return (
        <div>
            <Navbar/>
            <div className='p-4 sm:ml-64'>
                <ContainerWizard/>                
            </div>
        </div>
    )
}