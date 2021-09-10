import { useEffect, useState } from 'react'

const mobileQuery = '(min-width:200px) and (max-width:600px)'
const tabletQuery = '(min-width:601px) and (max-width:1023px)'
const laptopQuery = '(min-width:1024px)'

export function useDevice () {
  const [state, changeState] = useState({
    isMobile: true,
    isTablet: false,
    isLaptop: false
  })

  useEffect(() => {
    function handleResize () {
      const isLaptop = window.matchMedia(laptopQuery).matches
      const isTablet = window.matchMedia(tabletQuery).matches
      const isMobile = window.matchMedia(mobileQuery).matches

      changeState({ isMobile, isTablet, isLaptop })
    }
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return state
}
