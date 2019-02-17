import React from 'react'
import { View, Text } from 'react-native'

import Touchable from '../Touchable/Touchable'
import styles from './styles'

const Badge = (props) => {
  const {
    containerStyle, textStyle, value, onPress,
  } = props

  return (
    <Touchable onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        <Text style={[styles.textContainer, textStyle]}>{value}</Text>
      </View>
    </Touchable>
  )
}

export default Badge
