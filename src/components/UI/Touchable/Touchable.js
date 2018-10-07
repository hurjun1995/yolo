import React from 'react'
import { TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native'

type Props = {
  content: Function,
  onPress: Function,
}
const Touchable = (props: Props) => {
  const { content, onPress } = props
  return Platform.OS === 'ios' ? (
    <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>
  ) : (
    <TouchableNativeFeedback onPress={onPress}>{content}</TouchableNativeFeedback>
  )
}

export default Touchable
