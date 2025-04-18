import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Badge, Carousel, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
    FaUserFriends,
    FaClock,
    FaStar,
    FaShieldAlt,
    FaMagic,
    FaGem,
    FaTrophy,
    
} from 'react-icons/fa';
import lol from '../assets/lol.jpg';
import lol1 from '../assets/lol1.jpg';
import lol2 from '../assets/lol2.avif';
import lol3 from '../assets/lol3.jpg';
import demacia from '../assets/demacia.png';
import noxus from '../assets/Noxus.png';
import ionia from '../assets/ionia.png';
import piltover from '../assets/piltover.webp';
import '../styles/LegendPage.css';

const LegendPage = () => {
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
    const availableTimes = ['10:00', '12:30', '14:00', '16:30', '18:00', '20:30'];

    // Informations de l'escape game
    const escapeGame = {
        title: 'La Légende de l\'Arène',
        tagline: 'Déjouer les complots, percer les mystères de Runeterra.',
        description: 'Plongez dans l\'univers épique de League of Legends ! Une relique ancestrale menaçant l\'équilibre entre les royaumes de Runeterra a été dérobée. Votre équipe de champions doit infiltrer les territoires ennemis, résoudre des énigmes et récupérer l\'artefact avant que le chaos ne s\'abatte sur le monde.',
        longDescription: `La cristal Nexus, source de pouvoir magique reliant les différentes régions de Runeterra, a été fragmenté par un mystérieux saboteur. Les fragments ont été dispersés à travers les royaumes, et sans eux, la magie qui maintient la paix entre les nations s'affaiblit.

        Vous et votre équipe incarnez une élite de Champions choisis par le Conseil des Invocateurs pour récupérer ces fragments avant qu'ils ne tombent entre de mauvaises mains. Votre mission vous mènera à travers Demacia, Noxus, Ionia et Piltover, où vous devrez faire face aux gardiens, pièges et énigmes qui protègent les fragments.
        
        Mais attention : une heure seulement vous est accordée pour accomplir votre quête. Au-delà, le déséquilibre sera irréversible et Runeterra sombrera dans le chaos total.`,
        difficulty: 5,
        players: '2-5',
        duration: 60,
        successRate: '40%',
        images: [
            lol1,
            lol2,
            lol3
        ],
        challenges: [
            'Déchiffrer les runes magiques de Ryze',
            'Résoudre l\'énigme du labyrinthe de Demacia',
            'Survivre aux pièges mortels de Noxus',
            'Reconstruire le Cristal Nexus brisé'
        ],
        regions: [
            { 
                name: 'Demacia', 
                trait: 'Justice et honneur', 
                icon: 'demacia',
                image: demacia,
               
            },
            { 
                name: 'Noxus', 
                trait: 'Force et ambition', 
                icon: 'noxus',
                image: noxus,
          
            },
            { 
                name: 'Ionia', 
                trait: 'Harmonie et équilibre', 
                icon: 'ionia',
                image: ionia,
             
            },
            { 
                name: 'Piltover', 
                trait: 'Innovation et progrès', 
                icon: 'piltover',
                image: piltover,
               
            }
        ]
    };

    return (
        <div className="legend-page">
            {/* Hero Section */}
            <section className="legend-hero" >
                <div className="legend-hero-overlay">
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
                                    <h2>Bienvenue à Runeterra</h2>
                                    <div className="separator"></div>
                                    <p className="lead">{escapeGame.description}</p>
                                    <p>{escapeGame.longDescription}</p>
                                    <div className="game-stats d-flex flex-wrap">
                                        <div className="stat-item">
                                            <FaMagic className="stat-icon" />
                                            <div>
                                                <h4>Magie</h4>
                                                <p>Puissante</p>
                                            </div>
                                        </div>
                                        <div className="stat-item">
                                            <FaShieldAlt className="stat-icon" />
                                            <div>
                                                <h4>Stratégie</h4>
                                                <p>Essentielle</p>
                                            </div>
                                        </div>
                                        <div className="stat-item">
                                            <FaTrophy className="stat-icon" />
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

            {/* Regions Section */}
            <section className="regions-section py-5">
                <Container>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="text-center">Choisissez votre région</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">Chaque région de Runeterra possède ses propres forces et défis</p>

                        <Row>
                            {escapeGame.regions.map((region, index) => (
                                <Col md={3} sm={6} className="mb-4" key={index}>
                                    <Card className="region-card text-center h-100">
                                        <div className="region-image-container">
                                            <div className={`region-color ${region.icon}`}>
                                                <img 
                                                    src={region.image} 
                                                    alt={`Emblème ${region.name}`} 
                                                    className="region-emblem-img" 
                                                />
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{region.name}</Card.Title>
                                            <Card.Text>{region.trait}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </motion.div>
                </Container>
            </section>

            {/* Champions Section */}
            <section className="champions-section py-5">
                <Container>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="text-center">Les champions vous guideront</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">Dans cette quête, les compétences de différents champions seront nécessaires</p>

                        <Row className="justify-content-center">
                            <Col lg={3} md={6} className="mb-4">
                                <div className="champion-card">
                                    <div className="champion-role assassin">ASSASSIN</div>
                                    <div className="champion-description">
                                        <h4>Infiltration</h4>
                                        <p>Accédez à des zones secrètes et désamorcez des pièges mortels.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} className="mb-4">
                                <div className="champion-card">
                                    <div className="champion-role mage">MAGE</div>
                                    <div className="champion-description">
                                        <h4>Arcane</h4>
                                        <p>Déchiffrez les runes magiques et résolvez les énigmes ésotériques.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} className="mb-4">
                                <div className="champion-card">
                                    <div className="champion-role tank">TANK</div>
                                    <div className="champion-description">
                                        <h4>Protection</h4>
                                        <p>Surmontez les obstacles physiques et résistez aux défis de force.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} className="mb-4">
                                <div className="champion-card">
                                    <div className="champion-role support">SUPPORT</div>
                                    <div className="champion-description">
                                        <h4>Coordination</h4>
                                        <p>Combinez les indices et synchronisez les actions de l'équipe.</p>
                                    </div>
                                </div>
                            </Col>
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
                        <h2 className="text-center">Les épreuves de la faille</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">Votre équipe devra surmonter ces défis pour restaurer l'équilibre de Runeterra</p>

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
                        <h2 className="text-center">Réserver votre mission</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">Le Conseil des Invocateurs attend votre équipe de champions</p>

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
                                                        <Form.Label>Nombre de champions</Form.Label>
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
                        <h2>Pour l'honneur de Runeterra !</h2>
                        <p className="lead mb-4">Êtes-vous prêts à relever le défi et sauver les terres magiques ?</p>
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

export default LegendPage;