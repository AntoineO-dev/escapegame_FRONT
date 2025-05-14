// src/pages/EscapeGameImageManager.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EscapeGameImageManager() {
  const [escapeGames, setEscapeGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState({});
  const [uploadStatus, setUploadStatus] = useState({});

  // Charger tous les escape games
  useEffect(() => {
    const fetchEscapeGames = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/escapegames');
        setEscapeGames(response.data);
        setLoading(false);
      } catch (err) {
        setError('Erreur lors du chargement des escape games');
        setLoading(false);
      }
    };

    fetchEscapeGames();
  }, []);

  // Gérer le changement de fichier
  const handleFileChange = (id, e) => {
    if (e.target.files[0]) {
      setSelectedFiles({
        ...selectedFiles,
        [id]: e.target.files[0]
      });
    }
  };

  // Uploader l'image
  const handleUpload = async (id) => {
    if (!selectedFiles[id]) return;

    setUploadStatus(prev => ({...prev, [id]: 'uploading'}));
    
    const formData = new FormData();
    formData.append('image', selectedFiles[id]);

    try {
      const response = await axios.post(
        `http://localhost:3000/api/upload/escapegame/${id}`, 
        formData, 
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      // Mettre à jour l'escape game avec la nouvelle URL d'image
      const updatedEscapeGames = escapeGames.map(game => 
        game.id_escape === id ? { ...game, image_url: response.data.imageUrl } : game
      );

      setEscapeGames(updatedEscapeGames);
      setUploadStatus(prev => ({...prev, [id]: 'success'}));
      
      // Réinitialiser après 3 secondes
      setTimeout(() => {
        setUploadStatus(prev => {
          const newStatus = {...prev};
          delete newStatus[id];
          return newStatus;
        });
      }, 3000);
    } catch (err) {
      setUploadStatus(prev => ({...prev, [id]: 'error'}));
      console.error("Erreur d'upload:", err);
    }
  };

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Gestionnaire d'images des Escape Games</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {escapeGames.map(game => (
          <div key={game.id_escape} className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold mb-2">{game.escape_type}</h2>
            
            <div className="mb-4">
              {game.image_url ? (
                <img 
                  src={`http://localhost:3000${game.image_url}`} 
                  alt={game.escape_type}
                  className="w-full h-48 object-cover rounded"
                />
              ) : (
                <div className="bg-gray-200 w-full h-48 flex items-center justify-center rounded">
                  <p className="text-gray-500">Aucune image</p>
                </div>
              )}
            </div>
            
            <div className="flex flex-col">
              <input 
                type="file" 
                accept="image/*"
                onChange={(e) => handleFileChange(game.id_escape, e)}
                className="mb-2"
              />
              
              <button
                onClick={() => handleUpload(game.id_escape)}
                disabled={!selectedFiles[game.id_escape] || uploadStatus[game.id_escape] === 'uploading'}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
              >
                {uploadStatus[game.id_escape] === 'uploading' ? 'Envoi en cours...' :
                 uploadStatus[game.id_escape] === 'success' ? 'Image téléchargée ✓' :
                 uploadStatus[game.id_escape] === 'error' ? 'Erreur ✗' : 
                 'Télécharger l\'image'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EscapeGameImageManager;