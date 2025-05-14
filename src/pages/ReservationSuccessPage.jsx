// src/pages/ReservationSuccessPage.jsx
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaCheckCircle, FaCalendarAlt, FaUsers, FaMoneyBillWave } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/ReservationSuccessPage.css';

const ReservationSuccessPage = () => {
  const location = useLocation();
  const reservation = location.state || {};
  
  return (
    <div className="reservation-success-page">
      <Container className="py-5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="success-card text-center">
            <Card.Body>
              <FaCheckCircle className="success-icon mb-4" />
              <Card.Title as="h1">Réservation Confirmée !</Card.Title>
              <Card.Text className="lead">
                Merci d'avoir réservé "{reservation.gameName}".
              </Card.Text>
              
              <div className="reservation-info mt-4">
                <div className="info-item">
                  <FaCalendarAlt className="info-icon" />
                  <div>
                    <h5>Date et heure</h5>
                    <p>{reservation.date} à {reservation.time}</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <FaUsers className="info-icon" />
                  <div>
                    <h5>Participants</h5>
                    <p>{reservation.participants} personnes</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <FaMoneyBillWave className="info-icon" />
                  <div>
                    <h5>Prix total</h5>
                    <p>{reservation.totalPrice} €</p>
                  </div>
                </div>
              </div>
              
              <div className="important-message mt-4 mb-4">
                <p>Un email de confirmation a été envoyé à votre adresse.</p>
                <p>N'oubliez pas d'arriver 15 minutes avant le début de votre session !</p>
              </div>
              
              <div className="d-flex justify-content-center mt-4 gap-3">
                <Button as={Link} to="/account/reservations" variant="primary">
                  Voir mes réservations
                </Button>
                <Button as={Link} to="/games" variant="outline-primary">
                  Découvrir d'autres jeux
                </Button>
              </div>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </div>
  );
};

export default ReservationSuccessPage;