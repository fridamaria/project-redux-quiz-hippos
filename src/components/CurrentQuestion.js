import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Button } from './Button'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState()

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    dispatch(quiz.actions.submitAnswer({ questionId: 1, answerIndex: 3 }))
  }

  //fixa till dispatch questionId imorgon

  const handleOnChange = e => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <Question>Question: {question.questionText}</Question>
      {question.options.map((option, index) => (
        <Option>
          <input key={index} type='submit' id={index} name='option' value={option} onSubmit={handleOnSubmit} />
        </Option>
      ))}
      <Button />
    </div>
  )
}

const Question = styled.h1`
  color: #000;
`

const Option = styled.label`
  color: #000;
`