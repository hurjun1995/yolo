// @flow
import React from 'react'
import { List, ListItem, Divider } from 'react-native-elements'
import { Navigation } from 'react-native-navigation'

import styles from './styles'
import MinuteSelectionBadge from '../../components/UI/MinuteSelectionBadge/MinuteSelectionBadge'
import MyDatePicker from '../../components/UI/MyDatePicker/MyDatePicker'
import { pushGoalSurveyScreenOnStack } from '../navigations'

type Props = {
  originalComponentId: string,
}
type State = {
  goalName: string,
  startDate: string,
  logTime: string,
  reminderTime: string,
}
class GoalDetailScreen extends React.Component<Props, State> {
  static options() {
    return {
      topBar: {
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

  constructor(props) {
    super(props)
    this.state = {
      goalName: '',
      startDate: '',
      logTime: '',
      reminderTime: '',
    }

    Navigation.events().bindComponent(this)
  }

  // can pass "buttonId" as props if needed later
  navigationButtonPressed() {
    console.log(this.props.originalComponentId)
    pushGoalSurveyScreenOnStack(this.props.originalComponentId)
  }

  render() {
    return (
      <List containerStyle={styles.listContainer}>
        <ListItem
          hideChevron
          title="Goal Name"
          textInput
          textInputMultiline
          textInputValue={this.state.goalName}
          textInputOnChangeText={text => this.setState({ goalName: text })}
          textInputPlaceholder="Drink water everyday"
          containerStyle={styles.listItem}
          textInputStyle={styles.textInput}
        />
        <Divider style={styles.divider} />
        <ListItem
          title="Start Date"
          rightIcon={(
            <MyDatePicker
              date={this.state.startDate}
              onDateChange={dateStr => this.setState({ startDate: dateStr })}
            />
)}
          containerStyle={styles.listItem}
        />
        <Divider style={styles.divider} />
        <ListItem
          title="When to Log"
          rightIcon={(
            <MyDatePicker
              date={this.state.logTime}
              mode="time"
              onDateChange={timeStr => this.setState({ logTime: timeStr })}
            />
)}
          containerStyle={styles.listItem}
        />
        <Divider style={styles.divider} />
        <ListItem
          title="Reminder"
          subtitle="in minutes"
          rightIcon={(
            <MinuteSelectionBadge
              onBadgePressed={val => this.setState({ reminderTime: val })}
              selectedMinute={this.state.reminderTime}
            />
)}
          containerStyle={styles.listItem}
        />
      </List>
    )
  }
}

export default GoalDetailScreen
