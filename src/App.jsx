import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from "react";
import AuthContext from "./contexte/AuthContext";
import NavBar from "./components/NavBar";
import AuthService from "./services/AuthService";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // N'oubliez pas d'importer les styles
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TronePage from "./pages/TronePage";
import JediPage from "./pages/JediPage";
import SorcierPage from "./pages/SorcierPage";
import WarcraftPage from "./pages/WarcraftPage";
import LegendPage from "./pages/LegendPage";
import EnigmePage from "./pages/EnigmePage";
import AtelierPage from "./pages/AtelierPage";
import ReservationPage from "./pages/ReservationPage";
import ReservationSucessPage from "./pages/ReservationSuccessPage";


function App() {
    // Modifiez cette ligne pour utiliser le nom correct de la fonction
    const [user, setUser] = useState(AuthService.getCurrentUser ? AuthService.getCurrentUser() : null);
    const [isLoggedIn, setIsLoggedIn] = useState(AuthService.isAuthenticated ? AuthService.isAuthenticated() : false);
    // OU, si vous n'avez pas de fonction tokenValid(), utilisez isAuthenticated() :
    // const [isLoggedIn, setIsLoggedIn] = useState(AuthService.isAuthenticated());

    return <>
        <BrowserRouter>
            <AuthContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/register" element={<RegisterPage/>} />
                    <Route path="/trone" element={<TronePage/>} />
                    <Route path="/jedi" element={<JediPage/>} />
                    <Route path="/sorcier" element={<SorcierPage/>} />
                    <Route path="/Azeroth" element={<WarcraftPage/>} />
                    <Route path="/legende" element={<LegendPage/>} />
                    <Route path="/enigme" element={<EnigmePage/>} />
                    <Route path="/atelier" element={<AtelierPage/>} />
                    <Route path="/reservation/:gameId" element={<ReservationPage/>} />
                    <Route path="/reservation/success" element={<ReservationSucessPage/>} />
                    {/* Ajoutez d'autres routes ici */}
                    
         
                </Routes>
                <ToastContainer
                position = "bottom-right"
                autoClose = {3000}
                hideProgressBar = {false}
                newestOnTop = {false}
                closeOnClick = {false}
                rtl = {false}
                pauseOnFocusLoss
                draggable 
                pauseOnHover
                theme = "colored"
                />
            </AuthContext.Provider>
        </BrowserRouter>
    </>;
}

export default App;