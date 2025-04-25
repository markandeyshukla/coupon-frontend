import React, { useState } from 'react';
import './support.css'; // optional CSS

function Support() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Support request from ${form.name}`;
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${form.message}`;

    window.location.href = `mailto:support@yourdomain.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <div className="support-container">
      <form className="support-form" onSubmit={handleSubmit}>
        <h2>Contact Support</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Issue"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Support;