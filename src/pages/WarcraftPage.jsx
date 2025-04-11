import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Badge, Carousel, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
    FaUserFriends,
    FaClock,
    FaStar,
    FaShieldAlt,
    FaSkull,
    FaGem,
    FaDragon
} from 'react-icons/fa';
import alliance from '../assets/wow1.webp';
import horde from '../assets/wow2.jpg';
import nightElf from '../assets/wow3.webp';
import undead from '../assets/wow4.jpg';
import image from '../assets/wow6.jpeg';
import '../styles/WarcraftPage.css';

const WarcraftPage = () => {
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
        title: 'La Quête d\'Azeroth',
        tagline: 'Pour la Horde ou pour l\'Alliance - À vous de choisir votre destin.',
        description: 'Plongez dans l\'univers épique de World of Warcraft ! La légendaire bataille entre la Horde et l\'Alliance fait rage, et une puissante relique capable de changer l\'équilibre des forces vient d\'être découverte. À vous de vous frayer un chemin à travers les pièges, énigmes et gardiens pour vous en emparer avant le camp adverse.',
        longDescription: `Un artefact d'une puissance incommensurable, renfermant l'essence même des Titans, a été découvert dans les ruines d'une antique cité. Cette relique, le Cœur d'Azeroth, pourrait déterminer le sort du monde entier. La Horde et l'Alliance ont chacune envoyé leurs champions les plus habiles pour s'en emparer.

        Votre équipe d'aventuriers représente l'élite des forces de votre faction. Vous devez naviguer à travers les défenses anciennes, déchiffrer des runes elfiques, éviter les pièges mortels et affronter des énigmes qui mettront à l'épreuve votre sagesse et votre courage.
        
        Le temps presse : le portail magique ne restera ouvert que 60 minutes. Si vous échouez, non seulement vous serez piégés pour l'éternité, mais l'équilibre des forces sur Azeroth sera irrémédiablement bouleversé.`,
        difficulty: 4,
        players: '2-8',
        duration: 40,
        successRate: '35%',
        images: [
           image,
        ],
        challenges: [
            'Déchiffrer les anciennes runes de puissance',
            'Reconstituer l\'amulette brisée de Vol\'jin',
            'Surmonter l\'épreuve des quatre éléments',
            'Résoudre l\'énigme du gardien Titan'
        ],
        factions: [
            { 
                name: 'Alliance', 
                trait: 'Honneur et diplomatie', 
                icon: 'alliance',
                image: alliance
                
            },
            { 
                name: 'Horde', 
                trait: 'Force et persévérance', 
                icon: 'horde',
                image: horde
                
            },
            { 
                name: 'Elfes de la nuit', 
                trait: 'Sagesse et ancienneté', 
                icon: 'night-elf',
                image: nightElf
            
            },
            { 
                name: 'Morts-vivants', 
                trait: 'Résilience et ténacité', 
                icon: 'undead',
                image: undead
              
            }
        ]
    };

    return (
        <div className="warcraft-page">
            {/* Hero Section */}
            <section className="warcraft-hero" >
                <div className="warcraft-hero-overlay">
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
                                    <h2>L'aventure vous attend en Azeroth</h2>
                                    <div className="separator"></div>
                                    <p className="lead">{escapeGame.description}</p>
                                    <p>{escapeGame.longDescription}</p>
                                    <div className="game-stats d-flex flex-wrap">
                                        <div className="stat-item">
                                            <FaShieldAlt className="stat-icon" />
                                            <div>
                                                <h4>Combat</h4>
                                                <p>Stratégique</p>
                                            </div>
                                        </div>
                                        <div className="stat-item">
                                            <FaGem className="stat-icon" />
                                            <div>
                                                <h4>Récompenses</h4>
                                                <p>Légendaires</p>
                                            </div>
                                        </div>
                                        <div className="stat-item">
                                            <FaSkull className="stat-icon" />
                                            <div>
                                                <h4>Taux de réussite</h4>
                                                <p>{escapeGame.successRate}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                            <img
                                                className="d-block w-100"
                                                src={image}
                                                alt={"Image de l'escape game"}
                                            />
                                      
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
                        <p className="text-center mb-5">Chaque faction d'Azeroth possède des forces et des faiblesses uniques</p>

                        <Row>
                            {escapeGame.factions.map((faction, index) => (
                                <Col md={3} sm={6} className="mb-4" key={index}>
                                    <Card className="faction-card text-center h-100">
                                        <div className="faction-image-container">
                                            <div className={`faction-color ${faction.icon}`}>
                                                <img 
                                                    src={faction.image} 
                                                    alt={`Emblème ${faction.name}`} 
                                                    className="faction-emblem-img" 
                                                />
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{faction.name}</Card.Title>
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
                        <h2 className="text-center">Les défis d'Azeroth</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">Préparez-vous à affronter des épreuves légendaires qui mettront à l'épreuve votre courage et votre intelligence</p>

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
                        <h2 className="text-center">Réserver votre aventure</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">Le destin d'Azeroth est entre vos mains, héros</p>

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
                                                        <Form.Label>Nombre d'aventuriers</Form.Label>
                                                        <Form.Control
                                                            type="number"
                                                            min="2"
                                                            max="8"
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
                        <h2>Pour la Gloire d'Azeroth !</h2>
                        <p className="lead mb-4">Êtes-vous prêts à entrer dans la légende ?</p>
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

export default WarcraftPage;