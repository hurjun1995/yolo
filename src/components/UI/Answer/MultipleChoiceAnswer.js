import React from 'react'
import { View, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'

class MultipleChoiceAnswer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: '',
    }
  }

  handleOptionClick = (value) => {
    this.setState({
      selectedOption: value,
    })
    this.props.handleAnswerClick(value)
  }

  generateAnswerOptions = (options) => {
    const retArr = []
    options.forEach((option, idx) => {
      retArr.push(
        <CheckBox
          key={idx}
          title={option}
          checked={option == this.state.selectedOption}
          onPress={() => this.handleOptionClick(option)}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checkedColor="#f8c74d"
          containerStyle={{ borderWidth: 0 }}
        />,
      )
    })
    return retArr
  }

  render() {
    return <View>{this.generateAnswerOptions(this.props.answerOptions)}</View>
  }
}

export default MultipleChoiceAnswer
