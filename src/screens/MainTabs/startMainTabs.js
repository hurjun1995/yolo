import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource(Platform.OS === 'android' ? 'md-list-box' : 'ios-list-box', 30),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-setting' : 'ios-setting', 30),
  ]).then((sources) => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              component: {
                name: 'yolo.GoalListScreen',
                options: {
                  icon: sources[0],
                },
              },
            },
            {
              component: {
                name: 'yolo.PersonalSettingScreen',
                options: {
                  icon: sources[0],
                },
              },
            },
          ],
        },
      },
    });
  });
};

export default startMainTabs;
