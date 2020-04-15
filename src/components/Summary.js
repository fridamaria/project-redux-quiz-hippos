import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { quiz } from 'reducers/quiz'
import { RestartButton } from './RestartButton.js'

export const Summary = () => {
  const totalQuestions = useSelector(state => state.quiz.questions)

  const totalAnswers = useSelector(state => state.quiz.answers)

  const correctAnswers = totalAnswers.filter(answer => answer.isCorrect === true)

  return (
    <EndgameWrapper>
      <Endgame>YAY! You got {correctAnswers.length} /of {totalQuestions.length} points!</Endgame>
      <RestartButton />
    </EndgameWrapper>
  )
}

const Endgame = styled.h1`
  color: #75a086;
  font-size: 36px;
  text-align: center;
`

const EndgameWrapper = styled.section`
width: 550px;
height: 550px;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
margin: auto;
background: #ffffff56;
border-radius:0.12em;
`