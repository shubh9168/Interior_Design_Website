import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [editingItem, setEditingItem] = useState(null); // To handle editing
  const [type, setType] = useState(''); // 'user' | 'feedback' | 'contact'

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };

    try {
      const [usersRes, feedbacksRes, contactsRes] = await Promise.all([
        axios.get('http://localhost:5000/api/admin/users', { headers }),
        axios.get('http://localhost:5000/api/admin/feedback', { headers }),
        axios.get('http://localhost:5000/api/admin/contact', { headers }),
      ]);
      setUsers(usersRes.data);
      setFeedbacks(feedbacksRes.data);
      setContacts(contactsRes.data);
    } catch (error) {
      alert('Error fetching data');
    }
  };

  const handleDelete = async (id, category) => {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    const url = `http://localhost:5000/api/admin/${category}/${id}`;
    try {
      await axios.delete(url, { headers });
      alert(`${category} deleted`);
      fetchData();
    } catch {
      alert('Delete failed');
    }
  };

  const handleEdit = (item, category) => {
    setEditingItem(item);
    setType(category);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };

    try {
      await axios.put(`http://localhost:5000/api/admin/${type}/${editingItem.id}`, editingItem, { headers });
      alert(`${type} updated`);
      setEditingItem(null);
      fetchData();
    } catch {
      alert('Update failed');
    }
  };

  return (
    <div className="container mt-5 admin-dashboard">
      <h2 className="text-center mb-4">Admin Dashboard</h2>

      {/* Edit Form */}
      {editingItem && (
        <form onSubmit={handleEditSubmit} className="mb-4 border p-3 rounded bg-light">
          <h5>Edit {type}</h5>
          <input
            type="text"
            value={editingItem.name}
            onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
            className="form-control mb-2"
            placeholder="Name"
            required
          />
          <input
            type="email"
            value={editingItem.email}
            onChange={(e) => setEditingItem({ ...editingItem, email: e.target.value })}
            className="form-control mb-2"
            placeholder="Email"
            required
          />
          <textarea
            value={editingItem.message}
            onChange={(e) => setEditingItem({ ...editingItem, message: e.target.value })}
            className="form-control mb-2"
            placeholder="Message"
            required
          />
          <button type="submit" className="btn btn-success me-2">Save</button>
          <button type="button" className="btn btn-secondary" onClick={() => setEditingItem(null)}>Cancel</button>
        </form>
      )}

      {/* Users */}
      <div className="mb-5">
        <h4>Registered Users</h4>
        <table className="table table-bordered table-striped">
          <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Actions</th></tr></thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td><td>{user.name}</td><td>{user.email}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id, 'users')}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Feedbacks */}
      <div className="mb-5">
        <h4>Feedbacks</h4>
        <table className="table table-bordered table-striped">
          <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Message</th><th>Actions</th></tr></thead>
          <tbody>
            {feedbacks.map(fb => (
              <tr key={fb.id}>
                <td>{fb.id}</td><td>{fb.name}</td><td>{fb.email}</td><td>{fb.message}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(fb, 'feedback')}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(fb.id, 'feedback')}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Contacts */}
      <div>
        <h4>Contact Messages</h4>
        <table className="table table-bordered table-striped">
          <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Message</th><th>Actions</th></tr></thead>
          <tbody>
            {contacts.map(ct => (
              <tr key={ct.id}>
                <td>{ct.id}</td><td>{ct.name}</td><td>{ct.email}</td><td>{ct.message}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(ct, 'contact')}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(ct.id, 'contact')}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
