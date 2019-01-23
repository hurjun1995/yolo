/* eslint react/prefer-stateless-function: 0 */
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function reduxStoreWrapper(MyComponent, store, persistor) {
  return () => class StoreWrapper extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <MyComponent />
          </PersistGate>
        </Provider>
      )
    }
  }
}

export default reduxStoreWrapper
