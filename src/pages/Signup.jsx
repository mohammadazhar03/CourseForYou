import { useState } from 'react';
import '../styles/LoginModal.css'; // Custom CSS for animation

export default function LoginModal({ isOpen, onClose }) {
  const [isSignup, setIsSignup] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: 'student',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup && form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const mode = isSignup ? 'Signup' : 'Login';
    alert(`${mode} success for ${form.username}`);
    onClose();

    // Reset form
    setForm({
      fullName: '',
      username: '',
      password: '',
      confirmPassword: '',
      phone: '',
      role: 'student',
    });
  };

  return (
    <div className={`modal-wrapper ${isOpen ? 'open' : ''}`}>
      <div className={`modal-content ${isSignup ? 'slide-right' : 'slide-left'}`}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h3 className="text-center mb-3">{isSignup ? 'Signup' : 'Login'}</h3>

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <input
                className="form-control mb-2"
                placeholder="Full Name"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
              />
              <input
                className="form-control mb-2"
                placeholder="Phone Number"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </>
          )}

          <input
            className="form-control mb-2"
            placeholder="Email"
            name="username"
            type="email"
            value={form.username}
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-2"
            placeholder="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          {isSignup && (
            <>
              <input
                className="form-control mb-2"
                placeholder="Re-enter Password"
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
              
              <select
                className="form-control mb-2"
                name="role"
                value={form.role}
                onChange={handleChange}
              >
                <option value="student">Student</option>
                <option value="staff">Staff</option>
              </select>
            </>
          )}

          <button className="btn btn-primary w-100">
            {isSignup ? 'Signup' : 'Login'}
          </button>
        </form>

        <p className="text-center mt-3">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
          <button
            className="btn btn-link p-0 ms-2"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? 'Login' : 'Signup'}
          </button>
        </p>
      </div>
    </div>
  );
}
