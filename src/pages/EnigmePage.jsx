import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Badge, Carousel, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
    FaUserFriends,
    FaClock,
    FaStar,
    FaSearch,
    FaLightbulb,
    FaEye,
    FaClipboardCheck
} from 'react-icons/fa';
import enigme from '../assets/enigme.webp';
import enigme2 from '../assets/enigme2.jpg';
import enigme3 from '../assets/enigme3.jpg';
import enigme4 from '../assets/enigme4.jpg'; 
import bureau from '../assets/bureau.jpg';
import preuve from '../assets/preuve.jpg';
import labo from '../assets/labo.avif';
import secret from '../assets/secret.jpg';
import '../styles/EnigmePage.css';
import { useNavigate } from 'react-router-dom';

const EnigmePage = () => {
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [participants, setParticipants] = useState(2);
    const navigate = useNavigate();

    const handleBooking = () => {
        const gameId = 'enigme'; // ID de l'escape game
        navigate(`/reservation/${gameId}`)
    }; 

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    // Exemple de créneaux disponibles
    const availableTimes = ['10:00', '12:30', '15:00', '17:30', '19:00', '21:30'];

    // Informations de l'escape game
    const escapeGame = {
        title: 'Énigme de l\'Absence',
        tagline: 'Chaque disparition cache une vérité. Saurez-vous la découvrir ?',
        description: 'Vous entrez dans l\'univers obscur de mystères et de disparitions. Un proche a disparu dans des circonstances énigmatiques, et vous êtes appelés à explorer les indices laissés derrière lui. Chaque pièce de la salle renferme un élément crucial pour résoudre le mystère de sa disparition.',
        longDescription: `Le détective privé Martin Delorme est porté disparu depuis une semaine. Sa dernière enquête concernait une série de disparitions mystérieuses dans la région, toutes liées par d'étranges symboles laissés sur les lieux.

        En tant qu'amis et collègues, vous avez décidé d'explorer son bureau pour comprendre ce qui lui est arrivé. À votre arrivée, vous découvrez que son espace de travail semble avoir été organisé de façon à laisser des indices. Une note énigmatique vous invite à résoudre ce qu'il a commencé avant qu'il ne soit trop tard.
        
        Des photos de scènes de crime, des notes codées, des objets apparemment sans rapport entre eux... Tout semble faire partie d'un jeu macabre dont Martin pourrait être la dernière victime. Vous avez 60 minutes pour reconstituer son enquête et peut-être le sauver avant qu'il ne rejoigne définitivement les disparus.`,
        difficulty: 4,
        players: '2-6',
        duration: 60,
        successRate: '30%',
        images: [
            enigme2,
            enigme3,
            enigme4,
            
        ],
        challenges: [
            'Reconstituer la chronologie des disparitions',
            'Déchiffrer le carnet codé du détective',
            'Identifier le lien entre les différents objets',
            'Localiser la cachette du ravisseur'
        ],
        rooms: [
            { 
                name: 'Bureau du détective', 
                trait: 'Indices personnels et professionnels', 
                icon: 'bureau',
                image: bureau
                
            },
            { 
                name: 'Salle des preuves', 
                trait: 'Documents et photos des victimes', 
                icon: 'preuves',
                image: preuve
              
            },
            { 
                name: 'Laboratoire', 
                trait: 'Analyses et expérimentations', 
                icon: 'laboratoire',
                image: labo
              
            },
            { 
                name: 'Pièce secrète', 
                trait: 'Révélations finales', 
                icon: 'secret',
                image: secret
               
            }
        ]
    };


    return (
        <div className="enigme-page">
            {/* Hero Section */}
            <section className="enigme-hero" >
                <div className="enigme-hero-overlay">
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
                                onClick={handleBooking}
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
                                    <h2>L'enquête commence</h2>
                                    <div className="separator"></div>
                                    <p className="lead">{escapeGame.description}</p>
                                    <p>{escapeGame.longDescription}</p>
                                    <div className="game-stats d-flex flex-wrap">
                                        <div className="stat-item">
                                            <FaSearch className="stat-icon" />
                                            <div>
                                                <h4>Investigation</h4>
                                                <p>Minutieuse</p>
                                            </div>
                                        </div>
                                        <div className="stat-item">
                                            <FaLightbulb className="stat-icon" />
                                            <div>
                                                <h4>Réflexion</h4>
                                                <p>Complexe</p>
                                            </div>
                                        </div>
                                        <div className="stat-item">
                                            <FaEye className="stat-icon" />
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

            {/* Rooms Section */}
            <section className="rooms-section py-5">
                <Container>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="text-center">Les pièces du mystère</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">Chaque espace renferme des indices cruciaux pour résoudre l'énigme</p>

                        <Row>
                            {escapeGame.rooms.map((room, index) => (
                                <Col md={3} sm={6} className="mb-4" key={index}>
                                    <Card className="room-card text-center h-100">
                                        <div className="room-image-container">
                                            <div className={`room-color ${room.icon}`}>
                                                <img 
                                                    src={room.image} 
                                                    alt={`${room.name}`} 
                                                    className="room-icon-img" 
                                                />
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{room.name}</Card.Title>
                                            <Card.Text>{room.trait}</Card.Text>
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
                        <h2 className="text-center">Les étapes de l'enquête</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">Votre équipe devra franchir ces obstacles pour résoudre l'affaire</p>

                        <Row className="justify-content-center">
                            {escapeGame.challenges.map((challenge, index) => (
                                <Col lg={6} className="mb-4" key={index}>
                                    <div className="challenge-item">
                                        <div className="challenge-number">{index + 1}</div>
                                        <div className="challenge-description">
                                            <h4>Étape {index + 1}</h4>
                                            <p>{challenge}</p>
                                        </div>
                                    </div>
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
                        <h2>Le temps presse !</h2>
                        <p className="lead mb-4">Êtes-vous prêts à résoudre cette affaire avant qu'il ne soit trop tard ?</p>
                        <Button
                            variant="light"
                            size="lg"
                            className="me-3"
                            onClick={handleBooking}
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

export default EnigmePage;