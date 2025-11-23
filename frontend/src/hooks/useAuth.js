import React, { useState, useContext, createContext } from 'react';


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(false);


    const handleLogin = (user, password) => {
        setLoading(true);


        if (user === 'mateus' && password === '123') {
            
   
            setTimeout(() => {
                setUsuario('Mateus Drikdel'); 
                setIsAuthenticated(true);
                setLoading(false);
            }, 500);
            
            return true; 
        } else {

            setTimeout(() => {
                setLoading(false);
            }, 500);
            return false;
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUsuario(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, usuario, loading, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    return useContext(AuthContext);
};