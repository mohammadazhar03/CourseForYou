// ✅ App.jsx
import { Routes, Route,useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import StudentLogin from './pages/StudentLogin'
import StaffLogin from './pages/StaffLogin'
import StudentDashboard from './pages/StudentDashboard'
import StaffDashboard from './pages/StaffDashboard'
import CourseDetails from './components/CoursesDetails'
import { useEffect, useState } from 'react'


function App() {
  const location= useLocation()
  const [key,setKey]=useState();

  useEffect(()=>{
      setKey(prev => prev+1)
  },[location])
  return (
    <>
      <Navbar key={key}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/staff-dashboard" element={<StaffDashboard />} />

        <Route path="/courses/:courseId" element={<CourseDetails />} />
      </Routes>
    </>
  )
}

export default App
