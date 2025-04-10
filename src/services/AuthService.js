// src/services/authService.js
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const API_URL = import.meta.env.VITE_API_URL;



// Stockage du token dans le localStorage
const setToken = (token) => {
  localStorage.setItem('token', token);
};

const getToken = () => {
  return localStorage.getItem('token');
};

const removeToken = () => {
  localStorage.removeItem('token');
};

// Vérification si l'utilisateur est authentifié
const isAuthenticated = () => {
  const token = getToken();
  if (!token) return false;
  
  // Vérifiez si le token n'est pas expiré (optionnel)
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.exp * 1000 < Date.now()) {
      removeToken();
      return false;
    }
  } catch (e) {
    return false;
  }
  
  return true;
};

// Requête de connexion
const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  if (response.data.token) {
    setToken(response.data.token);
  }
  return response.data;
};

// Requête d'inscription
const register = async (userData) => {
  return await axios.post(`${API_URL}/auth/register`, userData);
};

// Déconnexion
const logout = () => {
  removeToken();
};

// Récupérer les informations de l'utilisateur depuis le token JWT
const getCurrentUser = () => {
  const token = getToken();
  if (!token) return null;
  
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

export default {
  login,
  register,
  logout,
  getCurrentUser,
  isAuthenticated,
  getToken
};