import React, { useState, useEffect } from 'react';
import './Form.css';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  useEffect(() => {
    // Change the tab title when the component is mounted
    document.title = "Login - Your App Name";
    
    return () => {
      // Clean up: reset the title when the component is unmounted
      document.title = "Your App Name";
    };
  }, []);

  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        id="bg-video"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Form */}
      <div className="form-container">
        <form className="form-box" onSubmit={handleSubmit}>
          <h2>Login Form</h2>

          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="input-field"
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="input-field"
          />

          <label>Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="input-field"
          />

          <div className="show-button-container">
            <button
              type="button"
              className="show-password-button"
              onClick={() => setShowPassword(prev => !prev)}
            >
              {showPassword ? 'Hide Password' : 'Show Password'}
            </button>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
