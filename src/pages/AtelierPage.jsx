import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Badge, Carousel, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
    FaUserFriends,
    FaClock,
    FaStar,
    FaTools,
    FaLightbulb,
    FaCogs,
    FaBrain
} from 'react-icons/fa';
import engrenage from '../assets/engrenage.webp';
import atelier from '../assets/atelier1.jpg';
import atelier2 from '../assets/atelier2.jpeg';
import atelier3 from '../assets/atelier3.jpg';
import atelier4 from '../assets/atelier4.jpg';
import atelier5 from '../assets/atelier5.jpg';
import atelier6 from '../assets/atelier6.avif';
import '../styles/AtelierPage.css';

const AtelierPage = () => {
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [participants, setParticipants] = useState(2);

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    // Exemple de créneaux disponibles
    const availableTimes = ['10:00', '12:30', '15:00', '17:30', '19:00', '21:30'];

    // Informations de l'escape game
    const escapeGame = {
        title: 'L\'Atelier des Engrenages',
        tagline: 'Où les engrenages cachent des secrets',
        description: 'Vous pénétrez dans un atelier mécanique mystérieux, rempli d\'engrenages, de leviers et de machines complexes. Un inventeur renommé a mystérieusement disparu, laissant derrière lui des énigmes mécaniques et des inventions étranges. Votre mission est de comprendre le fonctionnement de ces mécanismes et de résoudre le mystère qui entoure sa disparition.',
        longDescription: `Le professeur Archibald Von Gears, génie de la mécanique et inventeur visionnaire, n'a pas été vu depuis trois semaines. Son atelier, habituellement si animé par le bruit des engrenages et la vapeur des machines, est étrangement silencieux.

        En tant qu'apprentis et collaborateurs du professeur, vous décidez d'explorer son atelier pour comprendre ce qui lui est arrivé. À votre entrée, une machine s'active automatiquement et projette un message holographique : le professeur a intentionnellement verrouillé ses secrets les plus importants dans des mécanismes complexes pour les protéger de personnes malintentionnées.
        
        Pour découvrir la vérité sur sa disparition et peut-être le sauver d'un danger imminent, vous devrez faire fonctionner ses inventions, résoudre des énigmes mécaniques, et retrouver les plans de sa dernière création révolutionnaire. Mais attention, le temps est compté : certaines machines ne fonctionneront que pendant une heure avant de se désactiver définitivement.`,
        difficulty: 4,
        players: '2-6',
        duration: 60,
        successRate: '35%',
        images: [
           atelier,
        ],
        challenges: [
            'Activer la machine à vapeur centrale',
            'Déchiffrer les notes cryptées du professeur',
            'Assembler correctement le prototype incomplet',
            'Désactiver le système de sécurité automatique'
        ],
        inventions: [
            { 
                name: 'Mécanismes à engrenages', 
                trait: 'Précision et synchronisation', 
                icon: 'mechanical',
                image: atelier3
             
            },
            { 
                name: 'Circuits électriques', 
                trait: 'Puissance et conductivité', 
                icon: 'electrical',
                image: atelier4
           
            },
            { 
                name: 'Appareils optiques', 
                trait: 'Vision et perception', 
                icon: 'optical',
                image: atelier5
           
            },
            { 
                name: 'Machines à vapeur', 
                trait: 'Force et mouvement', 
                icon: 'steam',
                image: atelier6
               
            }
        ]
    };

    return (
        <div className="atelier-page">
            {/* Hero Section */}
            <section className="atelier-hero" >
                <div className="atelier-hero-overlay">
                    <Container>
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            className="text-center hero-content"
                        >
                            <h1>{escapeGame.title}</h1>
                            <p className="tagline">{escapeGame.tagline}</p>
                            <div className="d-flex justify-content-center game-meta">
                                <div className="meta-item">
                                    <FaUserFriends />
                                    <span>{escapeGame.players} joueurs</span>
                                </div>
                                <div className="meta-item">
                                    <FaClock />
                                    <span>{escapeGame.duration} min</span>
                                </div>
                                <div className="meta-item">
                                    <FaStar />
                                    <span>Difficulté: {escapeGame.difficulty}/5</span>
                                </div>
                            </div>
                            <Button
                                variant="light"
                                size="lg"
                                className="mt-4 book-now-btn"
                                onClick={() => setShowBookingForm(!showBookingForm)}
                            >
                                Réserver maintenant
                            </Button>
                        </motion.div>
                    </Container>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="game-intro py-5">
                <Container>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <Row className="align-items-center">
                            <Col lg={6} className="mb-4 mb-lg-0">
                                <div className="game-description">
                                    <h2>L'atelier mystérieux</h2>
                                    <div className="separator"></div>
                                    <p className="lead">{escapeGame.description}</p>
                                    <p>{escapeGame.longDescription}</p>
                                    <div className="game-stats d-flex flex-wrap">
                                        <div className="stat-item">
                                            <FaTools className="stat-icon" />
                                            <div>
                                                <h4>Ingéniosité</h4>
                                                <p>Requise</p>
                                            </div>
                                        </div>
                                        <div className="stat-item">
                                            <FaLightbulb className="stat-icon" />
                                            <div>
                                                <h4>Créativité</h4>
                                                <p>Essentielle</p>
                                            </div>
                                        </div>
                                        <div className="stat-item">
                                            <FaCogs className="stat-icon" />
                                            <div>
                                                <h4>Taux de réussite</h4>
                                                <p>{escapeGame.successRate}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <Carousel className="game-carousel">
                                    {escapeGame.images.map((image, index) => (
                                        <Carousel.Item key={index}>
                                            <img
                                                className="d-block w-100"
                                                src={image}
                                                alt={`Scène ${index + 1} - ${escapeGame.title}`}
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Col>
                        </Row>
                    </motion.div>
                </Container>
            </section>

            {/* Inventions Section */}
            <section className="inventions-section py-5">
                <Container>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="text-center">Les inventions du professeur</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">Explorez les différentes technologies qui vous attendent dans l'atelier</p>

                        <Row>
                            {escapeGame.inventions.map((invention, index) => (
                                <Col md={3} sm={6} className="mb-4" key={index}>
                                    <Card className="invention-card text-center h-100">
                                        <div className="invention-image-container">
                                            <div className={`invention-color ${invention.icon}`}>
                                                <img 
                                                    src={invention.image} 
                                                    alt={`${invention.name}`} 
                                                    className="invention-icon-img" 
                                                />
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{invention.name}</Card.Title>
                                            <Card.Text>{invention.trait}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </motion.div>
                </Container>
            </section>

            {/* Challenges Section */}
            <section className="challenges-section py-5">
                <Container>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="text-center">Défis mécaniques</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">Les mécanismes que vous devrez maîtriser dans cet atelier mystérieux</p>

                        <Row className="justify-content-center">
                            {escapeGame.challenges.map((challenge, index) => (
                                <Col lg={6} className="mb-4" key={index}>
                                    <div className="challenge-item">
                                        <div className="challenge-number">{index + 1}</div>
                                        <div className="challenge-description">
                                            <h4>Défi {index + 1}</h4>
                                            <p>{challenge}</p>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </motion.div>
                </Container>
            </section>

            {/* Booking Section */}
            <section className={`booking-section py-5 ${showBookingForm ? 'show' : ''}`}>
                <Container>
                    <motion.div
                        initial="hidden"
                        animate={showBookingForm ? "visible" : "hidden"}
                        variants={fadeIn}
                    >
                        <h2 className="text-center">Réserver votre exploration</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">Préparez-vous à entrer dans l'univers fascinant du professeur Von Gears</p>

                        <Row className="justify-content-center">
                            <Col md={8}>
                                <Card className="booking-card">
                                    <Card.Body>
                                        <Form>
                                            <Row>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Date</Form.Label>
                                                        <Form.Control
                                                            type="date"
                                                            value={selectedDate}
                                                            onChange={(e) => setSelectedDate(e.target.value)}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Nombre d'ingénieurs</Form.Label>
                                                        <Form.Control
                                                            type="number"
                                                            min="2"
                                                            max="6"
                                                            value={participants}
                                                            onChange={(e) => setParticipants(e.target.value)}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>

                                            <Form.Group className="mb-4">
                                                <Form.Label>Horaires disponibles</Form.Label>
                                                <div className="time-slots">
                                                    {availableTimes.map((time) => (
                                                        <Badge
                                                            key={time}
                                                            bg={selectedTime === time ? "primary" : "light"}
                                                            text={selectedTime === time ? "light" : "dark"}
                                                            className="time-slot-badge"
                                                            onClick={() => setSelectedTime(time)}
                                                        >
                                                            {time}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </Form.Group>

                                            <div className="text-center mt-4">
                                                <Button variant="primary" type="submit" size="lg">
                                                    Confirmer la réservation
                                                </Button>
                                            </div>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
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
                        <h2>Les engrenages vous attendent !</h2>
                        <p className="lead mb-4">Êtes-vous prêts à décoder les secrets du professeur Von Gears ?</p>
                        <Button
                            variant="light"
                            size="lg"
                            className="me-3"
                            onClick={() => setShowBookingForm(true)}
                        >
                            Réserver maintenant
                        </Button>
                        <Button variant="outline-light" size="lg" href="/games">
                            Découvrir nos autres aventures
                        </Button>
                    </motion.div>
                </Container>
            </section>
        </div>
    );
}

export default AtelierPage;