import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    // Simulate form submit
    setSubmitted(true);
    setTimeout(() => {
      alert(`Thank you ${name}, we received your message.`);
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
    }, 500);
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary">Contact Us</h2>
        <p className="contact-text">We’d love to hear from you. Send us a message and we’ll get back soon.</p>
      </div>

      <form className="mx-auto" onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-semibold">Your Name</label>
          <input
            id="name"
            className="form-control"
            placeholder="e.g. Jane Doe"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">Your Email</label>
          <input
            id="email"
            className="form-control"
            type="email"
            placeholder="e.g. jane@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label fw-semibold">Your Message</label>
          <textarea
            id="message"
            className="form-control"
            rows="4"
            placeholder="Type your message here..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={submitted}>
          {submitted ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
