import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut, LayoutDashboard, FileText, Calendar, TrendingUp, User, Utensils, MessageCircle, BarChart, BookOpen } from 'lucide-react';

import LogoImage from '../assets/logoHELP.png'; 

const navItems = [
    { name: 'Painel', path: '/painel', icon: LayoutDashboard },
    { name: 'Notas', path: '/notas', icon: FileText },
    { name: 'Frequência', path: '/frequencia', icon: BarChart },
    { name: 'Conteúdo Curricular', path: '/conteudo', icon: BookOpen },
    { name: 'Comunicados', path: '/avisos', icon: MessageCircle },
    { name: 'Calendário', path: '/calendario', icon: Calendar },
    { name: 'Merenda', path: '/merenda', icon: Utensils },
    { name: 'Ranking', path: '/ranking', icon: TrendingUp },
    { name: 'Perfil', path: '/perfil', icon: User },
];

const Sidebar = () => {
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        window.location.href = '/'; 
    };

    return (
        <aside className="w-64 bg-gray-800 p-4 shadow-2xl flex-shrink-0 h-screen sticky top-0 flex flex-col">
            
            <div className="flex justify-center items-center py-4 mb-6 border-b border-gray-700">
                <img 
                    src={LogoImage} 
                    alt="Logo Help" 
                    className="h-16 w-auto" 
                />
            </div>
            
            <nav className="space-y-2 flex-1 overflow-y-auto">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className={`flex items-center p-3 rounded-xl transition-all duration-300 transform 
                            ${location.pathname === item.path 
                                ? 'bg-blue-600 text-white shadow-lg' 
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white hover:scale-[1.02]'}`
                        }
                    >
                        <item.icon className="w-5 h-5 mr-3" />
                        <span className="font-medium">{item.name}</span>
                    </Link>
                ))}
            </nav>

            <div className="mt-auto pt-4 border-t border-gray-700">
                <button
                    onClick={handleLogout}
                    className="flex items-center w-full p-3 rounded-xl text-red-400 hover:bg-gray-700 hover:text-red-300 transition-colors duration-200"
                >
                    <LogOut className="w-5 h-5 mr-3" />
                    <span className="font-medium">Sair</span>
                </button>
            </div>
        </aside>
    );
};

const MainLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-gray-900">
            <div className="hidden md:block">
                <Sidebar />
            </div>

            <div className="flex-1 flex flex-col overflow-y-auto">

                <header className="bg-gray-800 p-4 border-b border-gray-700 flex justify-between items-center md:hidden">
                    <img 
                        src={LogoImage} 
                        alt="Logo Help" 
                        className="h-7 w-auto" 
                    />
                    <button
                        onClick={() => { localStorage.removeItem('authToken'); window.location.href = '/'; }}
                        className="flex items-center text-sm text-red-400 hover:text-red-300 transition-colors duration-200"
                    >
                        <LogOut className="w-4 h-4 mr-1" /> Sair
                    </button>
                </header>
                
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;

// code by:
//      ___           ___           ___           ___           ___           ___     
//     /\__\         /\  \         /\  \         /\  \         /\__\         /\  \    
//    /::|  |       /::\  \        \:\  \       /::\  \       /:/  /        /::\  \   
//   /:|:|  |      /:/\:\  \        \:\  \     /:/\:\  \     /:/  /        /:/\ \  \  
//  /:/|:|__|__   /::\~\:\  \       /::\  \   /::\~\:\  \   /:/  /  ___   _\:\~\ \  \ 
// /:/ |::::\__\ /:/\:\ \:\__\     /:/\:\__\ /:/\:\ \:\__\ /:/__/  /\__\ /\ \:\ \ \__\
// \/__/~~/:/  / \/__\:\/:/  /    /:/  \/__/ \:\~\:\ \/__/ \:\  \ /:/  / \:\ \:\ \/__/
//       /:/  /       \::/  /    /:/  /       \:\ \:\__\    \:\  /:/  /   \:\ \:\__\  
//      /:/  /        /:/  /     \/__/         \:\ \/__/     \:\/:/  /     \:\/:/  /  
//     /:/  /        /:/  /                     \:\__\        \::/  /       \::/  /   
//     \/__/         \/__/                       \/__/         \/__/         \/__/    