/* eslint no-undef: 0, no-underscore-dangle: 0 */
import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

import { authReducer } from './reducers/authReducer'
import rootSaga from './sagas'

const rootReducer = combineReducers({
  auth: authReducer,
})

let composeEnhancers = compose

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const logger = createLogger()
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, logger)))
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
