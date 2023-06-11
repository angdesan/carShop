import React, {useState} from 'react'
import { StepperContext } from '../../contexts/StepperContext'
import { Stepper } from './Stepper'
import { StepperControl } from './StepperControl'
import Cliente from './steps/Cliente'
import Vehiculo from './steps/Vehiculo'
import Servicios from './steps/Servicios'
import { steps } from '../../constants/constantes'
import { FinalStep } from './steps/FinalStep'
import { FormContextProvider } from '../../contexts/FormContextProvider'
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
    const handleClick = (direction)=>{
        let newStep = currentStep;
        direction==="next"?newStep++: newStep--;
        newStep >0 && newStep<= steps.length && setCurrentStep(newStep);
    }
    return (
        <div className='md:w-3/4 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
            <div className='container horizontal mt-5'>
                <Stepper 
                steps={steps}
                currentStep={currentStep}
                />
                {/* Display components */}
                <div className='my-10 p-10 '>
                    <FormContextProvider>
                        {displaySteps(currentStep)}
                    </FormContextProvider>
                </div>
            </div>
            {/* Display control */}
            {currentStep !== steps.length && 
            <StepperControl 
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}/> }
        </div>
    )
}
