import React from 'react'
import { View, TextInput } from 'react-native'

import styles from './styles'

function CustomGoalInput() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        placeholder="Tell us your goal!"
        underlineColorAndroid="transparent"
        autoCorrect={false}
      />
    </View>
  )
}

export default CustomGoalInput
