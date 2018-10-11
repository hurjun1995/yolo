import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource('ios-list-box', 30),
    Icon.getImageSource('ios-settings', 30),
  ]).then((sources) => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                id: 'GoalSelectionStack',
                children: [
                  {
                    component: {
                      name: 'yolo.GoalListScreen',
                      options: {
                        bottomTab: {
                          text: 'Goals',
                          icon: sources[0],
                          selectedIconColor: 'orange',
                          selectedTextColor: 'orange',
                        },
                      },
                      passProps: {
                        originComponentId: 'GoalSelectionStack',
                      },
                    },
                  },
                ],
              },
            },
            {
              component: {
                name: 'yolo.PersonalSettingScreen',
                options: {
                  bottomTab: {
                    text: 'My room',
                    icon: sources[1],
                    selectedIconColor: 'orange',
                    selectedTextColor: 'orange',
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

export default startMainTabs
