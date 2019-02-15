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
    questionId,
    questionText,
    questionType,
    handleQuestionAnswered,
    answerOptions,
    scale,
  } = props

  const handleAnswerClick = (answer) => {
    handleQuestionAnswered(questionId, answer)
  }

  return (
    <View>
      <Text style={styles.questionText}>{questionText}</Text>
      {questionType === QuestionTypeEnum.SCALE ? (
        <ScaleAnswer questionId={questionId} scale={scale} handleAnswerClick={handleAnswerClick} />
      ) : (
        <MultipleChoiceAnswer
          questionId={questionId}
          answerOptions={answerOptions}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </View>
  )
}

export default Question
