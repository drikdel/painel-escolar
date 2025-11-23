import React, { useState } from 'react';
import { 
    FaUtensils, 
    FaSquarePollVertical, 
    FaCircleCheck 
} from 'react-icons/fa6';


const cardapioAtual = [
    { dia: 'Segunda-feira (Hoje)', prato: 'Arroz, Feijão, Frango Grelhado e Salada de Alface.', sobremesa: 'Maçã.' },
    { dia: 'Terça-feira', prato: 'Macarrão ao Sugo, Carne Moída e Brócolis Cozido.', sobremesa: 'Banana.' },
    { dia: 'Quarta-feira', prato: 'Sopa de Legumes e Pão Integral.', sobremesa: 'Laranja.' },
    { dia: 'Quinta-feira', prato: 'Arroz, Lentilha e Bife Acebolado.', sobremesa: 'Pêra.' },
    { dia: 'Sexta-feira', prato: 'Omelete de Queijo e Salada Mista.', sobremesa: 'Gelatina.' },
];


const votingOptions = [
  { 
    id: 1, 
    name: "Opção 1: Semana Clássica",
    details: [
      { day: 'Segunda', prato: 'Strogonoff de Frango com Batata Palha' },
      { day: 'Terça', prato: 'Lasanha à Bolonhesa' },
      { day: 'Quarta', prato: 'Peixe Assado com Purê' },
      { day: 'Quinta', prato: 'Bife Acebolado com Arroz e Feijão' },
      { day: 'Sexta', prato: 'Hambúrguer Caseiro com Salada' }
    ]
  },
  { 
    id: 2, 
    name: "Opção 2: Sabores da Terra",
    details: [
      { day: 'Segunda', prato: 'Picadinho de Carne com Abóbora' },
      { day: 'Terça', prato: 'Feijoada Leve com Couve' },
      { day: 'Quarta', prato: 'Frango com Quiabo e Polenta' },
      { day: 'Quinta', prato: 'Vaca Atolada (Mandioca com Costela)' },
      { day: 'Sexta', prato: 'Galinhada Completa' }
    ]
  },
  { 
    id: 3, 
    name: "Opção 3: Semana Vegetariana",
    details: [
      { day: 'Segunda', prato: 'Strogonoff de Palmito com Arroz' },
      { day: 'Terça', prato: 'Lasanha de Berinjela' },
      { day: 'Quarta', prato: 'Quibe de Abóbora com Quinoa' },
      { day: 'Quinta', prato: 'Moqueca de Banana da Terra' },
      { day: 'Sexta', prato: 'Hambúrguer de Grão de Bico' }
    ]
  }
];

const Merenda = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [hasVoted, setHasVoted] = useState(false);

    const handleVote = (optionId) => {
        if (!hasVoted) {
            setSelectedOption(optionId);
        }
    };

    const handleSubmitVote = () => {
        if (!selectedOption) return;
        console.log("Voto enviado para o cardápio ID:", selectedOption);
        setHasVoted(true);
    };

    return (
        <div className="p-6">
            <header className="flex items-center mb-8">
                <FaUtensils className="text-3xl text-green-400 mr-3" />
                <h1 className="text-3xl font-bold text-white">Cardápio da Merenda</h1>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Coluna da Esquerda: Cardápio da Semana */}
                <div className="lg:col-span-2 bg-gray-800 p-6 rounded-lg shadow-xl text-white">
                    <p className="text-lg mb-4 text-gray-300">Confira o que será servido na semana:</p>
                    
                    <ul className="space-y-4">
                        {cardapioAtual.map((item) => (
                            <li key={item.dia} className="p-4 bg-gray-700 rounded-lg">
                                <h3 className="text-xl font-semibold text-green-300">{item.dia}</h3>
                                <p className="text-gray-300">Prato Principal: {item.prato}</p>
                                <p className="text-gray-400 text-sm">Sobremesa: {item.sobremesa}</p>
                            </li>
                        ))}
                    </ul>

                    <p className="text-sm text-gray-500 mt-6">*O cardápio é planejado semanalmente e pode sofrer alterações.</p>
                </div>

                {/* Coluna da Direita: Votação */}
                <div className="lg:col-span-1 bg-gray-800 p-6 rounded-lg shadow-xl text-white flex flex-col">
                    <h2 className="text-2xl font-bold text-white mb-4 border-b border-gray-700 pb-2 flex items-center">
                        <FaSquarePollVertical className="mr-2 text-blue-400" />
                        Votação da Próxima Semana
                    </h2>
                    
                    {!hasVoted ? (
                        <>
                            <p className="text-gray-300 mb-4">Escolha sua opção favorita para o cardápio da próxima semana:</p>
                            
                            {/**/}
                            <div className="space-y-4">
                                {votingOptions.map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => handleVote(option.id)}
                                        className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200
                                            ${selectedOption === option.id 
                                                ? 'bg-blue-600 border-blue-400 shadow-lg' 
                                                : 'bg-gray-700 border-gray-600 hover:bg-gray-600'
                                            }`}
                                    >
                                        <p className="font-semibold text-lg mb-2">{option.name}</p>
                                        <ul className="text-sm text-gray-300 list-disc list-inside space-y-1 pl-1">
                                            {option.details.map(item => (
                                                <li key={item.day}>
                                                    <span className="font-medium text-gray-100">{item.day}:</span> {item.prato}
                                                </li>
                                            ))}
                                        </ul>
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={handleSubmitVote}
                                disabled={!selectedOption}
                                className="mt-6 w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg 
                                           hover:bg-green-700 transition-colors duration-200
                                           disabled:bg-gray-500 disabled:cursor-not-allowed"
                            >
                                Confirmar Voto
                            </button>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center h-full">
                            <FaCircleCheck className="text-6xl text-green-400 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Voto Computado!</h3>
                            <p className="text-gray-300">Obrigado por participar.</p>
                            
                            {selectedOption && (
                                <div className="mt-4 p-3 bg-gray-700 rounded-lg w-full">
                                    <p className="text-gray-400 text-sm">Sua escolha:</p>
                                    <p className="font-semibold text-blue-300">{votingOptions.find(o => o.id === selectedOption)?.name}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Merenda;

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