import { Navigation } from 'react-native-navigation'

import { App } from '../../App'
import AuthScreen from './Auth/Auth'
import GoalListScreen from './GoalList/GoalList'
import GoalDetailScreen from './GoalDetail/GoalDetail'
import PersonalSettingScreen from './PersonalSetting/PersonalSetting'
import { configureStore, configurePersistor } from '../store/storeConfig'
import reduxStoreWrapper from '../store/reduxStoreWrapper'

const registerScreens = () => {
  const store = configureStore()
  const persistor = configurePersistor(store)

  Navigation.registerComponent('yolo.App', () => App)
  Navigation.registerComponent('yolo.AuthScreen', reduxStoreWrapper(AuthScreen, store, persistor))
  Navigation.registerComponent('yolo.GoalListScreen', () => GoalListScreen)
  Navigation.registerComponent('yolo.GoalDetailScreen', () => GoalDetailScreen)
  Navigation.registerComponent('yolo.PersonalSettingScreen', () => PersonalSettingScreen)
}

export default registerScreens
