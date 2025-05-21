import React, { useState } from 'react';
import './Feedback.css';
import axios from 'axios';

function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    try {
      const res = await axios.post('http://localhost:5000/api/feedback', {
        name,
        email,
        message,
      });
      setSuccessMsg(res.data.message || 'Feedback submitted successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      alert(err.response?.data?.message || 'Submission failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="feedback-section">
      <div className="feedback-overlay">
        <div className="form-container">
          <h2>Feedback</h2>

          {successMsg && <div className="alert alert-success">{successMsg}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={loading}
              ></textarea>
            </div>
            <button type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Feedback'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Feedback;

