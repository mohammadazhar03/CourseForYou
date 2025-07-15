import React from 'react';
import AboutCarousel from '../components/Carousel';

export default function About() {
  return (
    <div className="about-page py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">About <span className="text-accent">CourseForYou</span></h2>
          <p className="about-text lead">Empowering future tech professionals through quality learning and real-world experience.</p>
        </div>
        <AboutCarousel />
      </div>


      <section className="py-4 text-center">
  <h3 className="fw-bold text-primary">Our Mission</h3>
  <p className=" lead">To empower students with real-world tech skills and help them launch successful careers.</p>

  <h3 className="fw-bold text-primary mt-4">Our Vision</h3>
  <p className=" lead">To become the most trusted online platform for practical, project-based learning in India and beyond.</p>
</section>


    <section className="py-5 bg-light text-center">
  <div className="row">
    <div className="col-md-3"><h4 className="text-primary fw-bold">5000+</h4><p>Students Trained</p></div>
    <div className="col-md-3"><h4 className="text-primary fw-bold">20+</h4><p>Industry Mentors</p></div>
    <div className="col-md-3"><h4 className="text-primary fw-bold">80%</h4><p>Placement Rate</p></div>
    <div className="col-md-3"><h4 className="text-primary fw-bold">50+</h4><p>Live Projects</p></div>
  </div>
</section>

<div className="text-center mt-5">
  <h4>Ready to start your journey?</h4>
  <a href="/courses" className="btn btn-primary mt-2">Explore Courses</a>
</div>


    </div>
  );
}
