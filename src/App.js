import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import IntroScreen from './components/IntroScreen'
import ChoiceScreen from './components/ChoiceScreen'
import QuestionScreen from './components/QuestionScreen'
import RejectionScreen from './components/RejectionScreen'
import './styles/global.css'

function App() {
  const [step, setStep] = useState(1)
  const [choice, setChoice] = useState(null)
  const [answers, setAnswers] = useState([])

  return (
    <AnimatePresence>
      {step === 1 && <IntroScreen setStep={setStep} />}
      {step === 2 && <ChoiceScreen setStep={setStep} setChoice={setChoice} />}
      {step === 3 && (
        <QuestionScreen
          setStep={setStep}
          choice={choice}
          answers={answers}
          setAnswers={setAnswers}
        />
      )}
      {step === 4 && (
        <RejectionScreen
          setStep={setStep}
          choice={choice}
          answers={answers}
          setAnswers={setAnswers} // Ensure this line is present
        />
      )}
    </AnimatePresence>
  )
}

export default App
