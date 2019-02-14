import React, { Component } from 'react'
import { View } from 'react-native'
import Question, { QuestionTypeEnum } from '../../components/UI/Question/Question'

const mockQuestions = [
  {
    id: 1,
    question: 'This is question 1. How would you rate Joon Hur?',
    questionType: 'scale',
    scale: 7,
  },
  {
    id: 2,
    question: 'This is question 2. How would you rate Alice Lee-Yoon?',
    questionType: 'scale',
    scale: 10,
  },
  {
    id: 3,
    question: 'This is question 3. How happy are you today?',
    questionType: 'scale',
    scale: 5,
  },
  {
    id: 4,
    question: 'What is your race?',
    questionType: 'MULTIPLE_CHOICE',
    answerOptions: ['option1', 'option2', 'option3', 'option4', 'option5'],
  },
]

class GoalSurvey extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedAnswers: {}, // key: questionId, answer: string
    }
  }

  handleQuestionAnswered = (questionId, answer) => {
    this.setState((prevState) => {
      const newSelectedAnswers = Object.assign({}, prevState.selectedAnswers)
      newSelectedAnswers[questionId] = answer
      return { ...prevState, selectedAnswers: newSelectedAnswers }
    })
  }

  generateQuestions = (questionInfoList) => {
    const retArray = []
    questionInfoList.forEach((element) => {
      switch (element.questionType) {
        case 'scale':
          retArray.push(
            <Question
              key={element.id}
              questionId={element.id}
              questionText={element.question}
              questionType={QuestionTypeEnum.SCALE}
              scale={element.scale}
              handleQuestionAnswered={this.handleQuestionAnswered}
            />,
          )
          break
        case 'multiple_choice':
          retArray.push(
            <Question
              key={element.id}
              questionId={element.id}
              questionText={element.question}
              questionType={QuestionTypeEnum.MULTIPLE_CHOICE}
              answerOptions={element.answerOptions}
              handleQuestionAnswered={this.handleQuestionAnswered}
            />,
          )
          break
        default:
          break
      }
    })
    return retArray
  }

  render() {
    return <View>{this.generateQuestions(mockQuestions)}</View>
  }
}

export default GoalSurvey
