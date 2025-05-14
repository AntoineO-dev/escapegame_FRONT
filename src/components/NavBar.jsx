import { useContext, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import AuthContext from "../contexte/AuthContext";
import "../styles/NavBar.css";

const NavBar = () => {
  const { isLoggedIn, setIsLoggedIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };
  
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Enigme Evadée</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <NavDropdown title="Nos Escape Games" id="escape-games-dropdown">
              <NavDropdown.Item as={Link} to="/trone">Le Trône de Fer</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jedi">La Quête du Jedi</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sorcier">L'Épreuve des Sorciers</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/games">Tous nos jeux</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Escape à domicile" id="home-games-dropdown">
              <NavDropdown.Item as={Link} to="/Azeroth">La Quête d'Azeroth</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/legende">La Légende de l'Arène</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/enigme">Enigmes de l'Absence</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/atelier">L'Atelier des Engrenages</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
          {/* Icône profil et dropdown */}
          <div className="profile-icon-container">
            <NavDropdown
              title={<FaUserCircle className="profile-icon" />}
              id="profile-dropdown"
              align="end"
              className="profile-dropdown"
            >
              {isLoggedIn ? (
                <>
                  <NavDropdown.Item as={Link} to="/account" className="profile-dropdown-item">
                    <span>Mon profil</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/reservations" className="profile-dropdown-item">
                    <span>Mes réservations</span>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout} className="profile-dropdown-item">
                    <span>Déconnexion</span>
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item as={Link} to="/login" className="profile-dropdown-item">
                    <FaSignInAlt className="item-icon" />
                    <span>Connexion</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/register" className="profile-dropdown-item">
                    <FaUserPlus className="item-icon" />
                    <span>Inscription</span>
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;