// ✅ components/LoginForm.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authenticateUser } from '../utils/auth'

function LoginForm({ role }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const user = authenticateUser(username, password, role)
    if (user) {
      alert(`Welcome ${user.username}`)
      navigate(role === 'student' ? '/student-dashboard' : '/staff-dashboard')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className="container mt-4">
      <h3>{role.charAt(0).toUpperCase() + role.slice(1)} Login</h3>
      <form onSubmit={handleLogin}>
        <input className="form-control mb-2" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input className="form-control mb-2" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default LoginForm