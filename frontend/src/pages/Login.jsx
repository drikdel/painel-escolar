import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaLock, FaSignInAlt, FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa'; 
import BannerImage from '../assets/bannerhelp.jpg';
import LogoImage from '../assets/logoHELP.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const TEST_USER = 'mateus'; 
    const TEST_PASS = '123456'; 
    
    const USER_DATA = { nome: "Mateus", usuario: TEST_USER };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (!username || !password) {
            setError('Por favor, preencha o usuário e a senha.');
            setLoading(false);
            return;
        }
        
        setTimeout(() => {
            if (username === TEST_USER && password === TEST_PASS) {
 
                localStorage.setItem('authToken', 'simulated_token'); 
                localStorage.setItem('alunoData', JSON.stringify(USER_DATA)); 
                navigate('/painel'); 
            } else {

                setError('Credenciais inválidas. Verifique o usuário e a senha.'); 
            }
            setLoading(false); 
        }, 1000); 
    };


    return (
        <div 
            className="flex items-center justify-center min-h-screen p-4"
            style={{
                backgroundImage: `url(${BannerImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="absolute inset-0 bg-gray-900/70"></div>

            <div className="relative z-10 w-full max-w-md bg-gray-800/60 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/10">
                

                <div className="flex justify-between items-center mb-6">
                    <div className="w-1/4"></div> 
                    
                    <img src={LogoImage} alt="Logo Help" className="h-10 w-auto" />
                    
                    <Link 
                        to="/" 
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center text-sm font-medium"
                    >
                        <FaArrowLeft className="mr-2" /> Voltar
                    </Link>
                </div>
                
                <h2 className="text-3xl font-bold text-center text-white mb-6">
                    Acesse sua conta
                </h2>
                

                
                {error && (
                    <div className="bg-red-500/30 border border-red-500 text-red-200 px-4 py-3 rounded-lg relative mb-4 text-center" role="alert">
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Campo Usuário */}
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-300">Usuário</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaUser className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="focus:ring-blue-500 focus:border-blue-400 block w-full pl-10 pr-3 py-3 
                                             border border-gray-700 bg-gray-900/70 text-white rounded-lg transition-all duration-200
                                             placeholder-gray-400"
                                placeholder="Seu nome de usuário"
                                disabled={loading}
                            />
                        </div>
                    </div>


                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300">Senha</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaLock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="focus:ring-blue-500 focus:border-blue-400 block w-full pl-10 pr-10 py-3 
                                             border border-gray-700 bg-gray-900/70 text-white rounded-lg transition-all duration-200
                                             placeholder-gray-400"
                                placeholder="Sua senha"
                                disabled={loading}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-white"
                                onClick={() => setShowPassword(!showPassword)}
                                disabled={loading}
                            >
                                {showPassword ? (
                                    <FaEyeSlash className="h-5 w-5" />
                                ) : (
                                    <FaEye className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>


                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-bold text-white 
                                     bg-gradient-to-r ${loading ? 'from-gray-500 to-gray-400' : 'from-blue-600 to-blue-500'}
                                     hover:from-blue-700 hover:to-blue-600 
                                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                                     focus:ring-offset-gray-800 transition-all duration-300 transform ${!loading && 'hover:scale-[1.03]'}`}
                    >
                        {loading ? 'Aguarde...' : <><FaSignInAlt className="mr-2" /> Entrar</>}
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Login;