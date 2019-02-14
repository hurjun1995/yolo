import React from 'react'
import { View } from 'react-native'
import { Badge } from 'react-native-elements'

import styles from './styles'

const selectedBadge = '1'

const generateScaleButtons = (numOfScale) => {
  const retArr = []
  for (let i = 1; i < numOfScale; i++) {
    console.log(i)
    retArr.push(
      <Badge
        key={i}
        value={i}
        containerStyle={
          selectedBadge === i.toString()
            ? [styles.badgeBase, styles.selectedBadge]
            : styles.badgeBase
        }
      />,
    )
  }
  return retArr
}

const ScaleAnswer = (props) => {
  console.log('hi')
  return <View style={{ flexDirection: 'row' }}>{generateScaleButtons(8)}</View>
}

export default ScaleAnswer
