import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { saveUserInLS, getUserFromLS, deleteLS } from './services/Storage';
import { configureStore } from './store';

import { saveUser } from './store/actions' 

import * as  AdvertsService  from './services/AdvertDBService'


// funcion render de la applicacion
const renderApp = props =>
{
  ReactDOM.render(<App {...props} />, document.getElementById('root'));
}
  

// histórico del browser
const history = createBrowserHistory();

const user = getUserFromLS(); 

const store = configureStore({  
  services: { AdvertsService }
});


// cuando haya un cambio en el store, sincronizamos localStorage
store.subscribe(() => {
  const { storeInfo, user } = store.getState();
  
  if (storeInfo === 'saveUser') {
    saveUserInLS(user);
  }

  if (storeInfo === 'deleteUser') {
    deleteLS();
  }

  // cuando tengamos las tags en el store, renderizamos la app
 // if (lastAction.type === TAGS_LOAD_SUCCESFULL) {
    //renderApp({ store, history });
  //}
});



store.dispatch(saveUser(user));

// // lanzamos una accion inicial para cargar las tags
// store.dispatch(loadTags());


renderApp({ store, history });




// const rootProps = {
//     store,
//     history
//   };

// ReactDOM.render(<App {...rootProps} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
