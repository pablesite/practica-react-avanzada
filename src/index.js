import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { configureStore } from './store'
import * as  AdvertsService  from './services/AdvertDBService'

import { getUser } from './services/Storage'
import { setUser } from './store/actions' 

// const store = configureStore();


// const store = configureStore({ history, services: { BikesService }, push })();
const store = configureStore({  services: { AdvertsService } });

// Test de meter el usuario en Redux! Vamos! 
//Sólo hay que replicar esta lógica en el componente index, 
//para que cargue el user en el store siempre que exista, o cuando se registre/loguee.
store.subscribe(() => console.log('redux', store.getState()));
// store.dispatch(setUser(getUser()));

const rootProps = {
    store,
  };

ReactDOM.render(<App {...rootProps} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
