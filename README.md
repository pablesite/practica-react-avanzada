Antes del README oficial de REACT, el autor comenta algunos detalles implementados en la práctica:

* IMPORTANTE: Se usa la API Nodemon, del compañero Ismael. Se debe correr en local para que este Front pueda hacer peticiones sin problemas.

# REACT Avanzado
El alumno describe a continuación cada una de las funcionalidades implementadas.

## Funcionalidades

* Se ha configurado un store de Redux que almacena: --> Ver en store 
    * Los datos del usuario
    * Los anuncios
    * Variables para tratar el componente asíncrono de la aplicación
* Se han implementado las acciones, reducers y selectores necesarios. --> Ver en store
* Se han configurado acciones síncronas y asíncronas. --> Uso de middlewares (redux-think)
* Se ha configudo Redux Dev Tools para simplificar las tareas de debugging de la aplicación. --> Ver en store/index
* Se ha extraido la lógica común del formulario del componente Login. De tal forma, se han creado dos HOCs (FormEnhanced e InputEnhanced) que permiten hacer formularios en cualquier lugar de la aplicación de manera rápida y sencilla. --> Ver Login, FormEnhanced e InputEnhanced
* Se ha refactorizado el componente Home en forma de HOOK. Ahora usa useState y useEffect y la lógica queda mejor distribuida. --> Ver Home
* Se ha hecho una batería de test de distintos tipos.
    * Dos acciones síncronas --> Ver en store/action.spec.js
    * Una acción asíncrona --> Ver en store/action.spec.js
    * Un reducer --> Ver en store/reducers.spec.js
    * Un selector --> Ver en store/selectors.spec.js
    * Un componente con snapshot testing. Se ha usado la librería enzyme de AirBNB --> Ver en Advert/Advert.spec.js
    * Funcionamiento de un componente que ejecuta una acción del store. --> Ver en Login/Login.spec.js

## Consideraciones

* Se ha configurado un store de Redux sencillo pero lo suficiente complejo como para probar toda la funcionalidad requerida. Al tener pocas acciones diferentes, no se ha visto necesidad de usar combineReducers por ejemplo.
* Se ha mantenido la lógica de persistir el usuario en el localStorage. Sin embargo se ha eliminado el usuario en el contexto y en su lugar se ha usado el store de Redux para ello. Quizá no sea la mejor opción de diseño, pero es válido para mostrar funcionalidad. 
* El filtrado de anuncios se sigue manteniendo en la API Nodemon. Parece lo más lógico según el diseño original. Por ello, los anuncios que persisten en el store son los que toque en cada componente (Home, AdvertDetail o CreateOrUpdate). De nuevo, sería discutible que este diseño sea adecuado, pero se considera adecuado para mostrar el correcto manejo de Redux.
* Advertencia. A la hora de crear un anuncio es necesario seleccionar una foto. De lo contrario, no funciona la creación de anuncios, y sin embargo no se maneja el error. Queda pendiente de mejora.
* Se ha usado el contexto para manejar los datos que intercambian FromEnhanced e InputEnhanced
* Se ha deshabilitado el campo 'tag' del formulario de Login por ser un campo diferente a los InputsText y no cuadrar en el componente InputEnhanced. Se podría hacer otro HOC para este otro tipo de campo de formulario. Queda para el futuro. Por ahora, por defecto se busca inicialmente con la etiqueta motor (establecida en código en initialState en el componente Login)
* Con el uso de los Hooks en el componente Home se ha separado la lógica del estado usando tres useStates diferentes. Sin embargo, se ha considerado usar tan sólo un useEffect dado que los cambios de estado dependen siempre de si existe usuario o si no. De nuevo, este diseño sería discutible.
* Se ha trata de seguir los requisitos de la práctica e ir implementando la funcionalidad requeridad en ciertas partes del código. Como mejora, en un futuro se puede seguir trabajando en refactorizar el resto de los componentes, sobre todo Advert Detail y CreateOrUpdate.


# Fundamentos de REACT

## Funcionalidades
* Se hace uso de rutas.
* Se hace uso del contexto para las variables de estado del usuario.
* Se hace uso del localstorage para almacenar a un usuario en el navegador
* Se hace uso del ErrorBoundary y hay preparada una prueba en la pantalla de registro. Simplemente probar el botón a tal efecto. Atención: Sólo disponible en producción.
* Se ha implementado una paginación 'manual' desde el front. No se hace uso de los queryparams limit y skip de la API por considerarse un poco limitados. Es probable que la opción desarrollada no sea la más eficiente, pero a efectos demostrativos se ha considerado interesante.
* Se ha hecho uso de expresiones regulares para limpitar los inputos de los precios.

## Vistas
* Se han implementado 4 vistas.
    * Vista de registro (login)
    * Vista de listado (home)
    * Vista de detalle (advertDetail)
    * Vista de crear/actualizar (createOrUpdate)

## Consideraciones
* La pantalla home siempre muestra de inicio los anuncios filtrados por la etiqueta del usuario preferida.
* Puedes hacer logout desde cualquier parte de la aplicación. En ese caso, tanto el contexto como el localstorage se borran. Se redirige a la pantalla de registro.
* Se puede crear un anuncio desde cualquier pantalla siempre y cuando el usuario esté logueado.
* Si el usuario no está logueado, todas las rutas llevarán de nuevo a la pantalla de registro.
* Se implementa la subida de imágenes, pero se queda pendiente de un endpoint de la API que acepte imágenes. La solución adoptada es poner una foto genérica para los anuncios creados a posteriori.
* Los filtros tienen tanta potencia como potencia tiene la API. De la misma manera, tienen una limitación a la hora de buscar por tags. La API está limitada a la búsqueda de una sóla tag. Sin embargo, a la hora de crear anuncio, sí que está permitido un array de tags.
* Por alguna razón, los campos de selección no hacen bien la función de require. Esto queda para futuras investigaciones.

## Diseño
* Se ha usado la librería de Material-UI para React. Sólo por probar, en el caso de la AppBar se ha seguido el estilo de funciones y hooks. El resto de la aplicación se ha hecho siguiendo el estilo demostrado en clase. Clases tradicionales.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
