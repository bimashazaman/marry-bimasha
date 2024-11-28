import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

const RejectionScreen = ({ setStep, choice, answers, setAnswers }) => {
  const [emailSent, setEmailSent] = useState(false) // State to track email status
  const [emailError, setEmailError] = useState(null) // State to track email errors

  const form = useRef() // Reference to the form element
  const emailSentRef = useRef(false) // Ref to track if email has been sent

  const rejectionMessages = {
    body: "Oh dear, it seems you can't handle all of this! Better luck next time. 😉",
    mind: "Hmm, our minds don't quite sync up. But nice try! 😏",
    money:
      'Looks like you were more into the money than me! Farewell, treasure hunter! 💰',
    secrets: 'Some secrets are better left untold. Goodbye, curious soul! 🕵️‍♂️',
    fantasies:
      "Wow, that's a bit too adventurous even for me! Time to wake up from the dream. 🌌",
  }

  // Function to send email using EmailJS
  const sendEmail = () => {
    if (emailSentRef.current) {
      // Email has already been sent, so do nothing
      return
    }

    emailjs
      .sendForm(
        'service_lqmxyeu', // Replace with your EmailJS service ID
        'template_z04zdf9', // Replace with your EmailJS template ID
        form.current,
        {
          publicKey: 'IJ05rJVpQfd3Dxv-0', // Replace with your EmailJS Public Key
        }
      )
      .then(
        (response) => {
          console.log(
            'Email sent successfully!',
            response.status,
            response.text
          )
          setEmailSent(true)
          emailSentRef.current = true // Update the ref to indicate email has been sent
        },
        (err) => {
          console.error('Failed to send email. Error:', err)
          setEmailError(err.text)
        }
      )
  }

  // Prevent double sends in Strict Mode
  useEffect(() => {
    if (!emailSentRef.current) {
      sendEmail()
    }

    return () => {
      emailSentRef.current = false // Reset on unmount to avoid unintended behavior
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Empty dependency array ensures this runs once when the component mounts

  return (
    <motion.div
      className='screen'
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
    >
      <h1>Oops... Rejected! 😈</h1>
      <p>{rejectionMessages[choice]}</p>

      {/* Display email status messages */}
      {emailSent && (
        <p>
          I got your answers! 💌 If I like you, I'm going to come back and marry
          you. 😜 But I did not collect your name or email, so you will be my
          "OJANA SHAMI". Tata! 😂
        </p>
      )}
      {emailError && <p>Error sending email: {emailError}</p>}

      <h2>Your Answers:</h2>
      <div className='answers'>
        {answers.map((answer, index) => (
          <p key={index}>
            <strong>Q{index + 1}:</strong> {answer || 'No answer provided'}
          </p>
        ))}
      </div>

      <button
        onClick={() => {
          setStep(1)
          setAnswers([])
        }}
      >
        Try Again?
      </button>

      {/* Hidden form for emailjs.sendForm */}
      <form ref={form} style={{ display: 'none' }}>
        <input type='text' name='choice' value={choice} readOnly />
        <input type='text' name='answer1' value={answers[0]} readOnly />
        <input type='text' name='answer2' value={answers[1]} readOnly />
        <input type='text' name='answer3' value={answers[2]} readOnly />
      </form>
    </motion.div>
  )
}

export default RejectionScreen
