# carShop
repositorio del proyecto React - Coding Bootcamps ESPOL

# Desarrollo y despliegue

## Primeros pasos utilizando Create React App

Este proyecto fue iniciado con [Create React App](https://github.com/facebook/create-react-app).

### Paso previo de ejecución

Antes de ejecutar debe instalar las librerías ubicadas en el package.json ejecutando el comando `npm install`

## Scripts disponibles

El el directorio delproyecto, usted puede ejecutar:

### `npm start`

Ejeccutar el proyecto en modo desarrollador.\
Abrir [http://localhost:3000](http://localhost:3000) para visualizar en el navegador.

La página se volverá a cargar cuando realice cambios.\
También puede ver los lint errors en la consola.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.\
Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hashes.\
¡Tu aplicación está lista para ser implementada!



### Deployment

Para desplegar el proyecto a nivel local debe instalar la libreria serve.\
Ejecutando el comando `npm install serve` y luego ejecutar `serve -s build`.\
Adicionalmente el proyecto se encuentra desplegado en AWS S3 accediendo al siguiente link: [http://react-project-bootcamp-carshop.s3-website-us-east-1.amazonaws.com/], sin embargo para realizar la prueba se debe iniciar AWS Learned Lab para poder visualizar el proyecto. 

# Descripción

Este proyecto consiste en un formulario para generar una orden de trabajo para carShop.\
Presenta un menú de 3 opciones. La primera opción "Dashboard" muestra una presentación del proyecto y "Profile" el perfil del usuario.\
Finalmente la opción "Generar orden" tiene un wizard de 3 tabs donde se deben ingresar datos del cliente, vehículo, los servicios a utilizar y en el tab final un resumen de la información ingresada.
