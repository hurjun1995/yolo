// @flow
/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Navigation } from 'react-native-navigation'

import styles from './styles'
import GoalButton from '../../components/UI/GoalButton/GoalButton'
import CustomGoalInput from '../../components/UI/CustomGoalInput/CustomGoalInput'

const goalList = [
  {
    title: 'Exercise',
    icon: 'dumbbell',
  },
  {
    title: 'Weight',
    icon: 'scale-bathroom',
  },
  {
    title: 'Drink Water',
    icon: 'cup-water',
  },
  {
    title: 'Get Up Early',
    icon: 'weather-sunset-up',
  },
  {
    title: 'Read',
    icon: 'book-open-page-variant',
  },
  {
    title: 'Budget',
    icon: 'calculator',
  },
  {
    title: 'Save Money',
    icon: 'coin',
  },
  {
    title: 'Sleep',
    icon: 'alarm-snooze',
  },
  {
    title: 'Journal',
    icon: 'book',
  },
]

// goalList = goalList.map((item) => {
//   item.id = UUIDGenerator()
//   return item
// })

type Props = { originComponentId: string }
type State = { currentStep: number }
class GoalListScreen extends Component<Props, State> {
  static options() {
    return {
      topBar: {
        title: {
          text: 'New Goal',
        },
        rightButtons: [
          {
            text: 'NEXT',
            id: 'nextButton',
            buttonColor: 'black',
          },
        ],
      },
    }
  }

  constructor(props: Props) {
    super(props)
    Navigation.events().bindComponent(this)
  }

  handleButtonClick = () => {
    const { originComponentId } = this.props
    Navigation.push(originComponentId, {
      component: {
        name: 'yolo.GoalDetailScreen',
      },
    })
  }

  generateGoalButtonsRow = (list: Array<Object>, idx: number) => (
    <View style={styles.rowContainer} key={idx}>
      {list.map(item => (
        <GoalButton
          iconName={item.icon}
          text={item.title}
          key={item.title}
          onClickHandler={this.handleButtonClick}
        />
      ))}
    </View>
  )

  generateGoalButtons = (list: Array<Object>) => {
    let i = 0
    const retArray = []
    const listLength = list.length
    while (i < listLength) {
      const subList = i + 3 < listLength ? list.slice(i, i + 3) : list.slice(i, listLength)
      retArray.push(this.generateGoalButtonsRow(subList, i))
      i += 3
    }
    return retArray
  }

  // can pass "buttonId" as props if needed later
  navigationButtonPressed() {
    this.handleButtonClick()
  }

  render() {
    // const { text } = this.state
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topContainer}>
          <CustomGoalInput />
        </View>
        {this.generateGoalButtons(goalList)}
      </ScrollView>
    )
  }
}

export default GoalListScreen
