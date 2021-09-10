import { actionTypes } from '../Store/reducer'
import { useStateValue } from '../Store/StateProvider'

export const useTeam = hero => {
  const [{ team }, dispatch] = useStateValue()

  const addToTeam = () => {
    dispatch({
      type: actionTypes.ADD_TO_TEAM,
      hero: hero
    })
  }
  const deleteToTeam = () => {
    dispatch({
      type: actionTypes.DELETE_TO_TEAM,
      hero: hero
    })
  }

  const teamHeros = () => {
    return team?.filter(hero => hero.biography?.alignment == 'good')
  }
  const teamBadBoys = () => {
    return team?.filter(hero => hero.biography?.alignment == 'bad')
  }
  const isHero = () => {
    return hero?.biography.alignment == 'good' && true
  }
  const isBadBoy = () => {
    return hero?.biography.alignment == 'bad' && true
  }

  const isTeam = () => {
    const isInTeam = team.find(person => person?.id == hero?.id)
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
