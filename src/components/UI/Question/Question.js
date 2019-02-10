import React from 'react'
import { View, Text } from 'react-native'

import ScaleAnswer from '../Answer/ScaleAnswer'
import MultipleChoiceAnswer from '../Answer/MultipleChoiceAnswer'

export const QuestionTypeEnum = {
  SCALE: 0,
  MULTIPLE_CHOICE: 1,
}

const Question = (props) => {
  const questionPlaceholder = 'Question placeholder'
  return (
    <View>
      <Text>{questionPlaceholder}</Text>
      {props.questionType === QuestionTypeEnum.SCALE ? <ScaleAnswer /> : <MultipleChoiceAnswer />}
    </View>
  )
}

export default Question
