// @flow
import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Touchable from '../Touchable/Touchable'
import styles from './styles'

type Props = {
  iconName: string,
  text: string,
  onClickHandler: Function,
}

const GoalButton = (props: Props) => {
  const { iconName, text, onClickHandler } = props
  const content = (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={iconName} size={Dimensions.get('window').width / 8} color="black" />
      </View>
      <Text>{text}</Text>
    </View>
  )
  return <Touchable content={content} onPress={onClickHandler} />
}

export default GoalButton
