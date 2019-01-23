import React, { Component } from 'react'
import { Navigation } from 'react-native-navigation'

import { startMainTabs } from './src/screens/navigation'
import AuthScreen from './src/screens/Auth/Auth'
import registerScreens from './src/screens'

const startApp = () => {
  registerScreens()
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'yolo.AuthScreen',
                options: {
                  topBar: {
                    visible: false,
                  },
                },
              },
            },
          ],
        },
      },
    })
  })
}

type States = {
  user: ?Object,
}

export class App extends Component<{}, States> {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }

  // componentDidMount() {
  //   this.firebaseAuthListener = firebase.auth().onAuthStateChanged((user) => {
  //     this.setState({ user })
  //   })
  // }

  // componentWillUnmount() {
  //   if (this.firebaseAuthListener) {
  //     this.firebaseAuthListener()
  //   }
  // }

  // firebaseAuthListener: ?Function

  render() {
    const { user } = this.state
    return user ? startMainTabs() : <AuthScreen />
  }
}

export default startApp
