import React from 'react';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="footer text-white pt-5 pb-3">
      <div className="container-fluid">
        <div className="row">

          {/* Branding */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold text-accent">CourseForYou</h4>
            <p >Empowering future tech professionals with real-world skills and career-ready programs.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4 ">
            <h5 className="text-light">Quick Links</h5>
            <ul className="list-unstyled ">
              <li><a href="/" >Home</a></li>
              <li><a href="/courses" >Courses</a></li>
              <li><a href="/about" >About Us</a></li>
              <li><a href="/contact" >Contact</a></li>
              <li><a href="/signup" >Sign Up</a></li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="col-md-4 mb-4 text-white">
            <h5 className="text-light">Contact Us</h5>
            <p className=" mb-1">📧 azharofficial2703@gmail.com</p>
            <p className=" mb-3">📍 Hyderabad, India</p>

            <div className="social-icons">
              <a href="https://www.facebook.com/nai.maloom.94/" target="_blank" rel="noopener noreferrer" className=" me-3"><FaFacebook/></a>
              <a href="https://www.instagram.com/masochists_7/" target='_blank' className=" me-3 instagram-bg"><FaSquareInstagram/></a>
              <a href="https://www.linkedin.com/in/azharmohd2002" target='_blank' className=" me-3"><FaLinkedin/></a>
              <a href="https://github.com/mohammadazhar03" target='_blank' ><FaSquareGithub/></a>
            </div>
          </div>
        </div>

        <hr className="border-gray" />
        <div className="text-center small ">
          © {new Date().getFullYear()} CourseForYou Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
