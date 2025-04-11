import { useContext } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexte/AuthContext";
import AuthService from "../services/AuthService";

const NavBar = () => {
    const navigate = useNavigate();
    const { isLoggedIn, user, setIsLoggedIn } = useContext(AuthContext);

    return <>
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container fluid className="d-flex justify-content-between">
                <Navbar.Brand onClick={() => { navigate("/") }} className="enigme">Enigme Evadée</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => { navigate("/") }}>Accueil</Nav.Link>
                        <NavDropdown title="Escape Games en salle" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => { navigate("/trone") }}>Le Trône de Fer</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { navigate("/jedi") }}>La Quête du Jedi</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { navigate("/sorcier") }}>L'Epreuve des Sorciers</NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown title="Escape Games à domicile" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => { navigate("/Azeroth") }}>La Quête d'Azeroth</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { navigate("/legende") }}>La Légende de l'Arène</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { navigate("/enigme") }}>Enigmes de l'Absence</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { navigate("/atelier") }}>L'Atelier des Engrenages</NavDropdown.Item>

                        </NavDropdown>


                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    {isLoggedIn ? <>
                        <Nav.Link onClick={() => { navigate("/account") }}>{user && user.pseudo}</Nav.Link>
                        <Button variant="outline-danger" onClick={() => { setIsLoggedIn(false); AuthService.logout() }}>Déconnexion</Button>
                        {/* <Nav.Link onClick={() => { navigate("/account") }}>{user?.pseudo}</Nav.Link> */}
                    </> : <>
                        <Nav.Link onClick={() => { navigate("/login") }}>Login</Nav.Link>
                        <Nav.Link onClick={() => { navigate("/register") }}>Register</Nav.Link>
                    </>}
                </Nav>
            </Container>
        </Navbar>
    </>;
}

export default NavBar;