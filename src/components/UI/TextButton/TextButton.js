// @flow
import React from 'react'
import { Text } from 'react-native'

import Touchable from '../Touchable/Touchable'

type Props = {
  title: string,
  onPress: Function,
  style?: Object,
}
const TextButton = (props: Props) => {
  const { title, onPress, style } = props

  return (
    <Touchable onPress={onPress}>
      <Text style={style}>{title}</Text>
    </Touchable>
  )
}

TextButton.defaultProps = {
  style: {},
}

export default TextButton
