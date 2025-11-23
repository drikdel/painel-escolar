

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEnvelope, FaBell, FaClock, FaCheck, FaTrashCan } from 'react-icons/fa6';
import { FaCircle } from 'react-icons/fa'; 


const initialAvisos = [
    {
        id: 1,
        sender: 'Coordenação Escolar',
        subject: 'CANCELAMENTO DE AULA: Prof. Fernando (Química)',
        date: '17/11/2025',
        time: '19:30',
        content: `Prezado(a) Aluno(a),

Informamos que o professor Fernando de Química não poderá comparecer à aula hoje, dia 17/11/2025, devido a motivos de saúde.

Pedimos que aproveitem o tempo para revisar o conteúdo da última semana.

Atenciosamente,
Coordenação Escolar.`,
        read: false,
    },
    {
        id: 2,
        sender: 'Biblioteca',
        subject: 'Prazo Final: Devolução do Livro de Biologia',
        date: '16/11/2025',
        time: '14:00',
        content: `Lembramos que o prazo final para a devolução do livro "Biologia Celular Avançada" é amanhã, dia 18/11/2025.`,
        read: true,
    },
    {
        id: 3,
        sender: 'Secretaria',
        subject: 'Atualização no Horário de Educação Física',
        date: '15/11/2025',
        time: '09:00',
        content: `Atenção: O horário da aula de Educação Física para o 2º ano foi permanentemente alterado para as terças-feiras, das 10h às 11h. Favor checar o novo cronograma no mural.`,
        read: false,
    },
];

const Avisos = () => {
    const navigate = useNavigate();
    const [avisos, setAvisos] = useState(initialAvisos);
    const [selectedAvisoId, setSelectedAvisoId] = useState(avisos[0]?.id || null);

    const handleBackClick = () => {
        navigate('/painel');
    };

    const selectedAviso = avisos.find(a => a.id === selectedAvisoId);

    
    const markAsRead = (id) => {
        setAvisos(avisos.map(aviso => 
            aviso.id === id ? { ...aviso, read: true } : aviso
        ));
    };

    
    const handleAvisoSelect = (id) => {
        setSelectedAvisoId(id);
        markAsRead(id);
    };

    
    const deleteAviso = (id) => {
        const newAvisos = avisos.filter(aviso => aviso.id !== id);
        setAvisos(newAvisos);
        
        
        if (selectedAvisoId === id) {
            setSelectedAvisoId(newAvisos[0]?.id || null);
        }
    };

    const unreadCount = avisos.filter(a => !a.read).length;

    return (
        <div className="p-6 h-screen flex flex-col">
            
 
            <header className="flex items-center mb-6">
                <FaBell className="text-3xl text-yellow-500 mr-3" />
                <h1 className="text-3xl font-bold text-white">Central de Avisos</h1>
                <span className="ml-4 bg-red-600 text-white text-xs font-bold py-1 px-2 rounded-full">
                    {unreadCount} {unreadCount === 1 ? 'Não Lido' : 'Não Lidos'}
                </span>
            </header>
            

            <div className="flex-1 grid grid-cols-5 gap-6">
                

                <div className="col-span-2 bg-gray-800 rounded-lg shadow-xl overflow-y-auto">
                    <div className="p-4 border-b border-gray-700 sticky top-0 bg-gray-800">
                        <h2 className="text-xl font-semibold text-gray-200">Caixa de Entrada</h2>
                    </div>
                    {avisos.length === 0 ? (
                         <p className="p-4 text-gray-500 italic text-center">Nenhum aviso na caixa de entrada.</p>
                    ) : (
                        avisos.map(aviso => (
                            <div
                                key={aviso.id}
                                className={`p-4 border-b border-gray-700 cursor-pointer transition duration-150 
                                            ${selectedAvisoId === aviso.id ? 'bg-blue-900' : 'bg-gray-800 hover:bg-gray-700'}
                                            ${!aviso.read && 'font-bold'}`}
                                onClick={() => handleAvisoSelect(aviso.id)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        {!aviso.read && <FaCircle className="text-red-500 text-xs mr-2" />}
                                        <p className={`text-sm ${!aviso.read ? 'text-white' : 'text-gray-400'}`}>
                                            {aviso.sender}
                                        </p>
                                    </div>
                                    <p className="text-xs text-gray-500">{aviso.date}</p>
                                </div>
                                <p className={`mt-1 text-base truncate ${!aviso.read ? 'text-white' : 'text-gray-300'}`}>
                                    {aviso.subject}
                                </p>
                            </div>
                        ))
                    )}
                </div>


                <div className="col-span-3 bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col">
                    {!selectedAviso ? (
                        <div className="flex items-center justify-center h-full text-gray-500 text-lg">
                            <FaEnvelope className="mr-2" /> Selecione um aviso para ler.
                        </div>
                    ) : (
                        <>

                            <div className="flex justify-between items-center border-b border-gray-700 pb-4 mb-4">
                                <h3 className="text-xl font-bold text-white">{selectedAviso.subject}</h3>
                                <div className="flex space-x-2">
 
                                    <button 
                                        onClick={() => deleteAviso(selectedAviso.id)}
                                        className="p-2 text-red-400 hover:text-red-500 bg-gray-700 rounded-full transition"
                                        title="Apagar Aviso"
                                    >
                                        <FaTrashCan />
                                    </button>
                                </div>
                            </div>
                            

                            <div className="mb-4 text-sm border-b border-gray-700 pb-3">
                                <p className="text-gray-300 font-semibold">De: {selectedAviso.sender}</p>
                                <p className="text-gray-500 flex items-center mt-1">
                                    <FaClock className="mr-1 text-xs" /> 
                                    {selectedAviso.date} às {selectedAviso.time}
                                </p>
                            </div>


                            <div className="flex-1 overflow-y-auto text-gray-200 whitespace-pre-wrap">
                                {selectedAviso.content}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Avisos;

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