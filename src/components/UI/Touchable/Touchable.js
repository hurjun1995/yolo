// @flow
import * as React from 'react'
import { TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native'

type Props = {
  content: React.Element<any>,
  onPress: Function,
}
const Touchable = (props: Props) => {
  const { content, onPress, children } = props
  return Platform.OS === 'ios' ? (
    <TouchableOpacity onPress={onPress}>
      {content}
      {children}
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback onPress={onPress}>
      {content}
      {children}
    </TouchableNativeFeedback>
  )
}
export default Touchable
