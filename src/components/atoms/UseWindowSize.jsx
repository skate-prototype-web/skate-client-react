import { useState, useEffect } from 'react'

const useWindowSize = () => {
  const isWindowClient = typeof window === 'object'
  const [windowSize, setWindowSize] = useState(
    isWindowClient ? window.innerWidth : undefined
  )
  return windowSize
}

export default useWindowSize
