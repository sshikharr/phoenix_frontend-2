import axios from 'axios';
// import { useAuth } from '../context/AuthContext'; // Import the useAuth hook

const API_URL = 'http://localhost:3000/api/users'; // Replace with your backend API URL

const signup = async (userData, login) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    localStorage.setItem('authToken', response.data.token); // Store token in localStorage
    login(response.data.token); // Call the login method from context to update the auth state
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.error : 'Network Error');
  }
};

const login = async (loginData, login) => {
  try {
    const response = await axios.post(`${API_URL}/login`, loginData);
    localStorage.setItem('authToken', response.data.token); // Store token in localStorage
    login(response.data.token); // Call the login method from context to update the auth state
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.error : 'Network Error');
  }
};

export default {
  signup,
  login,
};
