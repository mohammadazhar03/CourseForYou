import React from 'react';
import { Link } from 'react-router-dom';
const courses = [
  {
    title: "Software Development",
    description: "Full-stack development training with real-world projects.",
    image: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
  },
  {
    title: "Data Science",
    description: "Master AI, Python, ML, and analytics skills.",
    image: "https://media.istockphoto.com/id/1364317541/photo/data-scientists-hand-of-programmer-touching-and-analyzing-development-at-various-information.jpg?s=612x612&w=0&k=20&c=mTnPYtYYxbyOdyeBQcu8LIWwD-31SIIfXSd0IEhhpYg=",
    skills: ["Python", "Pandas", "Machine Learning", "SQL"]
  },
  {
    title: "Cybersecurity",
    description: "Learn ethical hacking and secure systems training.",
    image: "https://media.istockphoto.com/id/1435605327/photo/cybersecurity-concept-global-network-security-technology-business-people-protect-personal.jpg?s=612x612&w=0&k=20&c=9QvqAsfANdpsNcYdZ0WlMd5lKaTR9BvnTpFnrtGbV0s=",
    skills: ["Ethical Hacking", "Network Security", "Kali Linux"]
  },
  {
    title: "UI/UX Design",
    description: "Design intuitive user experiences and beautiful interfaces.",
    image: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?semt=ais_hybrid&w=740",
    skills: ["Figma", "Adobe XD", "Wireframing", "Design Thinking"]
  },
  {
    title: "App Development",
    description: "Build mobile apps using Android, iOS, and cross-platform tools.",
    image: "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?semt=ais_hybrid&w=740",
    skills: ["Flutter", "React Native", "Kotlin", "Swift"]
  },
  {
    title: "Cloud Computing",
    description: "Master deployment and architecture on major cloud platforms.",
    image: "https://img.freepik.com/premium-photo/cloud-computing-technology-online-data-storage-business-network-concept_31965-13411.jpg",
    skills: ["AWS", "Azure", "GCP", "DevOps"]
  },
  {
    title: "DevOps",
    description: "Automate CI/CD pipelines and infrastructure with DevOps tools.",
    image: "https://media.gettyimages.com/id/1303169188/photo/devops-concept.jpg?s=612x612&w=gi&k=20&c=WrL7QAnD4DjejDgrCxcqcX5bNqCZVZQaBVFLnLhy3_o=",
    skills: ["Docker", "Kubernetes", "Jenkins", "Terraform"]
  },
  {
    title: "Artificial Intelligence",
    description: "Build smart systems with deep learning and NLP models.",
    image: "https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=",
    skills: ["Deep Learning", "TensorFlow", "NLP", "Chatbots"]
  },
  {
    title: "Software Testing",
    description: "Learn to test and validate software through automation.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl_xlzZezvOTsg2C6C5wnayLCSwT9IAfU6_g&s",
    skills: ["Manual Testing", "Selenium", "TestNG", "Jest"]
  }
];

export default function Courses() {
  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-4">Courses We Offer</h2>
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={course.image}
                alt={course.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text ">{course.description}</p>
                <div className="mb-2">
                  {course.skills.map((skill, idx) => (
                    <span key={idx} className="badge bg-primary me-1 mb-1">{skill}</span>
                  ))}
                </div>
                <Link to={`/courses/${course.title.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-outline-primary btn-sm">
                View Details</Link>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
