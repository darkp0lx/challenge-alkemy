import axios from 'axios'
import { useHistory } from 'react-router'
import { actionTypes } from '../Store/reducer'
import { useStateValue } from '../Store/StateProvider'

export const usePermissions = (valores, actions) => {
  const [{ user }, dispatch] = useStateValue()
  const history = useHistory()

  axios
    .post('http://challenge-react.alkemy.org/', valores)
    .then(response => {
      localStorage.setItem('token', response.data.token)
      dispatch({
        type: actionTypes.CHANGE_USER,
        user: response
      })
      history.push('/')
    })
    .catch(err => {
      alert('contraseña o email invalidos')
      actions.resetForm({})
    })
}
