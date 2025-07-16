import React from 'react';
import Accordian from '../components/Accordian';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonial';
import Footer from '../components/Footer';
import '../styles/main.css';
Testimonials
const Home = () => {
  return (
    <>
      <div className="container-fluid bg-light py-5">
        <div className="hero-gradient container">
          <div className="row align-items-center">
            
            {/* Hero Text */}
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-4 fw-bold mb-3 text-primary">
                Welcome to <span className="text-primay">CourseForYou</span> Academy
              </h1>
              <p className=" home-text lead mb-4">
                Your one-stop platform for mastering IT skills — from web development to cybersecurity, cloud, AI, and more.
              </p>
              <a href="#courses" className=" exploreBtn ">
                Explore Courses
              </a>
            </div>

            {/* Hero Image */}
            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <img
                src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Course Illustration"
                className="img-fluid rounded shadow"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Tabs Section */}
      <div className="container mt-5" id="courses">
        <h2 className="text-center mb-4 text-Header">Explore Our Popular IT Courses</h2>
        <Accordian />
      </div>

      {/* WHY US Section */}
      <div className="container mt-5 " id="courses">
        <WhyUs />
      </div>
      {/* Testimonial Section */}
      <div className="container mt-5 " id="courses">
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
