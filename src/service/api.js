import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
 baseURL: "http://localhost:8083/api", // Vite
  // baseURL: process.env.REACT_APP_API_BASE_URL, // CRA
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to every request automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('loverToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle token expiration globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid - redirect to login
      localStorage.removeItem('loverToken');
      localStorage.removeItem('loverUser');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;