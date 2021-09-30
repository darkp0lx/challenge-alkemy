import { Nav } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { actionTypes } from '../Store/reducer'
import { useStateValue } from '../Store/StateProvider'

export const Header = () => {
  const [{ user }, dispatch] = useStateValue()
  const history = useHistory()

  const handleGetOut = () => {
    dispatch({
      type: actionTypes.RESET_USER,
      user: null
    })
    history?.push('/login')
  }
  return (
    <Nav
      activeKey='/home'
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      className='shadow pl-3  d-flex align-items-center bg-white  '
      style={{
        width: '100%',
        height: '12vh',
        zIndex: 1,
        position: 'fixed',
        top: 0,
        paddingLeft: '1em'
      }}
    >
      <Nav.Item>
        <Link to='/'>
          <img
            width={70}
            src='/images/logo.png'
            className='img-fluid'
            alt='logoApp'
          />
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          style={{
            marginRight: '10px',
            marginLeft: '10px',
            textDecoration: 'none'
          }}
          to='/'
        >
          Home
        </Link>
      </Nav.Item>
      {user ? (
        <Nav.Item>
          <button onClick={handleGetOut} type='button' class='btn btn-danger'>
            salir
          </button>
        </Nav.Item>
      ) : (
        <Nav.Item>
          <Link to='/login'>Login In</Link>
        </Nav.Item>
      )}
    </Nav>
  )
}
