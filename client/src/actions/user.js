import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import * as api from '../api/index.js';
import User from '../users/User';


const secret = 'test';   

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};



// Get all users
export const fetchUsers = async (req, res) => {
  try {
    const users = await api.fetchUsers({});
    res.json(users);
  } catch (error) {
    res.json(error);
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await api.deleteUser(id);
    res.
    json({ message: 'User deleted successfully', user });
} catch (error) {
res.json({ message: 'Error deleting user', error });
}
};


// Update a user
export const updateUser = async (req, res) => {
try {
const { id } = req.params;
const { firstName, lastName, email } = req.body;
const user = await api.updateUser(id, { firstName, lastName, email }, { new: true });
res.json({ message: 'User updated successfully', user });
} catch (error) {
res.json({ message: 'Error updating user', error });
}
};

// Get a user by ID
export const fetchUser = async (req, res) => {
try {
const { id } = req.params;
const user = await api.fetchUser(id);
res.json(user);
} catch (error) {
res.json({ message: 'Error getting user by ID', error });
}
};



// // fetchUsers a user
// export const fetchUsers  = async (req, res) => {
//   const { email, password, firstName, lastName } = req.body;

//   try {
//     const users = await User.find({});
//     res.json(users);
//   }catch (error) {
//     res.json(error);
//   }

// }

// // Delete a user
// export const deleteUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await User.findByIdAndDelete(id);
//     res.json({ message: 'User deleted successfully' });
//   } catch (error) {
//     res.json(error);
//   }
// }

// // Modify a user
// export const updateUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
//     res.json({ message: 'User updated successfully', data: updatedUser });
//   } catch (error) {
//     res.json(error);
//   }
// }

// export const fetchUsers  = async (req, res) => {
//   try {
//     const users = await User.find({});
//     res.json(users);
//   }catch (error) {
//     res.json(error);
//   }
// }















