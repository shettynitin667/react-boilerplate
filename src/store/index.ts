import { combineReducers } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import createStore from './createStore'
import * as users from './users'

const reducer = combineReducers({
  users: users.reducer,
})

const store = createStore({
  reducer,
  // eslint-disable-next-line import/namespace
  sagas: [...users.sagas],
  middleware: [],
})

export default store
export const persistedState = persistStore(store)

export type RootState = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch
