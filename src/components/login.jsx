// @ts-nocheck
import React, { useState } from 'react'
import './login.css'
import LandingPage from '../landingPage'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const DEFAULT_USER = 'admin'
const DEFAULT_PASS = 'password123'

const Login = () => {
  const [userId, setUserId] = useState()
  const [password, setPassword] = useState()
  const [message, setMessage] = useState('')
  const [accessGranted, setAccessGranted] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!userId || !password) {
      setMessage('Please enter both userID and password.')
      return
    }

    if (userId === DEFAULT_USER && password === DEFAULT_PASS) {
      setMessage('Login successful!')
        setAccessGranted(true)
    } else {
      setMessage('Invalid credentials.')
        setAccessGranted(false)
    }
  }

  if (accessGranted) {
    return <LandingPage />
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign in</h2>

        <label htmlFor="userId">User ID</label>
        <input
          id="userId"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter user ID"
        />

        <label htmlFor="password">Password</label>
        <div className="password-wrapper">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <button
            type="button"
            className="password-toggle"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            onClick={() => setShowPassword((s) => !s)}
          >
            {showPassword ? (
              <VisibilityIcon />
            ) : (
                <VisibilityOffIcon />
            )}
          </button>
        </div>

        <button type="submit" className='login-button'>Login</button>

        {message && <div className="login-message">{message}</div>}

        {/* <div className="login-hint">Default credentials: <strong>{DEFAULT_USER}</strong> / <strong>{DEFAULT_PASS}</strong></div> */}
      </form>
    </div>
  )
}

export default Login
