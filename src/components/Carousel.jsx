import React, { useState } from 'react';
import '../styles/About.css';
const slides = [
  {
    title: "Live Interactive Classes",
    description: "Join live sessions with industry mentors and get real-time feedback on your work.",
    image: "https://www.appsquadz.com/img/live_classess/live-education-banner.png"
  },
  {
    title: "Real-World Projects",
    description: "Gain hands-on experience by working on practical, industry-relevant assignments.",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*iUczkx_UuH1VIBn8_XV_QQ.png"
  },
  {
    title: "Interview Preparation",
    description: "Get career-ready with expert guidance on resumes, portfolios, and mock interviews.",
    image: "https://imageio.forbes.com/specials-images/imageserve/64f4ed1a9705d34172b01582/The-manager-interviewing-a-potential-candidate--showing-the-importance-of-how-you/960x0.jpg?format=jpg&width=960"
  },
  {
    title: "Lifetime Learning Access",
    description: "Revisit your courses anytime with lifetime access to your learning materials.",
    image: "https://www.hurix.com/wp-content/uploads/2023/12/Lifelong-Learning.jpg"
  }
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="row align-items-center custom-carousel">
      {/* Text Left */}
      <div className="col-md-6 mb-4">
        <h3 className="fw-bold text-primary">{slides[index].title}</h3>
        <p className="lead ">{slides[index].description}</p>
        <div className="d-flex gap-3 mt-3">
          <button className="aboutBtn" onClick={handlePrev}>← Prev</button>
          <button className="aboutBtn" onClick={handleNext}>Next →</button>
        </div>
      </div>

      {/* Image Right */}
      <div className="col-md-6 mb-4 text-center">
        <img
          src={slides[index].image}
          alt={slides[index].title}
          className="img-fluid rounded shadow"
          style={{ maxHeight: '350px', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
