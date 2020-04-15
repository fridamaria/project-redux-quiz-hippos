import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { quiz } from 'reducers/quiz'

export const Summary = () => {
  const totalQuestions = useSelector(state => state.quiz.questions)

  const totalAnswers = useSelector(state => state.quiz.answers)

  const correctAnswers = totalAnswers.filter(answer => answer.isCorrect === true)

  return (
    <h2>YAY! You got {correctAnswers.length} /of {totalQuestions.length} points!</h2>
  )
}