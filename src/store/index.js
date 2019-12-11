import { createStore, combineReducers, applyMiddleware } from 'redux';
 import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducer  from './reducers';

// export function configureStore () {  
//     const store = createStore(reducer, composeWithDevTools());
//     return store;
//   };


// export function configureStore () {  
//     const store = createStore(reducer, composeWithDevTools(), applyMiddleware(thunkMiddleware));
//     return store;
//   };


const configureMiddleware = ({ ...thunkExtraArgument }) => {
  const middlewares = [
    thunkMiddleware.withExtraArgument(thunkExtraArgument),
  ];
  return middlewares;
};


export const configureStore = config =>  {
  const middlewares = configureMiddleware(config);
  const composeEnhancers = composeWithDevTools;

  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
  console.log('store:', store)
  return store;
};



// const createRootReducer = ({ history }) => {
//   const reducer = combineReducers({
//     router: connectRouter(history),
//     ...reducers,
//   });
//   return reducer;
// };

// const configureMiddleware = ({ history, ...thunkExtraArgument }) => {
//   const middlewares = [
//     routerMiddleware(history),
//     thunkMiddleware.withExtraArgument(thunkExtraArgument),
//   ];
//   if (process.env.NODE_ENV === 'development') {
//     const loggerMiddleware = createLogger();
//     middlewares.push(loggerMiddleware);
//   }
//   return middlewares;
// };

// export const configureStore = config => preloadedState => {
//   //const rootReducer = createRootReducer(config);
//   //const middlewares = configureMiddleware(config);
//   //const composeEnhancers = composeWithDevTools;

//   const store = createStore(
//     //rootReducer,
//     //preloadedState,
//     //composeEnhancers(applyMiddleware(...middlewares)),
//   );
//   return store;
// };
