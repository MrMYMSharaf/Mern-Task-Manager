import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { addUser } from '../../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
  name: '',
  username: '',
  email: '',
  phone: ''
};

const AddTask = () => {
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone } = user;
  
  let navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      await addUser(user);
      navigate('/all'); // Navigate after successful user addition
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div>
      <h1>Add Task</h1>

      <Form className="m-4" onSubmit={addUserDetails}>
  <Form.Group className="mb-3" controlId="Name">
    <Form.Label>Name</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter your Name"
      onChange={onValueChange}
      name="name"
      value={name}
      required
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="Username">
    <Form.Label>Username</Form.Label>
    <Form.Control
      type="text"
      placeholder="Enter username"
      onChange={onValueChange}
      name="username"
      value={username}
      required
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="Email">
    <Form.Label>Email address</Form.Label>
    <Form.Control
      type="email"
      placeholder="Enter email"
      onChange={onValueChange}
      name="email"
      value={email}
      required
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="Phone">
    <Form.Label>Phone</Form.Label>
    <Form.Control
      type="number"
      placeholder="Enter your phone"
      onChange={onValueChange}
      name="phone"
      value={phone}
      required
    />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

    </div>
  );
};

export default AddTask;
