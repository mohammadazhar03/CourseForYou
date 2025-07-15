import React from 'react';

const testimonials = [
  {
    name: "Aarav Patel",
    course: "React Development",
    review:
      "CourseForYou helped me land my first frontend developer job within 3 months! The instructors were amazing and the projects felt real.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sara Ali",
    course: "Data Science",
    review:
      "The data science curriculum was very hands-on and easy to follow. I cracked my internship because of their mock interviews and resume support.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Verma",
    course: "Cyber Security",
    review:
      "One of the best learning platforms! Loved how detailed and practical the cyber security modules were. Highly recommend it.",
    img: "https://randomuser.me/api/portraits/men/47.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-5 bg-light" id="testimonials">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold text-dark">Student Testimonials</h2>
        <p className="mb-5 text-muted">Hear from learners who’ve grown with us.</p>

        <div className="row g-4">
          {testimonials.map((student, index) => (
            <div className="col-md-4" key={index}>
              <div className="card testimonial-card border-0 shadow-sm h-100">
                <div className="card-body">
                  <img
                    src={student.img}
                    alt={student.name}
                    className="rounded-circle mb-3"
                    width="70"
                    height="70"
                  />
                  <h5 className="card-title">{student.name}</h5>
                  <p className="text-primary fw-medium mb-1">{student.course}</p>
                  <p className="card-text text-muted">“{student.review}”</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
