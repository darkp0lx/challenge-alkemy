import axios from 'axios'
import { useEffect, useState } from 'react'

export const useGetHero = id => {
  const [hero, setHero] = useState()

  useEffect(() => {
    fetchHero()
  }, [])

  const fetchHero = () => {
    try {
      axios
        .get(`https://superheroapi.com/api/3741049589297474/${id}`)
        .then(res => {
          const hero = res.data
          setHero(hero)
        })
    } catch (error) {
      console.log(error.message)
    }
  }
  return { hero }
}
