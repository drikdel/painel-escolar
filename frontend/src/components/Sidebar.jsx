import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    FaUser, 
    FaCalendarDays, 
    FaChartLine, 
    FaGraduationCap, 
    FaRegCalendarCheck, 
    FaEnvelope, 
    FaUtensils,
    FaTrophy,
    FaBook 
} from 'react-icons/fa6'; 
import { FaSignOutAlt } from 'react-icons/fa';

const menuItems = [
    { name: 'Painel', path: '/painel', icon: FaChartLine, category: 'Painel' },
    { name: 'Notas', path: '/notas', icon: FaGraduationCap, category: 'Painel' },
    { name: 'Frequência', path: '/frequencia', icon: FaRegCalendarCheck, category: 'Painel' },
    { name: 'Conteúdo Curricular', path: '/conteudo-curricular', icon: FaBook, category: 'Painel' }, 
    
    { name: 'Avisos', path: '/avisos', icon: FaEnvelope, category: 'Comunicados' },
    { name: 'Calendário', path: '/calendario', icon: FaCalendarDays, category: 'Comunicados' },
    { name: 'Merenda', path: '/merenda', icon: FaUtensils, category: 'Comunicados' },
    { name: 'Ranking', path: '/ranking', icon: FaTrophy, category: 'Comunicados' },
    { name: 'Perfil', path: '/perfil', icon: FaUser, category: 'Comunicados' },
    
    { name: 'Sair', path: '/logout', icon: FaSignOutAlt, isLogout: true },
];

const groupedItems = {
    Painel: menuItems.filter(item => item.category === 'Painel'),
    Comunicados: menuItems.filter(item => item.category === 'Comunicados'),
    Sair: menuItems.find(item => item.isLogout)
};

const Sidebar = () => {
    const location = useLocation();

    return (
        <nav className="w-64 bg-gray-800 text-white p-4 flex flex-col h-screen border-r border-gray-700 shadow-2xl sticky top-0">
            <div className="text-2xl font-bold mb-4 text-blue-400 border-b border-gray-700 pb-4 flex items-center">
                <span className="text-xl">Help</span>
            </div>
            
            <ul className="space-y-2 flex-1 overflow-y-auto">
                {groupedItems.Painel.map((item) => {
                    const isActive = location.pathname === item.path; 
                    return (
                        <li key={item.name}>
                            <Link 
                                to={item.path} 
                                className={`
                                    flex items-center p-2 rounded 
                                    transition duration-150 ease-in-out text-gray-300
                                    ${isActive 
                                        ? 'bg-blue-600 text-white shadow-md' 
                                        : 'hover:bg-gray-700 hover:text-white' 
                                    }
                                `}
                            >
                                <item.icon className="mr-3 text-lg" /> 
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
                
                <li className="mt-4 pt-4 border-t border-gray-700">
                    <span className="text-xs text-gray-400 uppercase font-semibold pl-2">Comunicados</span>
                </li>

                {groupedItems.Comunicados.map((item) => {
                    const isActive = location.pathname === item.path; 
                    return (
                        <li key={item.name}>
                            <Link 
                                to={item.path} 
                                className={`
                                    flex items-center p-2 rounded 
                                    transition duration-150 ease-in-out text-gray-300
                                    ${isActive 
                                        ? 'bg-blue-600 text-white shadow-md' 
                                        : 'hover:bg-gray-700 hover:text-white' 
                                    }
                                `}
                            >
                                <item.icon className="mr-3 text-lg" /> 
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            {groupedItems.Sair && (
                <div className="mt-auto pt-4 border-t border-gray-700">
                    <Link 
                        to={groupedItems.Sair.path} 
                        className="flex items-center p-2 rounded text-red-400 hover:bg-red-900/50 transition duration-150 ease-in-out"
                    >
                        <FaSignOutAlt className="mr-3 text-lg" /> 
                        {groupedItems.Sair.name}
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Sidebar;

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