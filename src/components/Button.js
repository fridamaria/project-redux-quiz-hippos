import React from 'react'
import styled from 'styled-components'

export const Button = ({ onClick, buttonTitle }) => {

  return (
    <QuizButton
      onClick={onClick}>{buttonTitle}</QuizButton>
  )
}

const QuizButton = styled.button`
  background-color: blue;
`