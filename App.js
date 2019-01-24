import React, { Component } from 'react'
import { Navigation } from 'react-native-navigation'

import { startMainTabs } from './src/screens/navigations'
import AuthScreen from './src/screens/Auth/Auth'
import registerScreens from './src/screens'

const startApp = () => {
  registerScreens()
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'yolo.InitializeScreen',
          options: {
            topBar: {
              visible: false,
            },
          },
        },
      },
    })
  })
}

export default startApp
