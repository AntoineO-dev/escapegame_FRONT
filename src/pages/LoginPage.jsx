import { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import AuthService from "../services/AuthService";
import { Button, Container, Form, Card, Row, Col } from "react-bootstrap";
import AuthContext from "../contexte/AuthContext";
import { jwtDecode } from "jwt-decode";
import { FaLock, FaEnvelope, FaSignInAlt } from "react-icons/fa";
import "../styles/LoginPage.css";

const LoginPage = () => {
    const [currentUser, setCurrentUser] = useState({
        email: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { setIsLoggedIn, setUser } = useContext(AuthContext);

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    useEffect(() => {
        document.body.classList.add('login-page-body');
        return () => {
            document.body.classList.remove('login-page-body');
        };
    }, []);

    const handleChange = (e) => {
        setCurrentUser({ ...currentUser, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await AuthService.login(currentUser);
            localStorage.setItem("token", response.data.token);
            const decodedToken = jwtDecode(response.data.token);
            setUser(decodedToken.user);
            setIsLoggedIn(true);
            toast.success("Connexion réussie");
            navigate("/");
        } catch (error) {
            toast.error("Email ou mot de passe incorrect");
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="login-page" >
            <div className="login-overlay">
                <Container className="login-container">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <Row className="justify-content-center">
                            <Col md={10} lg={8} xl={6}>
                                <Card className="login-card">
                                    <Card.Body className="p-5">
                                        <div className="text-center mb-4">
                                            
                                            <h2 className="login-title">Connexion</h2>
                                            <p className="login-subtitle">Accédez à votre compte et gérez vos réservations</p>
                                        </div>
                                        
                                        <Form onSubmit={handleSubmit}>
                                            <div className="form-floating mb-4">
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <FaEnvelope />
                                                    </span>
                                                    <Form.Control 
                                                        type="email" 
                                                        placeholder="Email" 
                                                        name="email" 
                                                        value={currentUser.email} 
                                                        onChange={handleChange}
                                                        className="form-control login-input"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className="form-floating mb-4">
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <FaLock />
                                                    </span>
                                                    <Form.Control 
                                                        type="password" 
                                                        placeholder="Mot de passe" 
                                                        name="password" 
                                                        value={currentUser.password} 
                                                        onChange={handleChange}
                                                        className="form-control login-input"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <Form.Check 
                                                    type="checkbox" 
                                                    id="rememberMe" 
                                                    label="Se souvenir de moi"
                                                    className="remember-check" 
                                                />
                                                <Link to="/forgot-password" className="forgot-link">
                                                    Mot de passe oublié?
                                                </Link>
                                            </div>
                                            
                                            <Button 
                                                variant="primary" 
                                                type="submit" 
                                                className="login-btn w-100"
                                                disabled={isLoading}
                                            >
                                                {isLoading ? (
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                ) : (
                                                    <FaSignInAlt className="me-2" />
                                                )}
                                                {isLoading ? "Connexion en cours..." : "Se connecter"}
                                            </Button>
                                            
                                            <div className="text-center mt-4">
                                                <p className="mb-0">
                                                    Pas encore de compte? {" "}
                                                    <Link to="/register" className="register-link">
                                                        S'inscrire
                                                    </Link>
                                                </p>
                                            </div>
                                        </Form>
                                    </Card.Body>
                                </Card>
                                
                                <div className="text-center mt-4 text-white">
                                    <Link to="/" className="back-home-link">
                                        Retour à l'accueil
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </motion.div>
                </Container>
            </div>
        </div>
    );
}

export default LoginPage;