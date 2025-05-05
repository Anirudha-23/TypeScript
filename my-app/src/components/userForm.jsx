import React, { useState } from 'react';
import './UserForm.css';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Automatically append @gmail.com if the email doesn't have a domain
    let email = formData.email;
    if (email && !email.includes('@')) {
      email = `${email}@gmail.com`; // Append the domain if missing
    }

    // Log the email with the domain appended
    console.log('Form submitted with email:', email);
    // You can now use the updated email for your backend or other operations
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Login Form</h2>

      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
      </div>

      <button type="submit" className="submit-btn">Login</button>
    </form>
  );
};

export default UserForm;
