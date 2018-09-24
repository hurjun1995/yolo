import { createStore, combineReducers, compose } from 'redux';

import exampleReducer from './reducers/example';

const rootReducer = combineReducers({
  example: exampleReducer,
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => createStore(rootReducer, composeEnhancers());

export default configureStore;
