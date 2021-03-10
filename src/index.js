import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'
import authActions from './actions/auth'
import App from './components/App'
import './index.css'
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker'

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const originalRequest = error.config

    console.log('Error response received')
    console.log(`Has Retried: ${Boolean(originalRequest._retry)}`)
    if (error.response.status === 401 && !originalRequest._retry) {
      console.log('401 response received and trying to re-authenticate')
      originalRequest._retry = true
      const state = store.getState()
      const refreshToken = state.auth.tokens.refreshToken
      return axios
        .post('https://api.justinsexton.net/security/refresh', {
          refreshToken: refreshToken
        })
        .then((response) => {
          const tokens = response.data.data
          store.dispatch(
            authActions.updateAuthInfo({
              tokens: tokens
            })
          )
          return axios(originalRequest)
        })
        .catch(() => {
          store.dispatch(authActions.clearAuthInfo())
        })
    }

    return Promise.reject(error)
  }
)

const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
