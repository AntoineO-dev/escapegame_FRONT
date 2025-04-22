import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import escape from '../assets/escape.jpg';
import trone from '../assets/trone.jpeg'; 
import home from '../assets/home.jpg';
import '../styles/HomePage.css';


const HomePage = () => {
    // Données des Escape Games en salle
    const roomEscapeGames = [
        {
            id: 1,
            title: 'Le Trône de Fer',
            description: 'Plongez dans l\'univers de Westeros et combattez pour conquérir le trône. Déjouez les complots, formez des alliances et découvrez les secrets qui se cachent dans l\'ombre du pouvoir.',
            image: '/images/trone-de-fer.jpg',
            difficulty: 4,
            players: '2-6',
            duration: 60
        },
        {
            id: 2,
            title: 'La Quête du Jedi',
            description: 'Devenez un Jedi et sauvez la galaxie des forces obscures. Maîtrisez la Force, résolvez des énigmes anciennes et affrontez vos peurs intérieures pour restaurer la paix.',
            image: '/images/quete-jedi.jpg',
            difficulty: 3,
            players: '2-5',
            duration: 75
        },
        {
            id: 3,
            title: 'L\'épreuve des Sorciers',
            description: 'Affrontez les défis magiques et prouvez votre valeur dans cette aventure mystique. Préparez des potions, lancez des sortilèges et déchiffrez d\'anciens grimoires pour devenir le plus grand des sorciers.',
            image: '/images/epreuve-sorciers.jpg',
            difficulty: 5,
            players: '3-7',
            duration: 90
        }
    ];

    // Données des Escape Games à domicile
    const homeEscapeGames = [
        {
            id: 4,
            title: 'La Quête d\'Azeroth',
            description: 'Partez à l\'aventure dans le monde d\'Azeroth, où des créatures fantastiques et des trésors oubliés vous attendent. Une expérience immersive à vivre confortablement chez vous.',
            image: '/images/azeroth.jpg',
            difficulty: 3,
            players: '2-8',
            duration: 120
        },
        {
            id: 5,
            title: 'La Légende de l\'Arène',
            description: 'Devenez un gladiateur et combattez pour la gloire dans cette aventure épique. Stratégie, courage et esprit d\'équipe seront vos meilleures armes.',
            image: '/images/arene.jpg',
            difficulty: 2,
            players: '4-10',
            duration: 90
        },
        {
            id: 6,
            title: 'Énigmes de l\'Absence',
            description: 'Résolvez les mystères et trouvez ce qui manque dans cette enquête captivante. Observation, déduction et perspicacité seront nécessaires pour percer le secret de l\'Absence.',
            image: '/images/enigmes-absence.jpg',
            difficulty: 4,
            players: '2-6',
            duration: 60
        },
        {
            id: 7,
            title: 'L\'Atelier des Engrenages',
            description: 'Créez des machines incroyables et résolvez des défis mécaniques dans cet escape game mêlant logique et créativité. Parfait pour les esprits scientifiques.',
            image: '/images/atelier-engrenages.jpg',
            difficulty: 4,
            players: '3-8',
            duration: 75
        }
    ];

    // Mini-jeux thématiques
    const miniGames = [
        {
            id: 1,
            title: 'Le Cryptogramme Mystique',
            description: 'Déchiffrez des codes secrets inspirés de nos escape games',
            image: '/images/mini-game1.jpg',
            link: '/mini-games/cryptogramme'
        },
        {
            id: 2,
            title: 'Labyrinthe de l\'Esprit',
            description: 'Naviguez à travers des labyrinthes complexes qui défient votre logique',
            image: '/images/mini-game2.jpg',
            link: '/mini-games/labyrinthe'
        },
        {
            id: 3,
            title: 'Mémoire des Anciens',
            description: 'Testez votre mémoire avec ce jeu inspiré de nos thèmes fantastiques',
            image: '/images/mini-game3.jpg',
            link: '/mini-games/memoire'
        }
    ];

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

            {/* Room Escape Games Section */}
            <section className="games-section room-games-section py-5">
                <Container>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="section-title text-center">Nos Escape Games en Salle</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">Découvrez nos univers immersifs et relevez des défis palpitants.</p>
                        
                        <Row>
                            {roomEscapeGames.map((game) => (
                                <Col lg={4} md={6} className="mb-4" key={game.id}>
                                    <Card className="game-card h-100">
                                        <div className="game-card-img-container">
                                            <Card.Img variant="top" src={trone} alt={game.title} className="game-card-img" />
                                            <div className="game-card-overlay">
                                                <div className="game-info">
                                                    <span><i className="fas fa-users"></i> {game.players} joueurs</span>
                                                    <span><i className="fas fa-clock"></i> {game.duration} min</span>
                                                    <span><i className="fas fa-star"></i> Difficulté: {game.difficulty}/5</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{game.title}</Card.Title>
                                            <Card.Text>{game.description}</Card.Text>
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

            {/* Home Escape Games Section */}
            <section className="games-section home-games-section py-5">
                <Container>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="section-title text-center">Nos Escape Games à Domicile</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">L'expérience Escape Game chez vous, pour des moments inoubliables entre amis ou en famille.</p>
                        
                        <Row>
                            {homeEscapeGames.map((game) => (
                                <Col lg={3} md={6} className="mb-4" key={game.id}>
                                    <Card className="game-card h-100">
                                        <div className="game-card-img-container">
                                            <Card.Img variant="top" src={game.image} alt={game.title} className="game-card-img" />
                                            <div className="game-card-overlay">
                                                <div className="game-info">
                                                    <span><i className="fas fa-users"></i> {game.players} joueurs</span>
                                                    <span><i className="fas fa-clock"></i> {game.duration} min</span>
                                                    <span><i className="fas fa-star"></i> Difficulté: {game.difficulty}/5</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{game.title}</Card.Title>
                                            <Card.Text>{game.description}</Card.Text>
                                        </Card.Body>
                                        <Card.Footer className="bg-transparent border-0 d-flex justify-content-between align-items-center">
                                            <Button variant="outline-primary" as={Link} to={`/home-games/${game.id}`}>Détails</Button>
                                            <Button variant="primary" as={Link} to="/order">Commander</Button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </motion.div>
                </Container>
            </section>

            {/* Mini Games Section */}
            <section className="mini-games-section py-5">
                <Container>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="section-title text-center">Mini-Jeux Thématiques</h2>
                        <div className="separator mx-auto"></div>
                        <p className="text-center mb-5">Entraînez-vous avec nos mini-jeux et préparez-vous à relever nos défis.</p>
                        
                        <Row className="justify-content-center">
                            {miniGames.map((game) => (
                                <Col md={4} className="mb-4" key={game.id}>
                                    <Card className="mini-game-card h-100">
                                        <Card.Img variant="top" src={game.image} alt={game.title} />
                                        <Card.Body>
                                            <Card.Title>{game.title}</Card.Title>
                                            <Card.Text>{game.description}</Card.Text>
                                            <Button variant="primary" as={Link} to={game.link} className="w-100">Jouer</Button>
                                        </Card.Body>
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
                        <Button variant="outline-light" size="lg">Commander un kit à domicile</Button>
                    </motion.div>
                </Container>
            </section>
        </div>
    );
}
 
export default HomePage;