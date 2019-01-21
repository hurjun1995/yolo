// @flow
import React from 'react'
import { View } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'

import MinuteSelectionBadge from '../../components/UI/MinuteSelectionBadge/MinuteSelectionBadge'

type Props = {}
type State = {
  goalName: string,
  startDate: string,
  logTime: string,
  reminderTime: string,
}
class GoalDetailScreen extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      goalName: '',
      startDate: '',
      logTime: '',
      reminderTime: '',
    }
  }

  onGoalNamePress = () => {
    this.setState(prevState => ({
      ...prevState,
      goalName: `${prevState.goalName}a`,
    }))
    // TODO:
  }

  onStartDatePress = () => {
    // TODO:
  }

  onLogTimePress = () => {
    // TODO:
  }

  onReminderTimePress = () => {
    // TODO:
  }

  onStartDateChange = (dateStr) => {
    this.setState({ startDate: dateStr })
  }

  onReminderTimeOptionSelected = (val) => {
    this.setState({ reminderTime: val })
  }

  render() {
    return (
      <View>
        <List containerStyle={{ marginBottom: 20 }}>
          <ListItem
            title="Goal Name"
            rightTitle={this.state.goalName}
            onPressRightIcon={this.onGoalNamePress}
          />
          <ListItem
            title="Start Date"
            rightIcon={(
              <DatePicker
                date={this.state.startDate}
                onDateChange={this.onStartDateChange}
                customStyles={{ dateInput: { borderWidth: 0 } }}
                showIcon={false}
                cancelBtnText="Cancel"
                confirmBtnText="Confirm"
              />
)}
            onPressRightIcon={this.onStartDatePress}
          />
          <ListItem
            title="When to Log"
            rightIcon={(
              <DatePicker
                showIcon={false}
                mode="time"
                customStyles={{ dateInput: { borderWidth: 0 } }}
                cancelBtnText="Cancel"
                confirmBtnText="Confirm"
              />
)}
            onPressRightIcon={this.onLogTimePress}
          />
          <ListItem
            title="Reminder"
            subtitle="in minutes"
            rightIcon={(
              <MinuteSelectionBadge
                onBadgePressed={this.onReminderTimeOptionSelected}
                selectedMinute={this.state.reminderTime}
              />
)}
          />
        </List>
      </View>
    )
  }
}

export default GoalDetailScreen
