import { Navigation } from 'react-native-navigation'

import AuthScreen from './Auth/Auth'
import GoalListScreen from './GoalList/GoalList'
import GoalDetailScreen from './GoalDetail/GoalDetail'
import PersonalSettingScreen from './PersonalSetting/PersonalSetting'
import configureStore from '../store/configureStore'
import reduxStoreWrapper from '../store/reduxStoreWrapper'

const registerScreens = () => {
  const store = configureStore()

  Navigation.registerComponent('yolo.AuthScreen', reduxStoreWrapper(AuthScreen, store))
  Navigation.registerComponent('yolo.GoalListScreen', () => GoalListScreen)
  Navigation.registerComponent('yolo.GoalDetailScreen', () => GoalDetailScreen)
  Navigation.registerComponent('yolo.PersonalSettingScreen', () => PersonalSettingScreen)
}

export default registerScreens
