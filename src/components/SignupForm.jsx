import React, { useState } from 'react';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    otp: '',
  });

  const [step, setStep] = useState(1);
  const [generatedOtp, setGeneratedOtp] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Simulate OTP generation
    const fakeOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(fakeOtp);
    alert(`Your OTP is: ${fakeOtp}`); // Simulate sending OTP
    setStep(2);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (formData.otp === generatedOtp) {
      alert("✅ OTP Verified. Account Created!");
      // Handle actual account creation here
      setFormData({
        name: '', email: '', password: '', confirmPassword: '', phone: '', otp: ''
      });
      setStep(1);
    } else {
      alert("❌ Invalid OTP. Try again.");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h3 className="text-center mb-4">Sign Up</h3>
      <form onSubmit={step === 1 ? handleNext : handleVerify}>
        {step === 1 && (
          <>
            <input className="form-control mb-2" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
            <input className="form-control mb-2" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input className="form-control mb-2" type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
            <input className="form-control mb-2" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
            <input className="form-control mb-3" type="password" name="confirmPassword" placeholder="Re-enter Password" value={formData.confirmPassword} onChange={handleChange} required />
            <button type="submit" className="btn btn-primary w-100">Send OTP</button>
          </>
        )}

        {step === 2 && (
          <>
            <input className="form-control mb-3" name="otp" placeholder="Enter OTP" value={formData.otp} onChange={handleChange} required />
            <button type="submit" className="btn btn-success w-100">Verify & Sign Up</button>
          </>
        )}
      </form>
    </div>
  );
}
