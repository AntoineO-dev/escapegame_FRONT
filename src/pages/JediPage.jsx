import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Badge, Carousel, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
    FaUserFriends,
    FaClock,
    FaStar,
    FaJedi,
    FaRocket,
    FaLightbulb,
    FaShieldAlt,
    FaGalacticRepublic,
    FaEmpire
} from 'react-icons/fa';
import starwars4 from '../assets/starwars4.jpg';
import starwars2 from '../assets/starwars2.jpg';
import starwars3 from '../assets/starwars3.webp';
import '../styles/JediPage.css';

const JediPage = () => {
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
    const availableTimes = ['10:00', '12:00', '14:30', '17:00', '19:30', '21:00'];

    // Informations de l'escape game
    const escapeGame = {
        title: 'La Quête du Jedi',
        tagline: 'Que la Force soit avec vous... Parviendrez-vous à accomplir votre destin ?',
        description: 'Plongez dans l\'univers de Star Wars et embarquez dans une quête épique pour devenir un véritable Jedi. Maîtrisez la Force, résolvez des énigmes anciennes et affrontez vos peurs intérieures pour restaurer la paix dans la galaxie et empêcher la montée de l\'Empire.',
        longDescription: `Les forces obscures gagnent du terrain dans la galaxie. En tant que padawans prometteurs, vous êtes envoyés dans un temple Jedi abandonné où se trouve un holocron ancien contenant des connaissances cruciales pour combattre l'Empire naissant.

        Votre mission: résoudre les épreuves du temple pour accéder à l'holocron tout en évitant les pièges laissés par les Sith. Mais attention, le temple est instable et pourrait s'effondrer dans une heure, vous piégeant à jamais.
        
        Explorez des salles mystérieuses inspirées de la saga Star Wars, utilisez la Force pour résoudre des puzzles complexes, et prouvez votre valeur en tant que futurs gardiens de la paix galactique. Chaque décision affectera votre parcours vers le côté lumineux... ou obscur de la Force.`,
        difficulty: 3,
        players: '2-4',
        duration: 60,
        successRate: '45%',
        images: [
            starwars4,
            starwars2,
            starwars3

        ],
        challenges: [
            'Manipulation de la Force pour résoudre des puzzles environnementaux',
            'Déchiffrage de messages codés en langue Aurebesh',
            'Construction d\'un sabre laser fonctionnel',
            'Programmation d\'un droïde pour accéder à des zones inaccessibles'
        ],
        factions: [
            { name: 'Jedi', trait: 'Sagesse et discipline', icon: 'jedi' },
            { name: 'Rebelles', trait: 'Courage et détermination', icon: 'rebel' },
            { name: 'Mandaloriens', trait: 'Honneur et habileté', icon: 'helmet' },
            { name: 'Contrebandiers', trait: 'Astuce et adaptabilité', icon: 'ship' }
        ]
    };

    return (
        <div className="jedi-page">
            {/* Hero Section */}
            <section className="jedi-hero">
                <div className="jedi-hero-overlay">
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
                                    <h2>La formation du Jedi commence</h2>
                                    <div className="separator"></div>
                                    <p className="lead">{escapeGame.description}</p>
                                    <p>{escapeGame.longDescription}</p>
                                    <div className="game-stats d-flex flex-wrap">
                                        <div className="stat-item">
                                            <FaJedi className="stat-icon" />
                                            <div>
                                                <h4>Combat</h4>
                                                <p>Intermédiaire</p>
                                            </div>
                                        </div>
                                        <div className="stat-item">
                                            <FaGalacticRepublic className="stat-icon" />
                                            <div>
                                                <h4>Usage de la Force</h4>
                                                <p>Essentiel</p>
                                            </div>
                                        </div>
                                        <div className="stat-item">
                                            <FaEmpire className="stat-icon" />
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
                                                alt={`Salle ${index + 1} - ${escapeGame.title}`}
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </Col>
                        </Row>
                    </motion.div>
                </Container>
            </section>

            {/* Factions Section */}
            <section className="factions-section py-5">
                <Container>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="text-center">Choisissez votre faction</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">Chaque faction galactique possède des compétences uniques qui influenceront votre approche</p>

                        <Row>
                            {escapeGame.factions.map((faction, index) => (
                                <Col md={3} sm={6} className="mb-4" key={index}>
                                    <Card className="faction-card text-center h-100">
                                        <div className={`faction-icon faction-icon-${faction.icon}`}>
                                            {faction.icon === 'jedi' && <FaJedi size={48} />}
                                            {faction.icon === 'rebel' && <FaGalacticRepublic size={48} />}
                                            {faction.icon === 'helmet' && <FaShieldAlt size={48} />}
                                            {faction.icon === 'ship' && <FaRocket size={48} />}
                                        </div>
                                        <Card.Body>
                                            <Card.Title>Les {faction.name}</Card.Title>
                                            <Card.Text>{faction.trait}</Card.Text>
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
                        <h2 className="text-center">Les épreuves Jedi</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">Maîtrisez ces défis pour prouver que vous êtes dignes du titre de Jedi</p>

                        <Row className="justify-content-center">
                            {escapeGame.challenges.map((challenge, index) => (
                                <Col lg={6} className="mb-4" key={index}>
                                    <div className="challenge-item">
                                        <div className="challenge-number">{index + 1}</div>
                                        <div className="challenge-description">
                                            <h4>Épreuve {index + 1}</h4>
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
                        <h2 className="text-center">Réserver votre mission</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">Le Conseil Jedi vous attend, choisissez quand vous présenter</p>

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
                                                        <Form.Label>Nombre de padawans</Form.Label>
                                                        <Form.Control
                                                            type="number"
                                                            min="2"
                                                            max="5"
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
                        <h2>Prêt à débuter votre formation Jedi ?</h2>
                        <p className="lead mb-4">Que la Force soit avec vous dans cette aventure galactique...</p>
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

export default JediPage;