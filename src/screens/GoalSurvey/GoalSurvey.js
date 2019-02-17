import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
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
    question: 'This is question 2. What is your average income?',
    questionType: 'multiple_choice',
    answerOptions: [
      'ooooooooooooooooooooooooooooooooooooooooooooooooooooption1',
      'option2',
      'option3',
      'ooooooooooooooooooooooooooooooooooooooooooooooooooooption4',
      'option5',
      'option6',
      'option7',
    ],
  },
  {
    id: 3,
    question: 'This is question 3. How would you rate Alice Lee-Yoon?',
    questionType: 'scale',
    scale: 10,
  },
  {
    id: 4,
    question: 'This is question 4. How happy are you today?',
    questionType: 'scale',
    scale: 5,
  },
  {
    id: 5,
    question: 'This is question 5. What is your race?',
    questionType: 'multiple_choice',
    answerOptions: [
      'ooooooooooooooooooooooooooooooooooooooooooooooooooooption1',
      'option2',
      'option3',
      'option4',
      'option5',
    ],
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

  generateQuestions = (questionList) => {
    const retArray = []
    questionList.forEach((q) => {
      switch (q.questionType) {
        case 'scale':
          retArray.push(
            <Question
              key={q.id}
              questionId={q.id}
              questionText={q.question}
              questionType={QuestionTypeEnum.SCALE}
              scale={q.scale}
              handleQuestionAnswered={this.handleQuestionAnswered}
            />,
          )
          break
        case 'multiple_choice':
          retArray.push(
            <Question
              key={q.id}
              questionId={q.id}
              questionText={q.question}
              questionType={QuestionTypeEnum.MULTIPLE_CHOICE}
              answerOptions={q.answerOptions}
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
    return <ScrollView>{this.generateQuestions(mockQuestions)}</ScrollView>
  }
}

export default GoalSurvey
