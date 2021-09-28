import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({ history }) => {

  const { user, dispatch } = useContext(AuthContext)


  const handleLogin = () => {
    // history.push('/')
    /* dispatch({ type: types.login, payload: { name: 'Adro' } }) */
    history.replace('/')
  }

  return (
    <div className='container mt-5' >
      <h1>Login</h1>
      <hr />

      <button
        className='btn btn-primary'
        onClick={handleLogin}
      >
        login
      </button>
    </div>
  )
}
