import { useState, useEffect } from 'react'

const words = ['building apps', 'making cool stuff', 'learning new things', 'shipping projects']

export default function TypingText() {
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    const currentWord = words[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 60)
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 30)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setWordIndex((wordIndex + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, wordIndex])

  return (
    <span className="relative">
      {displayText}
    </span>
  )
}
