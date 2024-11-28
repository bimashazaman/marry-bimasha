// ChoiceScreen.jsx
import React from 'react'
import { motion } from 'framer-motion'

const ChoiceScreen = ({ setStep, setChoice }) => {
  const handleChoice = (option) => {
    setChoice(option)
    setStep(3)
  }

  return (
    <motion.div
      className='screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Choose one option:</h1>
      <button onClick={() => handleChoice('body')}>
        You will get my body only
      </button>
      <button onClick={() => handleChoice('mind')}>
        You will get my mind only
      </button>
      <button onClick={() => handleChoice('money')}>
        You will get my money only
      </button>
      <button onClick={() => handleChoice('secrets')}>
        You will get my secrets only
      </button>
      <button onClick={() => handleChoice('fantasies')}>
        You will get my crazy fantasies only
      </button>
    </motion.div>
  )
}

export default ChoiceScreen
