import React from 'react';
import { FaCalendarAlt, FaBell, FaUtensils, FaTrophy, FaChartLine, FaUser, FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const quickAccessCards = [
    { title: 'Calendário', text: 'Acesse seus eventos e lembretes.', icon: FaCalendarAlt, color: 'border-blue-500', buttonColor: 'bg-blue-600', iconColor: 'text-blue-400', link: '/calendario' },
    { title: 'Avisos', text: 'Veja as últimas notificações da coordenação e professores.', icon: FaBell, color: 'border-orange-500', buttonColor: 'bg-orange-600', iconColor: 'text-orange-400', link: '/avisos' },
    { title: 'Merenda', text: 'Consulte o cardápio da merenda escolar da semana.', icon: FaUtensils, color: 'border-green-500', buttonColor: 'bg-green-600', iconColor: 'text-green-400', link: '/merenda' },
    { title: 'Ranking', text: 'Acompanhe seu desempenho e posição entre os alunos.', icon: FaTrophy, color: 'border-purple-500', buttonColor: 'bg-purple-600', iconColor: 'text-purple-400', link: '/ranking' },
    { title: 'Frequência', text: 'Visualize suas faltas e presenças nas aulas.', icon: FaChartLine, color: 'border-red-500', buttonColor: 'bg-red-600', iconColor: 'text-red-400', link: '/frequencia' },
    { title: 'Perfil', text: 'Gerencie seus dados e informações de contato.', icon: FaUser, color: 'border-pink-500', buttonColor: 'bg-pink-600', iconColor: 'text-pink-400', link: '/perfil' },
];

const contentCard = {
    title: 'Conteúdo Curricular',
    subtitle: 'Visualize e baixe materiais didáticos, ementas de disciplinas e planos de aula.',
    description: 'Acesse todo o acervo de conteúdo de todas as matérias para se aprofundar nos estudos e fazer revisões.',
    buttonText: 'Acessar Conteúdos',
    link: '/conteudo', 
    color: 'border-purple-500', 
    buttonColor: 'bg-purple-600',
    icon: FaBook
};

const Painel = () => {
    return (
        <div className="p-2"> 
            
            <div className="mb-10">

                <h1 className="text-4xl font-bold text-white mb-2">Olá, Mateus! 👋</h1>
                <p className="text-gray-400 text-lg">Acesso Rápido</p>
            </div>

            <section className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                    {quickAccessCards.map((card, index) => (
                        <div 
                            key={index} 
                            className={`bg-gray-800 p-5 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-[1.03] border-t-4 ${card.color}`}
                        >
                            <card.icon className={`h-8 w-8 mb-3 ${card.iconColor}`} />
                            <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{card.text}</p>
                            <Link 
                                to={card.link}
                                className={`w-full text-center inline-block py-2 px-3 text-sm font-semibold rounded-lg transition-colors duration-200 
                                            ${card.buttonColor} text-white hover:${card.buttonColor.replace('600', '700')} shadow-md`}
                            >
                                Acessar {card.title}
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-300 mb-6 border-b border-gray-700 pb-2">Minhas Notas Semestrais</h2>
                <div className="bg-gray-800 p-6 rounded-xl shadow-xl border-l-4 border-yellow-500">
                    <h3 className="text-xl font-bold text-white mb-2">
                        Visualize o seu histórico e a análise de pontuação necessária para aprovação.
                    </h3>
                    <p className="text-gray-400 mb-4">
                        Mantenha-se atualizado sobre seu desempenho acadêmico em todas as disciplinas.
                    </p>
                    <Link 
                        to="/notas"
                        className="inline-block py-2 px-4 text-sm font-bold rounded-lg transition-colors duration-200 bg-yellow-600 text-white hover:bg-yellow-700 shadow-md"
                    >
                        Acessar Detalhes das Notas
                    </Link>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-gray-300 mb-6 border-b border-gray-700 pb-2">{contentCard.title}</h2>
                <div className={`bg-gray-800 p-6 rounded-xl shadow-xl border-l-4 ${contentCard.color}`}>
                    <div className="flex items-center mb-2">
                        <contentCard.icon className={`h-6 w-6 mr-3 text-purple-400`} />
                        <h3 className="text-xl font-bold text-white">
                            {contentCard.subtitle}
                        </h3>
                    </div>
                    <p className="text-gray-400 mb-4">
                        {contentCard.description}
                    </p>
                    <Link 
                        to={contentCard.link}
                        className={`inline-block py-2 px-4 text-sm font-bold rounded-lg transition-colors duration-200 ${contentCard.buttonColor} text-white hover:${contentCard.buttonColor.replace('600', '700')} shadow-md`}
                    >
                        {contentCard.buttonText}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Painel;

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