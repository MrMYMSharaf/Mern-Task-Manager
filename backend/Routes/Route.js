import express from 'express';
import { getUsers, addUser, getUserById, editUser, deleteUser } from '../Controllers/user-controller.js';

const router = express.Router();

router.get('/', getUsers); // Get all users
router.post('/add', addUser); // Add a new user
router.get('/:id', getUserById); // Get a user by ID
router.put('/:id', editUser); // Edit a user by ID
router.delete('/:id', deleteUser); // Delete a user by ID

export default router;
