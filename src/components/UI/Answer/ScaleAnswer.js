import React from 'react'
import { View } from 'react-native'

import Badge from '../Badge/Badge'
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
      const badge = (
        <Badge
          key={i}
          value={i}
          containerStyle={this.state.selectedScale === i.toString() && styles.selectedBadge}
          onPress={() => this.handleBadgeClick(i.toString())}
        />
      )
      retArr.push(badge)
    }
    return retArr
  }

  render() {
    const { scale } = this.props
    return <View style={styles.scaleAnswerContainer}>{this.generateScaleButtons(scale)}</View>
  }
}

export default ScaleAnswer
