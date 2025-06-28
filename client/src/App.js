import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// 🔑 Replace these with your actual Supabase project values
const supabaseUrl = 'https://your-project-ref.supabase.co';
const supabaseKey = 'your-anon-public-key';
const supabase = createClient(supabaseUrl, supabaseKey);

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
      const { error } = await supabase
        .from('tickets')
        .insert([formData]);

      if (error) {
        throw error;
      }

      alert('Service request submitted successfully!');
      setFormData({
               product: '',
        issue: ''
      });
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
       input
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
