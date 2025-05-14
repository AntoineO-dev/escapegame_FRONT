import React, { use, useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import escape from '../assets/escape.jpg';
import trone from '../assets/trone.jpeg';

import escapeGamesService from '../services/escapeGamesService';
import '../styles/HomePage.css';


const HomePage = () => {
    const [escapeGames, setEscapeGames] = useState([]);


    const  FetchAllEscape = async () => {
        try {
            const response = await escapeGamesService.getAllescapeGames();
            setEscapeGames(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        FetchAllEscape();
    }, []);

    // Mini-jeux thématiques
   
    // Animation variants pour les éléments
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay">
                    <Container>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            className="hero-content text-center"
                        >
                            <h1>Bienvenue chez Énigmes Évadées</h1>
                            <p className="lead">Plongez dans des aventures immersives où mystères et défis vous attendent</p>
                            <Button variant="light" size="lg" className="hero-btn me-3">Découvrir nos jeux</Button>
                            <Button variant="outline-light" size="lg" className="hero-btn">Réserver</Button>
                        </motion.div>
                    </Container>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section py-5">
                <Container>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <Row className="align-items-center">
                            <Col lg={6} className="mb-4 mb-lg-0">
                                <div className="about-image-container">
                                    <img src={escape} alt="Énigmes Évadées" className="about-image" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="about-content">
                                    <h2 className="section-title">Notre Histoire</h2>
                                    <div className="separator"></div>
                                    <p>
                                        <strong>Énigmes Évadées</strong> a été créée avec une passion commune pour les défis intellectuels et les
                                        aventures captivantes. Notre équipe dévouée travaille sans relâche pour concevoir des Escape Games
                                        originaux, stimulants et divertissants qui transportent les participants dans des univers
                                        extraordinaires.
                                    </p>
                                    <p>
                                        Que vous choisissiez nos salles spécialement aménagées ou nos kits d'Escape Game à domicile,
                                        nous vous promettons une expérience unique où collaboration, réflexion et amusement se rencontrent.
                                    </p>
                                    <Button variant="primary" className="mt-3">En savoir plus</Button>
                                </div>
                            </Col>
                        </Row>
                    </motion.div>
                </Container>
            </section>

            {/*Escape Games Section */}
            <section className="games-section room-games-section py-5">
                <Container>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="section-title text-center">Nos Escape Games</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">Découvrez nos univers immersifs et relevez des défis palpitants.</p>

                        <Row>
                            {escapeGames.map((game) => (
                                <Col lg={4} md={6} className="mb-4" key={game.id}>
                                    <Card className="game-card h-100">
                                        <div className="game-card-img-container">
                                            <Card.Img variant="top" src={trone} alt={game.escape_type} className="game-card-img" />
                                            <div className="game-card-overlay">
                                                <div className="game-info">
                                                    <span><i className="fas fa-users"></i> {game.Number_of_players} joueurs</span>
                                                    <span><i className="fas fa-clock"></i> {game.duration} min</span>
                                                    <span><i className="fas fa-star"></i> Difficulté: {game.difficulty}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{game.escape_type}</Card.Title>
                                            {/* <Card.Text>{game.description}</Card.Text> */}
                                        </Card.Body>
                                        <Card.Footer className="bg-transparent border-0 d-flex justify-content-between align-items-center">
                                            <Button variant="outline-primary" as={Link} to={`/games/${game.id}`}>Détails</Button>
                                            <Button variant="primary" as={Link} to="/booking">Réserver</Button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </motion.div>
                </Container>
            </section>

            {/* Call to Action */}
            <section className="cta-section py-5">
                <Container>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center"
                    >
                        <h2>Prêt à relever le défi ?</h2>
                        <p className="lead mb-4">Réservez dès maintenant votre prochaine aventure avec Énigmes Évadées</p>
                        <Button variant="light" size="lg" className="me-3">Réserver une salle</Button>
                        <Button variant="outline-light" size="lg">Réserver un thème à domicile</Button>
                    </motion.div>
                </Container>
            </section>
        </div>
    );
}

export default HomePage;