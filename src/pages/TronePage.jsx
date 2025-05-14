import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Badge, Carousel, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaUserFriends, FaClock, FaStar, FaShieldAlt, FaDragon, FaChessKing } from 'react-icons/fa';
import trone1 from '../assets/trone.jpeg';
import trone2 from '../assets/escapetrone.webp';
import trone3 from '../assets/escapetrone2.jpg';
import fond from '../assets/fondtronepage.webp';
import baratheon from '../assets/baratheon.jpg';
import stark from '../assets/stark.webp';
import lannister from '../assets/lannister.webp';
import targaryen from '../assets/targaryen.webp';
import {
    GiWolfHead,
    GiLion,
    GiDragonHead,
    GiDeerHead
} from 'react-icons/gi';
import '../styles/TronePage.css';

const TronePage = () => {
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
        title: 'Le Trône de Fer',
        tagline: 'L\'hiver arrive... Saurez-vous conquérir le trône ?',
        description: 'Plongez dans les intrigues de Westeros et combattez pour conquérir le trône de fer. Déjouez les complots, formez des alliances stratégiques et découvrez les secrets qui se cachent dans l\'ombre du pouvoir. Seuls les plus perspicaces et les plus rusés pourront s\'emparer du Trône de Fer et régner sur les Sept Royaumes.',
        longDescription: `Le Roi Robert Baratheon est mort, et les Sept Royaumes sont au bord de la guerre civile. En tant que membres d'une des grandes maisons de Westeros, vous êtes convoqués dans la salle du Conseil Restreint où un complot se prépare.

        Votre mission: retrouver les preuves cachées dans le château qui détermineront le véritable héritier du trône. Mais attention, les espions de la Couronne vous surveillent, et vous n'avez qu'une heure avant que les gardes ne reviennent.
        
        Résolvez des énigmes inspirées de l'univers de Game of Thrones, découvrez des passages secrets, déchiffrez d'anciens parchemins et évitez les pièges mortels. Chaque maison possède des compétences uniques - saurez-vous les utiliser à bon escient?`,
        difficulty: 4,
        players: '2-6',
        duration: 90,
        successRate: '32%',
        images: [
            trone1,
            trone2,
            trone3,
        ],
        challenges: [
            'Énigmes cryptographiques basées sur les blasons des maisons',
            'Mécanismes cachés inspirés des intrigues de la cour',
            'Puzzles stratégiques rappelant les batailles historiques',
            'Reconstitution d\'artefacts anciens des Sept Royaumes'
        ],
        houses: [
            { name: 'Stark', trait: 'Honneur et persévérance', image: stark },
            { name: 'Baratheon', trait: 'Force et loyauté', image: baratheon },
            { name: 'Lannister', trait: 'Richesse et influence', image: lannister },
            { name: 'Targaryen', trait: 'Pouvoir et ambition', image: targaryen }
        ]
    };

  

    return (
        <div className="trone-page">
            {/* Hero Section */}
            <section className="trone-hero">
                <div className="trone-hero-overlay">
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
                                onClick={() => na}
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
                    >
                        <Row className="align-items-center">
                            <Col lg={6} className="mb-4 mb-lg-0">
                                <div className="game-description">
                                    <h2>L'aventure vous attend</h2>
                                    <div className="separator"></div>
                                    <p className="lead">{escapeGame.description}</p>
                                    <p>{escapeGame.longDescription}</p>
                                    <div className="game-stats d-flex flex-wrap">
                                        <div className="stat-item">
                                            <FaShieldAlt className="stat-icon" />
                                            <div>
                                                <h4>Niveau</h4>
                                                <p>Confirmé</p>
                                            </div>
                                        </div>
                                        <div className="stat-item">
                                            <FaChessKing className="stat-icon" />
                                            <div>
                                                <h4>Stratégie</h4>
                                                <p>Indispensable</p>
                                            </div>
                                        </div>
                                        <div className="stat-item">
                                            <FaDragon className="stat-icon" />
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

            {/* Houses Section */}
            <section className="houses-section py-5">
                <Container>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="text-center">Choisissez votre maison</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">Chaque maison de Westeros possède des traits uniques qui influenceront votre expérience</p>

                        <Row>
                            {escapeGame.houses.map((house, index) => (
                                <Col md={3} sm={6} className="mb-4" key={index}>
                                    <Card className="house-card text-center h-100">
                                        <div className="house-image-container">
                                            <img
                                                src={house.image}
                                                alt={`Blason ${house.name}`}
                                                className="house-image"
                                            />
                                        </div>
                                        <Card.Body>
                                            <Card.Title>Maison {house.name}</Card.Title>
                                            <Card.Text>{house.trait}</Card.Text>
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
                        <h2 className="text-center">Les défis qui vous attendent</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">Préparez-vous à affronter ces épreuves pour conquérir le trône</p>

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
                        <h2 className="text-center">Réserver votre session</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">Choisissez une date et une heure pour votre aventure</p>

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
                                                        <Form.Label>Nombre de participants</Form.Label>
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
                        <h2>Prêt à conquérir le Trône de Fer ?</h2>
                        <p className="lead mb-4">L'hiver approche, et seuls les plus stratèges survivront...</p>
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

export default TronePage;