import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Make sure useParams is imported
import { getUsers, editUser} from '../../Service/api'; // Ensure you have a service for fetching and updating users
import { Form, Button } from 'react-bootstrap';

const EditUser = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const [user, setUser] = useState({ name: '', username: '', email: '', phone: '' });
  const navigate = useNavigate();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    try {
      const response = await getUsers(id); // Fetch user details using ID
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editUser(id, user); // Update user details
      navigate('/'); // Redirect back to home after update
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Edit User</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditUser;
