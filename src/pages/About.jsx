import React from 'react';
import AboutCarousel from '../components/Carousel';

export default function About() {
  return (
    <div className="about-page py-3 bg-light">
      <div className="container">
        <div className="text-center mb-2">
          <h2 className="fw-bold text-dark">About <span className="text-accent">CourseForYou</span></h2>
          <p className="about-text lead">Empowering future tech professionals through quality learning and real-world experience.</p>
        </div>
        <AboutCarousel />
      </div>


      <section className="py-5 text-center">
  <div className="container shadow-lg py-3">
    <h3 className="fw-bold text-primary mb-3">Our Mission</h3>
    <p className="lead text-secondary">
      To empower students with real-world tech skills and help them launch successful careers.
    </p>

    <h3 className="fw-bold text-primary mt-5 mb-3">Our Vision</h3>
    <p className="lead text-secondary">
      To become the most trusted online platform for practical, project-based learning in India and beyond.
    </p>
  </div>
</section>

<section className="py-5  text-center ">
  <div className="container shadow-lg py-3">
    <div className="row gy-4">
      <div className="col-md-3">
        <h4 className="text-primary fw-bold display-6">5000+</h4>
        <p className="mb-0 text-muted">Students Trained</p>
      </div>
      <div className="col-md-3">
        <h4 className="text-primary fw-bold display-6">20+</h4>
        <p className="mb-0 text-muted">Industry Mentors</p>
      </div>
      <div className="col-md-3">
        <h4 className="text-primary fw-bold display-6">80%</h4>
        <p className="mb-0 text-muted">Placement Rate</p>
      </div>
      <div className="col-md-3">
        <h4 className="text-primary fw-bold display-6">50+</h4>
        <p className="mb-0 text-muted">Live Projects</p>
      </div>
    </div>
  </div>
</section>

<div className="text-center my-5">
  <h4 className="fw-semibold " style={{color:"blue"}}>Ready to start your journey?</h4>
  <a href="/courses" className="btn btn-primary btn-lg mt-3 shadow-sm">
    Explore Courses
  </a>
</div>

    </div>
  );
}
