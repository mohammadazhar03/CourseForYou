import React from 'react'
import '../styles/main.css';
function WhyUs() {
  return (
    <div >
            {/* Why Choose Us Section */}
      <section className="py-3 bg-white container-fluid" id="why-us">
        <div className="container text-center whyUs mb-5">
          <h2 className="mb-4 text-Header">Why Choose Us?</h2>
          <p className="mb-5">Empowering students with real skills and real outcomes.</p>

          <div className="row g-4">
            {features.map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <i className={`bi ${item.icon} fs-2 mb-3`} style={{ color: item.color }}></i>
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

const features = [
  {
    title: 'Expert Instructors',
    desc: 'Learn from certified professionals with real-world experience in tech industries.',
    icon: 'bi-person-check-fill',
    color: '#10b981', // emerald
  },
  {
    title: 'Recognized Certification',
    desc: 'Get certified upon course completion and boost your job profile and credibility.',
    icon: 'bi-award-fill',
    color: '#f59e0b', // amber
  },
  {
    title: 'Hands-On Learning',
    desc: 'Work on live projects and real scenarios to sharpen your practical skills.',
    icon: 'bi-laptop-fill',
    color: '#0ea5e9', // sky
  },
  {
    title: 'Flexible Schedules',
    desc: 'Attend live or recorded classes at your convenience – ideal for students & working professionals.',
    icon: 'bi-clock-fill',
    color: '#ef4444', // red
  },
  {
    title: 'Placement Support',
    desc: 'Our career team helps you with resume prep, mock interviews & job referrals.',
    icon: 'bi-briefcase-fill',
    color: '#6366f1', // indigo
  },
];

export default WhyUs
