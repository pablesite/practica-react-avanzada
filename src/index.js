import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { saveUserInLS, getUserFromLS, deleteLS } from './services/Storage';
import { configureStore } from './store';

import { saveUser, fetchTags } from './store/actions' 

import * as  AdvertsService  from './services/AdvertDBService'


// funcion render de la applicacion
const renderApp = props =>
{
  ReactDOM.render(<App {...props} />, document.getElementById('root'));
}

const store = configureStore({  
  services: { AdvertsService }
});

// actualizamos el usuario en LS cuando cambie su estado en el store de Redux
store.subscribe(() => {
  const { storeInfo, user } = store.getState();
  
  if (storeInfo === 'saveUser') {
    saveUserInLS(user);
  }

  if (storeInfo === 'deleteUser') {
    deleteLS();
  }

  // Esperamos a tener las tags para renderizar la app
  if (storeInfo === 'tagsInStore') {
    renderApp({ store, history });
  }
});

// histórico del browser
const history = createBrowserHistory();

// Cargamos el usuario siempre y cuando esté persistido en LS
const user = getUserFromLS(); 
if (user !== null) {
  store.dispatch(saveUser(user));
}

// Cargamos las tags al inicio.
store.dispatch(fetchTags());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
