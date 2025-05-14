import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
import { format, addDays, setHours, setMinutes } from "date-fns";
import {
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaMoneyBillWave,
  FaArrowLeft,
  FaCheck
} from "react-icons/fa";
import enigme from "../assets/enigme.webp";
import "../styles/ReservationPage.css";
import "react-datepicker/dist/react-datepicker.css";

// Enregistrement du locale français pour le DatePicker
registerLocale("fr", fr);

// Données de jeu fictives pour la démo (à remplacer par vos propres données)
const mockGameData = {
  enigme: {
    id: "enigme",
    name: "Énigme de l'Absence",
    shortDescription: "Chaque disparition cache une vérité. Saurez-vous la découvrir ?",
    imageUrl: enigme,
    difficulty: 4,
    duration: 60,
    price: 25,
    minParticipants: 2,
    maxParticipants: 6
  },
  trone: {
    id: "trone",
    name: "Le Trône de Fer",
    shortDescription: "Dans le jeu des trônes, on gagne ou on meurt. À vous de jouer !",

    difficulty: 3,
    duration: 75,
    price: 30,
    minParticipants: 3,
    maxParticipants: 8
  },

  jedi: {
    id: "jedi",
    name: "La Quête du Jedi",
    shortDescription: "Devenez le Jedi que vous êtes destiné à être.",
    difficulty: 2,
    duration: 90,
    price: 20,
    minParticipants: 2,
    maxParticipants: 5
},

  sorcier: {
    id: "sorcier",
    name: "L'Épreuve des Sorciers",
    shortDescription: "Testez vos compétences magiques dans cette épreuve.",
    difficulty: 5,
    duration: 120,
    price: 40,
    minParticipants: 4,
    maxParticipants: 10
  },

  warcraft: {
    id: "warcraft",
    name: "Aventure dans le Monde de Warcraft",
    shortDescription: "Plongez dans l'univers épique de Warcraft.",
    difficulty: 3,
    duration: 90,
    price: 35,
    minParticipants: 2,
    maxParticipants: 6
  },

};
  

const ReservationPage = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  
  // État pour les données du formulaire
  const [selectedDate, setSelectedDate] = useState(addDays(new Date(), 1));
  const [availableHours, setAvailableHours] = useState([]);
  const [selectedHour, setSelectedHour] = useState(null);
  const [participants, setParticipants] = useState(2);
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Récupérer les infos du jeu
  const gameDetails = mockGameData[gameId] || {
    name: "Escape Game",
    shortDescription: "Une aventure immersive",
    imageUrl: "/images/default.jpg", // Remplacez par une image par défaut
    difficulty: 3,
    duration: 60,
    price: 25,
    minParticipants: 2,
    maxParticipants: 6
  };

  // Animation pour les éléments de la page
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Générer des créneaux horaires fictifs quand la date change
  const generateTimeSlots = (date) => {
    const slots = [];
    const today = new Date();
    const isToday = format(today, "yyyy-MM-dd") === format(date, "yyyy-MM-dd");
    const currentHour = today.getHours();
    
    // Horaires d'ouverture (10h à 20h)
    for (let hour = 10; hour <= 20; hour += 2) {
      // Si c'est aujourd'hui, ne pas proposer d'heures passées
      if (isToday && hour <= currentHour) continue;
      
      slots.push(setHours(setMinutes(new Date(date), 0), hour));
      slots.push(setHours(setMinutes(new Date(date), 30), hour));
    }
    
    // Simuler des créneaux indisponibles aléatoires
    return slots.filter(() => Math.random() > 0.3);
  };

  // Mettre à jour les créneaux horaires quand la date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedHour(null);
    setAvailableHours(generateTimeSlots(date));
  };

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedHour) {
      setError("Veuillez sélectionner une date et une heure");
      return;
    }

    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      // Ici, vous intègrerez votre logique de réservation
      console.log("Données de réservation:", {
        gameId,
        date: format(selectedDate, "yyyy-MM-dd"),
        time: format(selectedHour, "HH:mm"),
        participants,
        notes
      });
      
      setIsSubmitting(false);
      alert("Fonction de réservation à implémenter. Consultez la console pour voir les données.");
    }, 1500);
  };

  // Au chargement initial, générer les créneaux pour la date sélectionnée
  if (availableHours.length === 0 && selectedDate) {
    setAvailableHours(generateTimeSlots(selectedDate));
  }

  // Fonction pour filtrer les dates dans le sélecteur
  const filterDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const threeMonthsLater = addDays(today, 90);
    return date >= today && date <= threeMonthsLater;
  };

  // Calculer le prix total
  const totalPrice = gameDetails.price * participants;

  return (
    <div className="reservation-page">
      <div className="reservation-overlay">
        <Container className="reservation-container py-5">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <Row className="mb-4">
              <Col>
                <Button 
                  variant="link" 
                  className="back-button" 
                  onClick={() => navigate(-1)}
                >
                  <FaArrowLeft /> Retour
                </Button>
                <h1 className="reservation-title text-center">
                  Réservation - {gameDetails.name}
                </h1>
                <div className="separator mx-auto"></div>
              </Col>
            </Row>

            <Row>
              {/* Colonne de gauche - Formulaire de réservation */}
              <Col lg={7}>
                <Card className="reservation-card mb-4">
                  <Card.Body>
                    <h3 className="mb-4">Sélectionnez votre créneau</h3>
                    
                    {error && <Alert variant="danger">{error}</Alert>}
                    
                    <Form onSubmit={handleSubmit}>
                      {/* Sélecteur de date */}
                      <Form.Group className="mb-4">
                        <Form.Label className="reservation-label">
                          <FaCalendarAlt className="icon-spacing" /> 
                          Date de la réservation
                        </Form.Label>
                        <DatePicker
                          selected={selectedDate}
                          onChange={handleDateChange}
                          filterDate={filterDate}
                          className="form-control datepicker-input"
                          dateFormat="dd/MM/yyyy"
                          locale="fr"
                          placeholderText="Sélectionnez une date"
                          required
                          minDate={new Date()}
                          inline
                        />
                      </Form.Group>
                      
                      {/* Sélecteur d'heure */}
                      <Form.Group className="mb-4">
                        <Form.Label className="reservation-label">
                          <FaClock className="icon-spacing" /> 
                          Heure de la réservation
                        </Form.Label>
                        <div className="time-slots-container">
                          {availableHours.length > 0 ? (
                            availableHours.map((time, index) => (
                              <Button
                                key={index}
                                variant={selectedHour && 
                                        format(selectedHour, "HH:mm") === format(time, "HH:mm") 
                                          ? "primary" 
                                          : "outline-primary"}
                                className="time-slot-btn"
                                onClick={() => setSelectedHour(time)}
                              >
                                {format(time, "HH:mm")}
                              </Button>
                            ))
                          ) : (
                            <p className="text-muted">
                              Chargement des créneaux disponibles...
                            </p>
                          )}
                        </div>
                      </Form.Group>
                      
                      {/* Sélecteur de participants */}
                      <Form.Group className="mb-4">
                        <Form.Label className="reservation-label">
                          <FaUsers className="icon-spacing" /> 
                          Nombre de participants
                        </Form.Label>
                        <div className="participants-selector">
                          <Button
                            variant="outline-primary"
                            onClick={() => participants > gameDetails.minParticipants && 
                              setParticipants(participants - 1)}
                            disabled={participants <= gameDetails.minParticipants}
                          >
                            -
                          </Button>
                          <span className="participants-count">{participants}</span>
                          <Button
                            variant="outline-primary"
                            onClick={() => participants < gameDetails.maxParticipants && 
                              setParticipants(participants + 1)}
                            disabled={participants >= gameDetails.maxParticipants}
                          >
                            +
                          </Button>
                        </div>
                        <small className="text-muted">
                          Min: {gameDetails.minParticipants}, 
                          Max: {gameDetails.maxParticipants} personnes
                        </small>
                      </Form.Group>
                      
                      {/* Champ pour les notes */}
                      <Form.Group className="mb-4">
                        <Form.Label>Remarques ou demandes spéciales (optionnel)</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Ex: anniversaire, accessibilité, etc."
                        />
                      </Form.Group>
                      
                      {/* Bouton de soumission */}
                      <Button
                        variant="primary"
                        type="submit"
                        className="reservation-submit-btn w-100"
                        disabled={isSubmitting || !selectedDate || !selectedHour}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Traitement en cours...
                          </>
                        ) : (
                          <>
                            <FaCheck className="me-2" /> Confirmer ma réservation
                          </>
                        )}
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
              
              {/* Colonne de droite - Résumé */}
              <Col lg={5}>
                <Card className="reservation-summary-card mb-4">
                  <Card.Body>
                    <h3 className="mb-3">Résumé de votre réservation</h3>
                    
                    <div className="game-image-container mb-3">
                      <img
                        src={gameDetails.imageUrl}
                        alt={gameDetails.name}
                        className="img-fluid rounded"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/images/default.jpg"; // Image par défaut en cas d'erreur
                        }}
                      />
                    </div>
                    
                    <h4 className="game-title">{gameDetails.name}</h4>
                    <p className="game-description">{gameDetails.shortDescription}</p>
                    
                    <div className="reservation-details mt-4">
                      <div className="detail-item">
                        <span className="detail-label">Difficulté:</span>
                        <span className="detail-value difficulty-level">
                          {'★'.repeat(gameDetails.difficulty)}
                          {'☆'.repeat(5 - gameDetails.difficulty)}
                        </span>
                      </div>
                      
                      <div className="detail-item">
                        <span className="detail-label">Durée:</span>
                        <span className="detail-value">{gameDetails.duration} min</span>
                      </div>
                      
                      <div className="detail-item">
                        <span className="detail-label">Date:</span>
                        <span className="detail-value">
                          {selectedDate 
                            ? format(selectedDate, "dd MMMM yyyy", { locale: fr }) 
                            : "Non sélectionnée"}
                        </span>
                      </div>
                      
                      <div className="detail-item">
                        <span className="detail-label">Heure:</span>
                        <span className="detail-value">
                          {selectedHour 
                            ? format(selectedHour, "HH:mm") 
                            : "Non sélectionnée"}
                        </span>
                      </div>
                      
                      <div className="detail-item">
                        <span className="detail-label">Participants:</span>
                        <span className="detail-value">{participants} personnes</span>
                      </div>
                      
                      <hr className="reservation-divider" />
                      
                      <div className="detail-item price-item">
                        <span className="detail-label">Prix par personne:</span>
                        <span className="detail-value">{gameDetails.price} €</span>
                      </div>
                      
                      <div className="detail-item total-price">
                        <span className="detail-label">Prix total:</span>
                        <span className="detail-value price">
                          <FaMoneyBillWave className="me-1" />
                          {totalPrice} €
                        </span>
                      </div>
                    </div>
                    
                    <div className="important-notes mt-4">
                      <h5>Informations importantes:</h5>
                      <ul className="important-list">
                        <li>Arrivez 15 minutes avant l'heure de votre réservation</li>
                        <li>Annulation gratuite jusqu'à 48h avant votre séance</li>
                        <li>Le paiement s'effectuera sur place</li>
                        <li>En cas de retard, votre temps de jeu pourrait être réduit</li>
                      </ul>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default ReservationPage;