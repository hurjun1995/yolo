import { Navigation } from 'react-native-navigation'

import { App } from '../../App'
import AuthScreen from './Auth/Auth'
import GoalListScreen from './GoalList/GoalList'
import PersonalSettingScreen from './PersonalSetting/PersonalSetting'
import configureStore from '../store/configureStore'
import reduxStoreWrapper from '../store/reduxStoreWrapper'

const registerScreens = () => {
  const store = configureStore()

  Navigation.registerComponent('yolo.App', () => App)
  Navigation.registerComponent('yolo.AuthScreen', reduxStoreWrapper(AuthScreen, store))
  Navigation.registerComponent('yolo.GoalListScreen', () => GoalListScreen)
  Navigation.registerComponent('yolo.PersonalSettingScreen', () => PersonalSettingScreen)
}

export default registerScreens
