import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // Close navbar on route change
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg px-4 custom-navbar">
      <Link className="navbar-brand text-white fw-bold" to="/">CourseForYou</Link>

      <button className="btn btn-outline-light d-lg-none" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navLinks">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/courses">Courses</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link login-link" to="/student-login">Student Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link login-link" to="/staff-login">Staff Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-accent text-white ms-2" to="/signup">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
