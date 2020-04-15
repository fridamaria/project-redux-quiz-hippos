
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { quiz } from 'reducers/quiz'
import { Button } from './Button'
import { ProgressBar } from './ProgressBar'
import { Summary } from 'components/Summary'

export const CurrentQuestion = () => {
  const [answerIndex, setAnswerIndex] = useState() // sätt answerIndex när man klickat på ett option till att vara det indexet.

  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )
  const answer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  )

  const dispatch = useDispatch()

  const quizOver = useSelector(state => state.quiz.quizOver)

  const handleOnClick = (index) => {
    dispatch(
      quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index })
    )
    setAnswerIndex(index) // sätta index på den man klickat på
  }

  const setClassName = (index) => {
    // för att bara sätta en class på det option som man klickat på
    // och om det är rätt eller fel så sätts right eller wrong klassen
    if (answerIndex === index) {
      return (question.correctAnswerIndex === index
        ? 'correctAnswer'
        : 'wrongAnswer')
    }
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  if (quizOver) {
    return (
      <Summary />
    )
  }

  return (
    <QuestionContainer>
      <Question>Question: {question.questionText}</Question>
      {question.options.map((option, index) => (
        <Option key={index}>
          <OptionInput
            // className={(answerIndex !== undefined) && setClassName(index)} 
            // om answerIndex har ett värde, kör setClassName
            className={(answerIndex === undefined) ? '' : setClassName(index)}
            type='button'
            id={index}
            name='option'
            value={option}
            onClick={() => handleOnClick(index)}
          />
        </Option>
      ))}
      <Button
        onClick={() => {
          dispatch(quiz.actions.goToNextQuestion())
          setAnswerIndex()
        }}
        buttonTitle='Next'
      />
      <ProgressBar question={question} />
    </QuestionContainer>
  )
}

const Question = styled.h1`
  color: #75a086;
  font-size: 36px;
  text-align: center;
`
const Option = styled.label`
`

const OptionInput = styled.input`
  display:inline-block;
  height: 70px;
  min-width: 250px;
  padding:0.35em 1.2em;
  border:0.1em solid #000;
  margin:0 0.3em 0.3em 0;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:700;
  font-size: 24px;
  color:#000;
  text-align:center;
  transition: all 0.2s;
  `

const QuestionContainer = styled.section`
  width: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  background: #ffffff56;
  border-radius:0.12em;
  `