import { Redirect, Route } from 'react-router'
import { useStateValue } from '../../Store/StateProvider'

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [{ user }] = useStateValue()
  return (
    <Route {...rest}>
      {user || user?.length === 0 ? <Component /> : <Redirect to='/login' />}
    </Route>
  )
}
