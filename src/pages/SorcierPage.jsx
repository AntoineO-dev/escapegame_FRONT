import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Badge, Carousel, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
    FaUser,
    FaClock,
    FaStar,
    FaHatWizard,
    FaBook,
    FaWandMagicSparkles,
    FaFeather
} from 'react-icons/fa6';
import fondpotter from '../assets/fondpotter.jpg';
import potter1 from '../assets/potter1.jpg';
import potter2 from '../assets/potter2.jpg';
import potter3 from '../assets/potter3.png';
import gryffondor from '../assets/gryffondor.webp';
import poufsouffle from '../assets/poufsouffle.webp';
import serdaigle from '../assets/serdaigle.webp';
import serpentard from '../assets/serpentard.webp';
import '../styles/SorcierPage.css';

const SorcierPage = () => {
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
        title: 'Les Mystères de Poudlard',
        tagline: 'Votre magie sera-t-elle assez puissante pour résoudre tous les secrets ?',
        description: 'Plongez dans l\'univers magique d\'Harry Potter et explorez les secrets cachés de Poudlard. Résolvez des énigmes, lancez des sortilèges et découvrez des passages secrets pour accomplir votre mission avant que les forces obscures ne prennent le contrôle de l\'école de sorcellerie.',
        longDescription: `Une mystérieuse menace plane sur Poudlard. Des artefacts magiques essentiels à l'école ont disparu, et les protections magiques commencent à s'affaiblir. En tant que nouveaux étudiants prometteurs, vous êtes convoqués par le directeur qui vous confie une mission cruciale.

        Votre tâche : explorer la Salle sur Demande qui s'est transformée en dédale d'énigmes représentant les différentes parties du château. Vous devez retrouver les artefacts perdus et déjouer le complot avant que l'heure ne soit écoulée et que Poudlard ne soit vulnérable à une attaque.
        
        Faites bon usage de vos baguettes magiques, consultez grimoires anciens et potions, et surtout, restez sur vos gardes. Les tableaux parlants vous donneront des indices, mais méfiez-vous des fausses pistes. Chaque maison possède des compétences particulières - utilisez-les judicieusement pour triompher.`,
        difficulty: 3,
        players: '3-8',
        duration: 60,
        successRate: '40%',
        images: [
            potter1,
            potter2,
            potter3

        ],
        challenges: [
            'Déchiffrer des sortilèges anciens dans la bibliothèque',
            'Préparer une potion magique aux effets surprenants',
            'Résoudre les énigmes mouvantes de l\'escalier principal',
            'Identifier les symboles cachés dans la Salle des Trophées'
        ],
        houses: [
            { name: 'Gryffondor', trait: 'Courage et bravoure', icon: 'lion' },
            { name: 'Poufsouffle', trait: 'Loyauté et persévérance', icon: 'badger' },
            { name: 'Serdaigle', trait: 'Intelligence et créativité', icon: 'eagle' },
            { name: 'Serpentard', trait: 'Ambition et ruse', icon: 'snake' }
        ]
    };

    return (
        <div className="sorcier-page">
            {/* Hero Section */}
            <section className="sorcier-hero" >
                <div className="sorcier-hero-overlay">
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
                                    <FaUser />
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
                       
                    >
                        <Row className="align-items-center">
                            <Col lg={6} className="mb-4 mb-lg-0">
                                <div className="game-description">
                                    <h2>Bienvenue à Poudlard</h2>
                                    <div className="separator"></div>
                                    <p className="lead">{escapeGame.description}</p>
                                    <p>{escapeGame.longDescription}</p>
                                    <div className="game-stats d-flex flex-wrap">
                                        <div className="stat-item">
                                            <FaHatWizard className="stat-icon" />
                                            <div>
                                                <h4>Magie</h4>
                                                <p>Avancée</p>
                                            </div>
                                        </div>
                                        <div className="stat-item">
                                            <FaWandMagicSparkles className="stat-icon" />
                                            <div>
                                                <h4>Sortilèges</h4>
                                                <p>Essentiels</p>
                                            </div>
                                        </div>
                                        <div className="stat-item">
                                            <FaBook className="stat-icon" />
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
                        <p className="text-center mb-5">Chaque maison de Poudlard possède des qualités uniques qui influenceront votre approche</p>

                        <Row>
                            {escapeGame.houses.map((house, index) => (
                                <Col md={3} sm={6} className="mb-4" key={index}>
                                    <Card className="house-card text-center h-100">
                                        <div className="house-image-container">
                                            {house.icon === 'lion' && (
                                                <div className="house-color gryffindor">
                                                    <img src={gryffondor} alt="Emblème Gryffondor" className="house-emblem-img" />
                                                </div>
                                            )}
                                            {house.icon === 'badger' && (
                                                <div className="house-color hufflepuff">
                                                    <img src={poufsouffle} alt="Emblème Poufsouffle" className="house-emblem-img" />
                                                </div>
                                            )}
                                            {house.icon === 'eagle' && (
                                                <div className="house-color ravenclaw">
                                                    <img src={serdaigle} alt="Emblème Serdaigle" className="house-emblem-img" />
                                                </div>
                                            )}
                                            {house.icon === 'snake' && (
                                                <div className="house-color slytherin">
                                                    <img src={serpentard} alt="Emblème Serpentard" className="house-emblem-img" />
                                                </div>
                                            )}
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
                        <h2 className="text-center">Les épreuves magiques</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">Maîtrisez ces défis pour sauver Poudlard et devenir de véritables sorciers</p>

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
                        <p className="text-center mb-5">Le Choixpeau vous attend, sélectionnez une date pour votre aventure</p>

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
                                                        <Form.Label>Nombre d'élèves</Form.Label>
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
                        <h2>Prêt à entrer dans l'école de magie ?</h2>
                        <p className="lead mb-4">Les mystères de Poudlard n'attendent que vous...</p>
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

export default SorcierPage;