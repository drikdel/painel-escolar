import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; 


import MainLayout from './components/MainLayout.jsx'; 


import LandingPage from "./pages/LandingPage.jsx"; 
import Login from "./pages/Login.jsx";
import Painel from "./pages/Painel.jsx"; 
import Notas from "./pages/Notas.jsx"; 
import Frequencia from "./pages/Frequencia.jsx"; 
import Perfil from "./pages/Perfil.jsx"; 
import Avisos from "./pages/Avisos.jsx"; 
import Calendario from "./pages/Calendario.jsx";
import Merenda from "./pages/Merenda.jsx";
import Ranking from "./pages/Ranking.jsx";
import Conteudo from "./pages/Conteudo.jsx"; 


function PrivateRoute({ children }) {
    const isAuthenticated = localStorage.getItem("authToken"); 
    return isAuthenticated ? children : <Navigate to="/" replace />;
}

export default function App() {
    return (
        <Routes>
            

            <Route path="/" element={<LandingPage />} /> 


            <Route path="/login" element={<Login />} />


            
            <Route path="/painel" element={<PrivateRoute><MainLayout><Painel /></MainLayout></PrivateRoute>} />
            <Route path="/notas" element={<PrivateRoute><MainLayout><Notas /></MainLayout></PrivateRoute>} />
            <Route path="/frequencia" element={<PrivateRoute><MainLayout><Frequencia /></MainLayout></PrivateRoute>} />
            <Route path="/avisos" element={<PrivateRoute><MainLayout><Avisos /></MainLayout></PrivateRoute>} />
            <Route path="/perfil" element={<PrivateRoute><MainLayout><Perfil /></MainLayout></PrivateRoute>} />
            <Route path="/calendario" element={<PrivateRoute><MainLayout><Calendario /></MainLayout></PrivateRoute>} />
            <Route path="/merenda" element={<PrivateRoute><MainLayout><Merenda /></MainLayout></PrivateRoute>} />
            <Route path="/ranking" element={<PrivateRoute><MainLayout><Ranking /></MainLayout></PrivateRoute>} />
            <Route path="/conteudo" element={<PrivateRoute><MainLayout><Conteudo /></MainLayout></PrivateRoute>} /> 
            

            <Route path="*" element={<PrivateRoute><Navigate to="/painel" replace /></PrivateRoute>} />

        </Routes>
    );
}