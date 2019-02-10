import React, { Component } from 'react'
import { View } from 'react-native'
import Question, { QuestionTypeEnum } from '../../components/UI/Question/Question'

class GoalSurvey extends Component {
  render() {
    return (
      <View>
        <Question questionType={QuestionTypeEnum.SCALE} />
      </View>
    )
  }
}

export default GoalSurvey
