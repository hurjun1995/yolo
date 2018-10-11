// @flow
import React from 'react'
import { View, Text } from 'react-native'
import { List, ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Name',
    icon: 'lightbulb-outline',
  },
  {
    name: 'Start Date',
    icon: 'calendar-range',
  },
  {
    name: 'When to Log',
    icon: 'lead-pencil',
  },
  {
    name: 'Reminder',
    icon: 'bell-ring-outline',
  },
]

type Props = {}
class GoalDetailScreen extends React.Component<Props> {
  state = {}

  render() {
    return (
      <List containerStyle={{ marginBottom: 20 }}>
        {list.map(l => (
          <ListItem
            textInput
            hideChevron
            leftIcon={{ name: l.icon, type: 'material-community' }}
            key={l.name}
            title={l.name}
          />
        ))}
      </List>
    )
  }
}

export default GoalDetailScreen
