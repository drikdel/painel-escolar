import React from 'react';
import { Link } from 'react-router-dom';


import BannerImage from '../assets/bannerhelp.jpg';
import LogoImage from '../assets/logoHELP.png'; 

const LandingPage = () => {
    

    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (

        <div className="min-h-screen bg-gray-900">
            
            {/*
            */}
            <header className="fixed top-0 left-0 right-0 z-50 p-0 
                               h-20 bg-gradient-to-r from-gray-900 via-blue-950 to-gray-900 
                               backdrop-blur-lg shadow-2xl shadow-blue-900/50 border-b border-blue-500/30">
                
                <div className="flex justify-between items-center w-full h-full px-6"> 
                    
                    {/* Logo */}
                    <div className="flex items-center"> 
                         <img 
                            src={LogoImage} 
                            alt="Logo Help" 
                            className="h-14 w-auto transition-all duration-300 drop-shadow-lg"
                        />
                    </div>

                    {/**/}
                    <nav className="flex items-center space-x-6 drop-shadow-lg">
                        
                        <a 
                            href="#sobre" 
                            onClick={handleSmoothScroll}
                            className="text-gray-200 font-medium hover:text-blue-400 transition-all duration-300 hidden sm:block 
                                       border-b-2 border-transparent hover:border-blue-400 pb-1 hover:scale-105"
                        >
                            Sobre
                        </a>
                        
                        <Link to="/login" className="px-6 py-2 rounded-full font-semibold transition duration-300 
                                                  bg-white text-gray-900 hover:bg-gray-200 shadow-xl">
                            Login
                        </Link>
                    </nav>
                </div>
            </header>

            {/**/}
            <div 
                className="relative min-h-screen flex items-center justify-start text-white pt-28" 
                style={{
                    backgroundImage: `url(${BannerImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed', 
                }}
            >
                {/* */}
                <div className="absolute inset-0 bg-gray-900/75"></div>

                {/*
                */}
                <div className="relative z-10 p-8 ml-6 md:ml-16 max-w-2xl">
                    
                    <h1 className="text-7xl font-extrabold mb-4 tracking-tighter drop-shadow-lg text-left">
                        Seu Portal de Gestão Escolar.
                    </h1>
                    <p className="text-xl text-gray-300 mb-10 font-light drop-shadow-md text-left">
                        Acesso rápido, notas em tempo real e comunicação simplificada. Tudo que você precisa, em um só lugar.
                    </p>

                    {/**/}
                    <div className="mt-10 flex justify-start">
                        <Link 
                            to="/login"
                            className="inline-block px-12 py-4 text-xl font-bold rounded-full transition duration-300 
                                       bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-blue-500/50 transform hover:scale-[1.05]"
                        >
                            Entrar Agora
                        </Link>
                    </div>
                </div>
            </div>

            {/**/}
            <section 
                id="sobre" 
                className="py-24 px-6 bg-gray-950 text-white border-t border-gray-800"
                style={{ scrollMarginTop: '5rem' }} 
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-extrabold mb-10 text-center text-blue-400 border-b-2 border-blue-600 pb-3">
                        O Que É o Help?
                    </h2>
                    
                    <p className="text-lg mb-6 leading-relaxed text-gray-300">
                        O Help é a plataforma digital definitiva para a comunidade escolar. Nascido da necessidade de unificar a comunicação e a gestão acadêmica, nosso objetivo é oferecer uma experiência  eficiente para alunos, pais e educadores.
                    </p>
                    <p className="text-lg mb-6 leading-relaxed text-gray-300">
                        Com o Help, você tem acesso imediato ao seu Painel, Notas Semestrais, Frequência, Calendário de Eventos e muito mais. Tornamos o acompanhamento do desempenho acadêmico mais transparente e o contato com a escola mais ágil e intuitivo, eliminando a burocracia e focando no que realmente importa: o sucesso do aluno.
                    </p>

                    <div className="mt-16 p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 shadow-xl text-center">
                        <p className="text-2xl font-semibold text-white">
                            Sua jornada de aprendizado, simplificada.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* Footer */}
            <footer className="p-6 text-center text-gray-500 text-sm bg-gray-950 border-t border-gray-800">
                &copy; {new Date().getFullYear()} Help - Todos os direitos reservados.
            </footer>
        </div>
    );
};

export default LandingPage;

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