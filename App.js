import { Navigation } from 'react-native-navigation';
import registerScreens from './src/screens';

const startApp = () => {
  registerScreens();
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
    });
  });
};

export default startApp;
