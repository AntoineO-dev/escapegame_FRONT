import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import AuthService from "../services/AuthService";
import { Button, Container, Form, Card, Row, Col } from "react-bootstrap";
import { FaUser, FaEnvelope, FaLock, FaUserPlus, FaCheck, FaPhone } from "react-icons/fa";
import "../styles/RegisterPage.css";

const RegisterPage = () => {
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [passwordMessage, setPasswordMessage] = useState("");
    const navigate = useNavigate();

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    useEffect(() => {
        document.body.classList.add('register-page-body');
        return () => {
            document.body.classList.remove('register-page-body');
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        
        // Vérification de la force du mot de passe
        if (name === 'password') {
            checkPasswordStrength(value);
        }
    }

    const checkPasswordStrength = (password) => {
        // Critères de vérification
        const hasMinLength = password.length >= 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        
        let strength = 0;
        let message = "";
        
        if (hasMinLength) strength += 1;
        if (hasUpperCase) strength += 1;
        if (hasLowerCase) strength += 1;
        if (hasNumber) strength += 1;
        if (hasSpecialChar) strength += 1;
        
        // Message correspondant à la force du mot de passe
        if (strength === 0) message = "Entrez un mot de passe";
        else if (strength <= 2) message = "Mot de passe faible";
        else if (strength <= 4) message = "Mot de passe moyen";
        else message = "Mot de passe fort";
        
        setPasswordStrength(strength);
        setPasswordMessage(message);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validation des champs
        if (user.password !== user.confirmPassword) {
            toast.error("Les mots de passe ne correspondent pas");
            return;
        }
        
        if (passwordStrength < 3) {
            toast.error("Votre mot de passe est trop faible");
            return;
        }
        
        setIsLoading(true);
        try {
            await AuthService.register({
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                password: user.password,
                phone: user.phone
            });
            toast.success("Inscription réussie ! Vous pouvez maintenant vous connecter");
            navigate("/login");
        } catch (error) {
            if (error.response && error.response.data) {
                toast.error(error.response.data.message || "Une erreur est survenue lors de l'inscription");
            } else {
                toast.error("Une erreur est survenue lors de l'inscription");
            }
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    // Style pour la barre de force du mot de passe
    const getPasswordStrengthClass = () => {
        if (passwordStrength === 0) return "";
        if (passwordStrength <= 2) return "bg-danger";
        if (passwordStrength <= 4) return "bg-warning";
        return "bg-success";
    }

    return (
        <div className="register-page">
            <div className="register-overlay">
                <Container className="register-container">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <Row className="justify-content-center">
                            <Col md={10} lg={8} xl={7}>
                                <Card className="register-card">
                                    <Card.Body className="p-4 p-md-5">
                                        <div className="text-center mb-4">
                                            <h2 className="register-title">Créer un compte</h2>
                                            <p className="register-subtitle">Rejoignez l'aventure et réservez facilement nos escape games</p>
                                        </div>
                                        
                                        <Form onSubmit={handleSubmit}>
                                            <Row>
                                                <Col md={6}>
                                                    <div className="form-group mb-4">
                                                        <div className="input-group">
                                                            <span className="input-group-text">
                                                                <FaUser />
                                                            </span>
                                                            <Form.Control 
                                                                type="text" 
                                                                placeholder="Prénom" 
                                                                name="first_name" 
                                                                value={user.first_name} 
                                                                onChange={handleChange}
                                                                className="form-control register-input"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col md={6}>
                                                    <div className="form-group mb-4">
                                                        <div className="input-group">
                                                            <span className="input-group-text">
                                                                <FaUser />
                                                            </span>
                                                            <Form.Control 
                                                                type="text" 
                                                                placeholder="Nom" 
                                                                name="last_name" 
                                                                value={user.last_name} 
                                                                onChange={handleChange}
                                                                className="form-control register-input"
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            
                                            <div className="form-group mb-4">
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <FaEnvelope />
                                                    </span>
                                                    <Form.Control 
                                                        type="email" 
                                                        placeholder="Email" 
                                                        name="email" 
                                                        value={user.email} 
                                                        onChange={handleChange}
                                                        className="form-control register-input"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className="form-group mb-3">
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <FaPhone />
                                                    </span>
                                                    <Form.Control 
                                                        type="tel" 
                                                        placeholder="Numéro de téléphone" 
                                                        name="phone" 
                                                        value={user.phone} 
                                                        onChange={handleChange}
                                                        className="form-control register-input"
                                                        pattern="[0-9]{10}"
                                                        title="Le numéro doit contenir 10 chiffres"
                                                        required
                                                    />
                                                </div>
                                                <small className="form-text text-muted">Format: 0612345678</small>
                                            </div>
                                            
                                            <div className="form-group mb-3">
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <FaLock />
                                                    </span>
                                                    <Form.Control 
                                                        type="password" 
                                                        placeholder="Mot de passe" 
                                                        name="password" 
                                                        value={user.password} 
                                                        onChange={handleChange}
                                                        className="form-control register-input"
                                                        required
                                                        minLength={8}
                                                    />
                                                </div>
                                                
                                                {/* Barre de force du mot de passe */}
                                                {user.password && (
                                                    <div className="mt-2">
                                                        <div className="password-strength-bar">
                                                            <div 
                                                                className={`password-strength-progress ${getPasswordStrengthClass()}`}
                                                                style={{ width: `${(passwordStrength / 5) * 100}%` }}
                                                            ></div>
                                                        </div>
                                                        <small className={`form-text ${passwordStrength > 4 ? 'text-success' : passwordStrength > 2 ? 'text-warning' : 'text-danger'}`}>
                                                            {passwordMessage}
                                                        </small>
                                                    </div>
                                                )}
                                                
                                                <small className="form-text text-muted">
                                                    Au moins 8 caractères, une majuscule, un chiffre et un caractère spécial
                                                </small>
                                            </div>
                                            
                                            <div className="form-group mb-4">
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <FaCheck />
                                                    </span>
                                                    <Form.Control 
                                                        type="password" 
                                                        placeholder="Confirmer le mot de passe" 
                                                        name="confirmPassword" 
                                                        value={user.confirmPassword} 
                                                        onChange={handleChange}
                                                        className={`form-control register-input ${
                                                            user.confirmPassword && (user.password === user.confirmPassword ? 'is-valid' : 'is-invalid')
                                                        }`}
                                                        required
                                                    />
                                                </div>
                                                {user.confirmPassword && user.password !== user.confirmPassword && (
                                                    <div className="invalid-feedback d-block">
                                                        Les mots de passe ne correspondent pas
                                                    </div>
                                                )}
                                            </div>
                                            
                                            <div className="form-group mb-4">
                                                <Form.Check 
                                                    type="checkbox" 
                                                    id="terms" 
                                                    label="J'accepte les conditions générales et la politique de confidentialité"
                                                    className="terms-check"
                                                    required
                                                />
                                            </div>
                                            
                                            <Button 
                                                variant="primary" 
                                                type="submit" 
                                                className="register-btn w-100"
                                                disabled={isLoading}
                                            >
                                                {isLoading ? (
                                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                ) : (
                                                    <FaUserPlus className="me-2" />
                                                )}
                                                {isLoading ? "Inscription en cours..." : "S'inscrire"}
                                            </Button>
                                            
                                            <div className="text-center mt-4">
                                                <p className="mb-0">
                                                    Vous avez déjà un compte? {" "}
                                                    <Link to="/login" className="login-link">
                                                        Se connecter
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

export default RegisterPage;