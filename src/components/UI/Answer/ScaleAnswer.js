import React from 'react'
import { View } from 'react-native'
import { Badge } from 'react-native-elements'

import styles from './styles'

class ScaleAnswer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedScale: '',
    }
  }

  handleBadgeClick = (value) => {
    this.setState({
      selectedScale: value,
    })
    this.props.handleAnswerClick(value)
  }

  generateScaleButtons = (numOfScale) => {
    const retArr = []
    for (let i = 1; i < numOfScale + 1; i++) {
      retArr.push(
        <Badge
          key={i}
          value={i}
          containerStyle={
            this.state.selectedScale === i.toString()
              ? [styles.badgeBase, styles.selectedBadge]
              : styles.badgeBase
          }
          onPress={() => this.handleBadgeClick(i.toString())}
        />,
      )
    }
    return retArr
  }

  render() {
    const { scale } = this.props
    return <View style={styles.scaleAnswerContainer}>{this.generateScaleButtons(scale)}</View>
  }
}

export default ScaleAnswer
