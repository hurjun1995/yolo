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
  const content = <Text style={style}>{title}</Text>
  return <Touchable content={content} onPress={onPress} />
}

TextButton.defaultProps = {
  style: {},
}

export default TextButton
