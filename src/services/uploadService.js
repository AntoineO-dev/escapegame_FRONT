// src/services/uploadService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

/**
 * Service pour gérer les uploads d'images
 */
const uploadService = {
  /**
   * Upload une image simple
   * @param {File} imageFile - Le fichier image à uploader
   * @returns {Promise<string>} - L'URL de l'image uploadée
   */
  async uploadImage(imageFile) {
    try {
      const formData = new FormData();
      formData.append('image', imageFile);
      
      const response = await axios.post(`${API_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      return response.data.imageUrl;
    } catch (error) {
      console.error('Erreur lors de l\'upload de l\'image:', error);
      throw error;
    }
  },
  
  /**
   * Upload une image et l'associe à un escape game
   * @param {File} imageFile - Le fichier image à uploader
   * @param {number} escapegameId - L'ID de l'escape game
   * @returns {Promise<string>} - L'URL de l'image uploadée
   */
  async uploadEscapeGameImage(imageFile, escapegameId) {
    try {
      const formData = new FormData();
      formData.append('image', imageFile);
      
      const response = await axios.post(
        `${API_URL}/upload?escapegame_id=${escapegameId}`, 
        formData, 
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      
      return response.data.imageUrl;
    } catch (error) {
      console.error('Erreur lors de l\'upload de l\'image pour l\'escape game:', error);
      throw error;
    }
  }
};

export default uploadService;