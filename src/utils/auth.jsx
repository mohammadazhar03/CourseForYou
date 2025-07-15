// ✅ utils/auth.js
export function getUsers() {
    const users = localStorage.getItem('users')
    return users ? JSON.parse(users) : []
  }
  
  export function registerUser(user) {
    const users = getUsers()
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))
  }
  
  export function authenticateUser(username, password, role) {
    const users = getUsers()
    return users.find(user => user.username === username && user.password === password && user.role === role)
  }