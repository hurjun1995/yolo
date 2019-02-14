import React from 'react'
import { View, Text } from 'react-native'

import ScaleAnswer from '../Answer/ScaleAnswer'
import MultipleChoiceAnswer from '../Answer/MultipleChoiceAnswer'

export const QuestionTypeEnum = {
  SCALE: 0,
  MULTIPLE_CHOICE: 1,
}

const Question = (props) => {
  const {
    questionId, questionText, questionType, handleQuestionAnswered,
  } = props

  const handleAnswerClick = (answer) => {
    handleQuestionAnswered(questionId, answer)
  }

  return (
    <View>
      <Text>{questionText}</Text>
      {questionType === QuestionTypeEnum.SCALE ? (
        <ScaleAnswer questionId scale={props.scale} handleAnswerClick={handleAnswerClick} />
      ) : (
        <MultipleChoiceAnswer />
      )}
    </View>
  )
}

export default Question
