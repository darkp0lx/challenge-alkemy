export const initialState = {
  team: [],
  user: null,
  data: []
}

export const actionTypes = {
  ADD_TO_TEAM: 'ADD_TO_TEAM',
  DELETE_TO_TEAM: 'DELETE_TO_TEAM',
  CHANGE_USER: ' CHANGE_USER',
  SEARCH_HERO: ' SEARCH_HERO',
  RESET_USER: ' RESET_USER'
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_TEAM:
      console.log(action, 'action add')
      const exist = state.team.find(item => item?.id === action.hero?.id)
      if (exist) {
        return {
          ...state
        }
      } else {
        return {
          ...state,
          team: [...state.team, action.hero],
          good: state.team?.filter(item => item.biography.alignment === 'good'),
          bad: state.team?.filter(item => item.biography.alignment === 'bad')
        }
      }

    case actionTypes.DELETE_TO_TEAM:
      console.log(action, 'action delete')

      return {
        ...state,
        team: state.team?.filter(item => item !== action.hero),
        good: state.good?.slice(0, state.good.length - 1)
      }
    case actionTypes.CHANGE_USER:
      return {
        ...state,
        user: action.user
      }
    case actionTypes.SEARCH_HERO:
      return {
        ...state,
        data: action.data
      }
    case actionTypes.RESET_USER:
      console.log('log out')
      console.log(action, 'action')

      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}
export default reducer
