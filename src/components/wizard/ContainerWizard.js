import React, {useState} from 'react'
import { Stepper } from './steppers/Stepper'
import { StepperControl } from './steppers/StepperControl'
import Cliente from '../forms/Cliente'
import Vehiculo from './../forms/Vehiculo'
import Servicios from './../forms/Servicios'
import { FinalStep } from './../forms/FinalStep'
import { FormContextProvider } from '../../contexts/FormContextProvider'
import { steps } from '../../constants/constantes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ContainerWizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState('');
    const [finalData, setFinalData] = useState([]);
    
    const displaySteps = (step) => {
        switch(step){
            case 1:
                return <Cliente/>
            case 2:
                return <Vehiculo/>
            case 3:
                return <Servicios/>
            case 4:
                return <FinalStep/>

        }

    }
    // const handleFinalSubmit = (values) => {
    //     handleSubmitForm(values);
    //   };
    const handleClick = (direction, errors)=>{
        let newStep = currentStep;
        direction==="next"?newStep++: newStep--;
        errors && Object.keys(errors).length>0 && toast.error('Debe Completar los campos requeridos');
        newStep >0 && newStep<= steps.length && errors && Object.keys(errors).length==0 && setCurrentStep(newStep);
        newStep >0 && newStep<= steps.length && direction!="next" && setCurrentStep(newStep);
    }

    return (
        <FormContextProvider>
            <div className='md:w-3/4 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
                <div className='container horizontal mt-5'>
                    <Stepper 
                    steps={steps}
                    currentStep={currentStep}
                    />
                    {/* Display components */}
                    <div className='my-10 p-10 '>
                        
                        {displaySteps(currentStep)}
                        
                    </div>
                </div>
                {/* Display control */}
                {currentStep !== steps.length && 
                <StepperControl 
                handleClick={handleClick}
                currentStep={currentStep}
                steps={steps}/> }
                <ToastContainer />
            </div>
        </FormContextProvider>
        
    )
}
