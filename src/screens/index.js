import { Navigation } from 'react-native-navigation'

import Initialize from './Initialize/Initialize'
import AuthScreen from './Auth/Auth'
import GoalListScreen from './GoalList/GoalList'
import GoalDetailScreen from './GoalDetail/GoalDetail'
import GoalSurveyScreen from './GoalSurvey/GoalSurvey'
import PersonalSettingScreen from './PersonalSetting/PersonalSetting'
import { configureStore, configurePersistor } from '../store/storeConfig'
import reduxStoreWrapper from '../store/reduxStoreWrapper'

const registerScreens = () => {
  const store = configureStore()
  const persistor = configurePersistor(store)

  Navigation.registerComponent(
    'yolo.InitializeScreen',
    reduxStoreWrapper(Initialize, store, persistor),
  )
  Navigation.registerComponent('yolo.AuthScreen', reduxStoreWrapper(AuthScreen, store, persistor))
  Navigation.registerComponent('yolo.GoalListScreen', () => GoalListScreen)
  Navigation.registerComponent('yolo.GoalDetailScreen', () => GoalDetailScreen)
  Navigation.registerComponent('yolo.GoalSurveyScreen', () => GoalSurveyScreen)
  Navigation.registerComponent(
    'yolo.PersonalSettingScreen',
    reduxStoreWrapper(PersonalSettingScreen, store, persistor),
  )
}

export default registerScreens
