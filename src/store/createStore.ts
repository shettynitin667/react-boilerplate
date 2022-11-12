import { AnyAction, configureStore, EnhancedStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { persistReducer } from 'redux-persist'
import runSagas from './sagas'
import { IStoreModule } from './types'
import { persistConfig } from './config'

// const STATE_TO_BE_PERSISTED = process.env.REACT_APP_STATE_PERSISTED === 'Y'
const STATE_TO_BE_PERSISTED = true
const devTools = process.env.NODE_ENV !== 'production' && {
  trace: true,
  traceLimit: 25,
}

// eslint-disable-next-line
const createStoreForModule = (
  module: IStoreModule
): EnhancedStore<any, AnyAction, any[]> => {
  const sagaMiddleware = createSagaMiddleware()

  const middleware = [...module.middleware, sagaMiddleware]

  const persistedReducer = STATE_TO_BE_PERSISTED
    ? persistReducer(persistConfig, module.reducer)
    : module.reducer

  const store = configureStore({
    devTools,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST'],
        },
      }).concat(middleware),
    reducer: persistedReducer,
  })

  runSagas(sagaMiddleware, module.sagas)
  return store
}

export default createStoreForModule
