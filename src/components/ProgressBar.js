import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { quiz } from 'reducers/quiz'

export const ProgressBar = ({ question }) => {
  const totalQuestions = useSelector(state => state.quiz.questions)
  const currentQuestion = question.id

  return (

    <h2>{currentQuestion}/ {totalQuestions.length}</h2>

  )
}