import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
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
      <Text style={styles.questionText}>{questionText}</Text>
      {questionType === QuestionTypeEnum.SCALE ? (
        <ScaleAnswer questionId scale={props.scale} handleAnswerClick={handleAnswerClick} />
      ) : (
        <MultipleChoiceAnswer
          questionId
          answerOptions={props.answerOptions}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </View>
  )
}

export default Question
