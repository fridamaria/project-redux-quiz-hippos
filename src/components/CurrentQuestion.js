import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { quiz } from 'reducers/quiz'
import { Button } from './Button'

export const CurrentQuestion = () => {
  const [className, setClassName] = useState('')
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const answer = useSelector((state) => state.quiz.answers.find((a) => (a.questionId === question.id)))
  console.log(question)

  if (answer) { console.log(answer.isCorrect) }

  const dispatch = useDispatch()

  const handleOnClick = (index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
    setClassName(question.correctAnswerIndex === index ? 'correctAnswer' : 'wrongAnswer')
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }


  return (
    <div>
      <Question>Question: {question.questionText}</Question>
      {

        question.options.map((option, index) => (
          <Option key={index}>
            <input
              className={className}
              type='button'
              id={index}
              name='option'
              value={option}
              onClick={() =>
                handleOnClick(index)
              } />
          </Option>
        ))



      }
      <Button
        onClick={() => dispatch(quiz.actions.goToNextQuestion())}
        buttonTitle='Next question' />

    </div>
  )
}

const Question = styled.h1`
  color: #000;
`

const Option = styled.label`
  color: #000;
`