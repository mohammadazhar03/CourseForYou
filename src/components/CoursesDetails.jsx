import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import courseData from '../Assets/CourseData' // your file path

export default function CourseDetails() {
  const { courseId } = useParams();
  const course = courseData[courseId];
    
  if (!course) return <Navigate to="/courses" replace />;

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-3">{course.title}</h2>
      <p className="detail-text mb-4">Become a pro with hands-on skills and real-world projects.</p>

      <div className="row">
        <div className="col-md-8">
          <div className="d-flex align-items-center mb-4">
            <img src={course.instructor.photo} alt="Instructor" className="rounded-circle me-3" width="60" height="60" />
            <div>
              <h6 className="mb-0">{course.instructor.name}</h6>
              <small className="detail-text">{course.instructor.role}</small>
            </div>
          </div>

          <div className="mb-3">
            <strong>Duration:</strong> {course.duration}<br />
            <strong>Price:</strong> <span className="text-success fw-semibold">{course.price}</span>
          </div>

          <div className="mb-4">
            <h5 className="fw-bold">Requirements</h5>
            <ul>{course.requirements.map((req, i) => <li key={i}>{req}</li>)}</ul>
          </div>

          <div className="mb-5">
            <h5 className="fw-bold mb-3">Full Syllabus</h5>
            <div className="accordion" id="syllabusAccordion">
              {course.syllabus.map((item, idx) => (
                <div className="accordion-item" key={idx}>
                  <h2 className="accordion-header" id={`heading${idx}`}>
                    <button
                      className={`accordion-button ${idx !== 0 ? 'collapsed' : ''}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${idx}`}
                      aria-expanded={idx === 0 ? "true" : "false"}
                      aria-controls={`collapse${idx}`}
                    >
                      {item.week}
                    </button>
                  </h2>
                  <div
                    id={`collapse${idx}`}
                    className={`accordion-collapse collapse ${idx === 0 ? 'show' : ''}`}
                    aria-labelledby={`heading${idx}`}
                    data-bs-parent="#syllabusAccordion"
                  >
                    <div className="accordion-body">{item.topic}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="btn btn-primary btn-lg">Enroll Now</button>
        </div>

        <div className="col-md-4 text-center">
          <img
            src={`https://source.unsplash.com/400x300/?${course.title.replace(/\s/g, "-")}`}
            alt="Course"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}
