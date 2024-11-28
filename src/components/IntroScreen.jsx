// IntroScreen.jsx
import React from 'react'
import { motion } from 'framer-motion'

const IntroScreen = ({ setStep }) => {
  return (
    <motion.div
      className='screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>I will marry 3 guys.</h1>
      <p>Are you interested in being my husband?</p>
      <button onClick={() => setStep(2)}>Yes, absolutely!</button>
    </motion.div>
  )
}

export default IntroScreen
