import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ResultScreen = ({ choice, setStep }) => {
  const questions = {
    body: [
      'Describe how you’d worship my body in one word.',
      'Would you rather kiss me for 24 hours or cuddle for a week?',
      "What’s the wildest place you'd imagine us being together?",
    ],
    mind: [
      'If I controlled your thoughts for a day, what’s the naughtiest thing I’d make you do?',
      'What’s the most tempting idea you’ve ever had about me?',
      'Finish this sentence: My mind + your mind = _____.',
    ],
    money: [
      'What would you spend my entire bank balance on?',
      'Would you share a $1M lottery win with me if you won it?',
      "Describe the luxury date you'd plan for me with my money.",
    ],
    secrets: [
      'What’s a secret you’ve never told anyone that you’d tell me?',
      'Would you expose my diary for a million dollars?',
      'If I had a dangerous secret, would you protect it forever?',
    ],
    fantasies: [
      'What’s the wildest fantasy you’ve ever had about me?',
      'If you could create a fantasy world for us, what would it look like?',
      'Describe a ‘dream scenario’ involving just you, me, and a deserted island.',
    ],
  }

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [showRejection, setShowRejection] = useState(false)

  const handleNext = () => {
    if (currentQuestionIndex < questions[choice].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setShowRejection(true)
    }
  }

  const rejectionMessages = {
    body: 'Sorry, you’re not ready for this temple!',
    mind: 'Rejected! My thoughts are too deep for you.',
    money: 'Nope. My wallet deserves better.',
    secrets: 'Whoops! You’re not trustworthy enough.',
    fantasies: 'Rejected! My dreams don’t include you.',
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='screen'
    >
      {!showRejection ? (
        <>
          <h1>{`Path: ${choice.toUpperCase()}`}</h1>
          <p>{questions[choice][currentQuestionIndex]}</p>
          <button onClick={handleNext}>Next Question</button>
        </>
      ) : (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          className='rejection'
        >
          <h1>{rejectionMessages[choice]}</h1>
          <p>But hey, at least you tried! 😉</p>
          <button onClick={() => setStep(1)}>Start Over</button>
        </motion.div>
      )}
    </motion.div>
  )
}

export default ResultScreen
