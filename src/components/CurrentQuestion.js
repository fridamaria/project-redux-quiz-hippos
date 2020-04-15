import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { quiz } from 'reducers/quiz'
import { Button } from './Button'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState()

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  // const handleOnSubmit = (e) => {
  //   e.preventDefault()
  //   dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
  // }

  //fixa till dispatch questionId imorgon

  const handleOnChange = e => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <Question>Question: {question.questionText}</Question>
      {

        question.options.map((option, index) => (
          <Option key={index}>
            <input
              type='button'
              id={index}
              name='option'
              value={option}
              onClick={() =>
                dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
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