import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    product: '',
    issue: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/api/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      alert('Service request submitted successfully!');
    } catch (error) {
      alert('Failed to submit the request.');
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Customer Service Request Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="contact"
          placeholder="Contact Info"
          value={formData.contact}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="product"
          placeholder="Product Details"
          value={formData.product}
          onChange={handleChange}
          required
        /><br /><br />
        <textarea
          name="issue"
          placeholder="Describe the issue"
          value={formData.issue}
          onChange={handleChange}
          required
        /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
