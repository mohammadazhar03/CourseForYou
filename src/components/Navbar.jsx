import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/media.css'
import Signup from '../pages/Signup' // ✅ Make sure this path is correct

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // ✅ Add this

  const toggleSidebar = () => setIsOpen(!isOpen);
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
            <button className="btn btn-outline-light ms-2" onClick={() => setShowModal(true)}>Login</button>
          </li>
        </ul>
      </div>

      {/* Modal outside navbar collapse to avoid layout issues */}
      <Signup isOpen={showModal} onClose={() => setShowModal(false)} />
    </nav>
  );
}

export default Navbar;
