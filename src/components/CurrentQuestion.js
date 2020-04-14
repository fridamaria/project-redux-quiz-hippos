import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <Question>Question: {question.questionText}</Question>
      {question.options.map((option, index) => (
        <Option>
          <input type='radio' id={index} name='option' value={option} /*onChange={}*/ />
          {option}
        </Option>
      ))}
    </div>
  )
}

const Question = styled.h1`
  color: #000;
`

const Option = styled.label`
  color: #000;
`