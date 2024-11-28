// QuestionScreen.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const QuestionScreen = ({ setStep, choice, answers, setAnswers }) => {
  const questions = {
    body: [
      'If you could describe my body using only three words, what would they be?',
      "What's one thing you'd love to do with me that you've never told anyone?",
      'How would you make our first intimate moment unforgettable?',
    ],
    mind: [
      "What's a thought about me that keeps you up at night?",
      'If we could share a secret desire, what would yours be?',
      'How would you tease my mind and keep me intrigued?',
    ],
    money: [
      'If I gave you unlimited access to my wealth for one day, how would we spend it together?',
      "What's the most luxurious experience you'd plan for just the two of us?",
      'If we owned a private island, what fantasies would you want to fulfill there?',
    ],
    secrets: [
      "Tell me a secret passion you've always wanted to explore.",
      'If I shared my deepest secrets, how would you handle them?',
      "What's a hidden side of you that you'd only reveal to someone special?",
    ],
    fantasies: [
      "Describe in detail a fantasy involving us that you've never shared before.",
      'If we could step into any romantic movie scene, which one would it be and why?',
      "What's the most exhilarating adventure you'd want us to embark on together?",
    ],
  }

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleNext = () => {
    const updatedAnswers = [...answers]
    updatedAnswers[currentQuestion] = inputValue
    setAnswers(updatedAnswers)
    setInputValue('')

    if (currentQuestion < questions[choice].length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setStep(4) // Move to Rejection Screen
    }
  }

  const progress = ((currentQuestion + 1) / questions[choice].length) * 100

  return (
    <motion.div
      className='screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Let's get to know each other...</h1>
      <p>{questions[choice][currentQuestion]}</p>
      <textarea
        placeholder='Your answer...'
        value={inputValue}
        onChange={handleInputChange}
        rows={4}
      />
      <button onClick={handleNext} disabled={!inputValue.trim()}>
        Next
      </button>
      <div className='progress-bar'>
        <div className='progress' style={{ width: `${progress}%` }}></div>
      </div>
      <p>
        Question {currentQuestion + 1} of {questions[choice].length}
      </p>
    </motion.div>
  )
}

export default QuestionScreen
