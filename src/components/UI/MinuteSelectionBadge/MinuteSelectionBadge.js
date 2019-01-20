import React from 'react'
import { View } from 'react-native'
import { Badge } from 'react-native-elements'

import styles from './styles'

const MinuteSelectionBadge = (props) => {
  const { onBadgePressed, selectedMinute } = props
  const reminderTimeOptionsFirstRow = [10, 20, 30]
  const reminderTimeOptionsSecondRow = [40, 50, 60]

  const _createBadge = val => (
    <Badge
      key={val}
      value={val}
      onPress={() => onBadgePressed(val.toString())}
      containerStyle={selectedMinute === val ? styles.selectedBadge : styles.badge}
    />
  )

  return (
    <View style={styles.renderTimeOptionContainer}>
      <View style={styles.renderTimeOptionRowContainer}>
        {reminderTimeOptionsFirstRow.map(_createBadge)}
      </View>
      <View style={styles.renderTimeOptionRowContainer}>
        {reminderTimeOptionsSecondRow.map(_createBadge)}
      </View>
    </View>
  )
}

export default MinuteSelectionBadge
