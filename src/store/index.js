import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducer  from './reducers';

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
  return store;
};
