 import { FormCard } from "../components/forms/FormCard";
 export const menu = [
    {
        id: '1',
        name: 'Dashboard',
        svg: {
            class: 'w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white',
            path_d1: 'M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z',
            path_d2: 'M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'
        }
    },{
        id: '2',
        name: 'Generar orden',
        svg:{
            class: 'flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white',
            path_d1: 'M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
        }
    },{
        id: '3',
        name: 'Profile',
        svg:{
            class: 'flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white',
            path_d1: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
        }
    }
 ]

 export const tabsHeader = [
    {
        id: '1',
        name: 'Datos Cliente'
    },{
        id: '2',
        name:
        'Datos Vehículo'
    },{
        id: '3',
        name: 'Servicios'
    }
 ]
 export const tabs = [
  { title: "Datos Cliente", component: <FormCard/> },
  { title: "Datos Vehículo", component: <div>Contenido del Datos Vehículo</div> },
  { title: "Servicios", component: <div>Contenido del Servicios</div> },
];
export const steps = [
    'Información del cliente',
    'Información del vehículo',
    'Servicios',
    'Fin de compra'
]
export const services = [
    'Cambio de aceite',
    'Cambio de frenos',
    'Alineación y balanceo',
    'Diagnóstico general',
    'Revisión de sistema eléctrico',
    'Revisión de la suspensión',
]