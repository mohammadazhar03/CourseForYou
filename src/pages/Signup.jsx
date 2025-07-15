// ✅ pages/Signup.jsx
import { useState } from 'react'
import { registerUser } from '../utils/auth'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('student')

  const handleSignup = (e) => {
    e.preventDefault()
    registerUser({ id: Date.now(), username, password, role })
    alert(`${role} registered successfully!`)
    setUsername('')
    setPassword('')
  }

  return (
    <div className="container mt-4">
      <h3>Signup</h3>
      <form onSubmit={handleSignup}>
        <input className="form-control mb-2" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input className="form-control mb-2" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <select className="form-control mb-2" value={role} onChange={e => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="staff">Staff</option>
        </select>
        <button className="btn btn-success">Signup</button>
      </form>
    </div>
  )
}

export default Signup