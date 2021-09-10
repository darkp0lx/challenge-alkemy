import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { Field, Form, Formik } from 'formik'
import { actionTypes } from '../../Store/reducer'
import { useStateValue } from '../../Store/StateProvider'

export const Login = () => {
  const [{ user }, dispatch] = useStateValue()
  const history = useHistory()

  return (
    <Container>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={valores => {
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
            .catch(err => alert('contraseña o email invalidos'))
        }}
        validate={valores => {
          let errors = {}
          if (!valores.email) {
            errors.email = 'por favor ingresa un correo'
          } else if (
            !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
              valores.email
            )
          ) {
            errors.email =
              'el correo solo puede contener letras,numeros,puntos,guiones y guion bajo.'
          }
          if (!valores.password) {
            errors.password = 'por favor ingresa una contraseña'
          }
          return errors
        }}
      >
        {({ values, errors, handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            className=' bg-white d-flex flex-column justify-content-center p-3 rounded w-25-sm w-45'
            id='Form'
          >
            <h2 className='text-muted'>Login in</h2>
            <img src='/images/logo.png' />
            <div className='form-group'>
              <label for='exampleInputEmail1'>Email address</label>
              <Field
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Enter email'
                name='email'
              />
              {errors.email && (
                <div className='alert alert-danger' role='alert'>
                  {errors.email}
                </div>
              )}
            </div>
            <div className='form-group'>
              <label for='exampleInputPassword1'>Password</label>
              <Field
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                placeholder='Password'
                name='password'
              />
              {errors.password && (
                <div className='alert alert-danger' role='alert'>
                  {errors.password}
                </div>
              )}
            </div>

            <button
              style={{ width: '100%' }}
              type='submit'
              class=' mt-4 btn btn-primary'
            >
              Entrar
            </button>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

const Container = styled.div`
  height: 84vh;
  width: 100%;
  margin-top: 6em;
  display: flex;
  align-items: center;
  #Form {
    text-align: left;
    h2 {
      text-align: center;
    }
    img {
      height: 50px;
      width: 100px;
      margin: 0 auto;
    }
    margin: 0 auto;
    width: 300px;
    height: 370px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    @media (min-width: 320px) and(max-height:720px) {
      width: 60%;
    }
  }
`
