import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaTrophy, FaChevronDown, FaChevronUp } from 'react-icons/fa6'; 


const ALL_NAMES = [
    "Ana Silva", "Pedro Costa", "Mariana Santos", "Rafael Oliveira", "Sofia Pereira", 
    "João Almeida", "Laura Rodrigues", "Lucas Ferreira", "Isabela Lima", "Gabriel Souza",
    "Camila Castro", "Daniel Alves", "Beatriz Rocha", "Vinícius Gomes", "Lívia Nunes",
    "Thiago Mendes", "Helena Barbosa", "Enzo Ribeiro", "Manuela Fernandes", "Arthur Pires",
    "Giovanna Martins", "Heitor Conceição", "Valentina Dantas", "Bernardo Cunha", "Emanuel Dias"
];



const getRandomName = (usedNames) => {
    let name;
    do {
        name = ALL_NAMES[Math.floor(Math.random() * ALL_NAMES.length)];
        if (Math.random() > 0.5) {
            name += ' ' + ['Junior', 'Neto', 'Filho', 'Sobrinho'][Math.floor(Math.random() * 4)];
        }
    } while (usedNames.includes(name));
    return name;
};

const generateRankingData = () => {
    const data = [
        { position: 1, name: 'Mateus', score: 10.0, isTop: true },
        { position: 2, name: 'Guilherme', score: 9.9, isTop: true },
        { position: 3, name: 'Leonardo', score: 9.8, isTop: true },
        { position: 4, name: 'Beatriz Teixeira', score: 9.7 },
        { position: 5, name: 'Julia Alves', score: 9.6 },
        { position: 6, name: 'Pedro Martins', score: 9.5 },
        { position: 7, name: 'Lucas Moraes', score: 9.5 },
    ];
    
    let usedNames = data.map(s => s.name);
    
    for (let i = 8; i <= 99; i++) {
        const previousScore = data[data.length - 1].score;
        const newScore = parseFloat((previousScore - (Math.random() * 0.05 + 0.01)).toFixed(2));
        
        const newName = getRandomName(usedNames);
        usedNames.push(newName);

        data.push({ 
            position: i, 
            name: newName, 
            score: Math.max(newScore, 7.5) 
        });
    }


    data.push({ position: 100, name: 'Felipe', score: 0.2 });

    return data;
};




const getScoreColor = (score) => {

    if (score >= 9.0) {
        return 'bg-green-600';
    } else if (score >= 7.5) {
        return 'bg-yellow-600 text-gray-900';
    } else {
        return 'bg-red-600';
    }
};


const Ranking = () => {
    const navigate = useNavigate();


    const rankingData = useMemo(generateRankingData, []);

    const INITIAL_LIMIT = 7; 
    const [displayLimit, setDisplayLimit] = useState(INITIAL_LIMIT);

    const handleBackClick = () => {
        navigate('/painel');
    };
    
    const top3 = rankingData.slice(0, 3);
    const restOfRanking = rankingData.slice(3);
    
    const studentsToDisplay = restOfRanking.slice(0, displayLimit);
    const isFullList = displayLimit === restOfRanking.length;
    const hasMoreStudents = displayLimit < restOfRanking.length;
    const remainingCount = restOfRanking.length - displayLimit;

    const loadAllStudents = () => {
        setDisplayLimit(restOfRanking.length);
    };

    const loadInitialStudents = () => {
        setDisplayLimit(INITIAL_LIMIT);
    };

    return (
        <div className="p-6">
            

            <header className="flex items-center mb-6">
                
                <div className="flex items-center p-4 rounded-lg bg-blue-600 shadow-xl">
                    <FaTrophy className="text-3xl text-yellow-300 mr-3" />
                    <h1 className="text-3xl font-bold text-white">Ranking de Notas</h1>
                </div>
            </header>


            <p className="text-gray-400 mb-6 ml-1 text-lg">Top 100 Estudantes da Escola</p>


            <div className="flex flex-col sm:flex-row justify-around items-end mb-8 space-y-8 sm:space-y-0 sm:space-x-4">
                {top3.map((student, index) => (
                    <div 
                        key={student.position}
                        className={`text-center p-6 rounded-xl shadow-2xl transition duration-300 w-full sm:w-1/3 
                                    ${index === 0 ? 'bg-gradient-to-t from-yellow-700 to-yellow-500 transform sm:scale-110 border-4 border-white' : 
                                     index === 1 ? 'bg-gradient-to-t from-gray-600 to-gray-500' : 
                                     'bg-gradient-to-t from-orange-800 to-orange-600'}`
                                }
                        style={{ minHeight: '180px' }}
                    >
                        <FaTrophy className={`mx-auto w-8 h-8 mb-2 ${index === 0 ? 'text-white' : 'text-gray-200'}`} />
                        <span className="text-3xl font-extrabold text-white block mb-2">
                            {student.position}º
                        </span>
                        <p className="text-xl font-semibold text-white truncate">{student.name}</p>
                        <p className="text-2xl font-bold mt-2 bg-white text-gray-900 px-3 py-1 rounded-lg inline-block">
                            {student.score.toFixed(1)}
                        </p>
                    </div>
                ))}
            </div>


            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-1/12">
                                Posição
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-8/12">
                                Estudante
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider w-3/12">
                                Nota
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                        {studentsToDisplay.map((student) => (
                            <tr 
                                key={student.position} 
                                className={`transition duration-150 ${student.position % 2 === 0 ? 'hover:bg-gray-700/70' : 'hover:bg-gray-700/50'}`}
                            >
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400">
                                    {student.position}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-base text-white">
                                    {student.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-lg font-bold">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white ${getScoreColor(student.score)}`}>
                                        {student.score.toFixed(1)}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                

                <div className="p-4 text-center border-t border-gray-700">

                    {isFullList && (
                        <button 
                            onClick={loadInitialStudents}
                            className="text-red-400 hover:text-red-500 font-semibold transition duration-150 flex items-center mx-auto mb-2"
                        >
                            <FaChevronUp className="mr-2" /> Ver Menos
                        </button>
                    )}


                    {hasMoreStudents && (
                        <button 
                            onClick={loadAllStudents}
                            className="text-blue-400 hover:text-blue-500 font-semibold transition duration-150 flex items-center mx-auto"
                        >
                            <FaChevronDown className="mr-2" /> Ver Mais ({remainingCount} alunos restantes)
                        </button>
                    )}
                    

                    {!isFullList && !hasMoreStudents && (
                        <div className="text-gray-500">
                            Mostrando os Top {INITIAL_LIMIT + 3} estudantes.
                        </div>
                    )}


                    {isFullList && (
                        <div className="text-gray-500">
                            Mostrando todos os 100 estudantes.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Ranking;

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