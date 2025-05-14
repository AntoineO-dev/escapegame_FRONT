// src/services/reservationService.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const reservationService = {
  // Récupérer les détails d'un escape game
  getGameById(id) {
    return axios.get(`${API_URL}/escapegames/${id}`);
  },
  
  // Récupérer les créneaux disponibles
  getAvailableSlots(gameId, date) {
    return axios.get(`${API_URL}/slots/available`);
  },
  
  // Créer une nouvelle réservation
  createReservation(reservationData) {
    return axios.post(`${API_URL}/reservations`, reservationData);
  }
};

export default reservationService;