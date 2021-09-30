import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { Header } from './Components/Header'
import { Home } from './Components/page/Home'
import Login from './Components/page/Login'
import { useStateValue } from './Store/StateProvider'
import { DetailHero } from './Components/heros/DetailHero'
import { ProtectedRoute } from './Components/rutes/ProtectedRoute'

function App () {
  const [{ user }] = useStateValue()
  return (
    <BrowserRouter>
      <div className='App'>
        <meta
          http-equiv='Content-Security-Policy'
          content='upgrade-insecure-requests'
        />
        <Header />
        <Switch>
          <ProtectedRoute exact path='/' component={Home} />
          <ProtectedRoute exact path='/heros/:id' component={DetailHero} />
          <Route
            path='/login'
            exact
            render={() => {
              return user ? <Redirect to='/' /> : <Login />
            }}
          />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
