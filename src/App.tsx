// ################## Node Modules ##################
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// ################## Node Modules ##################

// ################## Styles and Images ##################
import './index.scss'
// ################## Styles and Images ##################

// ################## Components and Helpers ##################
import API from 'services'
import ApplicationRouter from 'router'
import store, { persistedState } from './store'
// ################## Components and Helpers ##################

const App = () => {
  useEffect(() => {
    // create API Singleton instance
    ;(() => new API())()
    localStorage.setItem('token', 'DUMMY_TOKEN')
  }, [])
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedState}>
          <ApplicationRouter />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
