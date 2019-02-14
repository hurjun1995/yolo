/* eslint no-undef: 0, no-underscore-dangle: 0 */
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'

import persistedRootReducer from './reducers'
import rootSaga from './sagas'

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const logger = createLogger()

  const store = createStore(
    persistedRootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
  )
  sagaMiddleware.run(rootSaga)
  return store
}

export const configurePersistor = store => persistStore(store)
