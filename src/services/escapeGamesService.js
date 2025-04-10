import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL 

function getEscapeGamesByStatus(status) {
    return axios.get(`${API_URL}/escapegames/status/${status}`)
        .then(response => response.data)
        .catch(error => {
            console.error("Error fetching escape games by status:", error);
            throw error;
        });
}

export default {
    getEscapeGamesByStatus,
};