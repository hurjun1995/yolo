import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './Auth/Auth';
import GoalListScreen from './GoalList/GoalList';
import PersonalSettingScreen from './PersonalSetting/PersonalSetting';
import configureStore from '../store/configureStore';

const registerScreens = () => {
  const store = configureStore();

  Navigation.registerComponent('yolo.AuthScreen', () => AuthScreen, store, Provider);
  Navigation.registerComponent('yolo.GoalListScreen', () => GoalListScreen);
  Navigation.registerComponent('yolo.PersonalSettingScreen', () => PersonalSettingScreen);
};

export default registerScreens;
