/* eslint no-undef: 0, no-underscore-dangle: 0 */
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { persistStore } from 'redux-persist'

import persistedRootReducer from './reducers'
import rootSaga from './sagas'

let composeEnhancers = compose

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const logger = createLogger()

  const store = createStore(
    persistedRootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, logger)),
  )
  sagaMiddleware.run(rootSaga)
  return store
}

export const configurePersistor = store => persistStore(store)
