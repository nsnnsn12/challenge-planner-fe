import { createInjectorsEnhancer, forceReducerReload } from '@nixjs23n6/redux-injectors';
import { configureStore, ThunkAction, Action, applyMiddleware, compose } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import createReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
applyMiddleware(...middleware);

declare global {
  interface Window{
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

export function makeStore(){
  let devTools = null;
  //TODO : If is Dev.
  //devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({shouldHotReload: false});
  const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;
devTools = composeEnhancers;

  const injectorEnhancer = createInjectorsEnhancer({
    createReducer,
    runSaga: sagaMiddleware.run,
  });

  const store = configureStore({
    reducer: createReducer(),
    devTools: devTools,
    middleware,
    enhancers: [injectorEnhancer],
  });

  //sagaMiddleware.run(rootSaga);

  return store;
}


const store = makeStore();

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;


export default store
