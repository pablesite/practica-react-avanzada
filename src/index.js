import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { configureStore } from './store'
import * as  AdvertsService  from './services/AdvertDBService'


const store = configureStore({  services: { AdvertsService } });

const rootProps = {
    store,
  };

ReactDOM.render(<App {...rootProps} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
