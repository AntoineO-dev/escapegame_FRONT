import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL 

console.log("API_URL", API_URL);

function getEscapeGamesByStatus(status) {
  return axios.get(`${API_URL}/escapegames/status/${status}`)
}

function getAllescapeGames () {
    return axios.get(`${API_URL}/escapegames`)
    }

    function getEscapeGameById(id) {
      return axios.get(`${API_URL}/escapegames/${id}`);
    }

export default {
    getEscapeGamesByStatus,
    getAllescapeGames,
    getEscapeGameById
};