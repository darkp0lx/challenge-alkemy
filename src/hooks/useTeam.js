import { actionTypes } from '../Store/reducer'
import { useStateValue } from '../Store/StateProvider'

export const useTeam = hero => {
  const [{ team }, dispatch] = useStateValue()

  const addToTeam = () => {
    console.log(hero, 'hero')
    dispatch({
      type: actionTypes.ADD_TO_TEAM,
      hero: hero
    })
  }
  const deleteToTeam = () => {
    console.log(hero, 'hero')

    dispatch({
      type: actionTypes.DELETE_TO_TEAM,
      hero: hero
    })
    alert('eliminado!')
  }

  const teamHeros = () => {
    return team?.filter(hero => hero.biography?.alignment === 'good')
  }
  const teamBadBoys = () => {
    return team?.filter(hero => hero.biography?.alignment === 'bad')
  }
  const isHero = () => {
    if (hero?.biography.alignment === undefined) {
      return false
    }
    return hero?.biography.alignment === 'good' && true
  }
  const isBadBoy = () => {
    return hero?.biography.alignment === 'bad' && true
  }

  const isTeam = () => {
    const isInTeam = team.find(person => person?.id === hero?.id)
    return isInTeam ? true : false
  }

  return {
    team,
    addToTeam,
    deleteToTeam,
    isTeam,
    teamHeros,
    teamBadBoys,
    isHero,
    isBadBoy
  }
}
