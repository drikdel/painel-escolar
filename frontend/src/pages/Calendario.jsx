import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import { FaCalendarDays, FaPlus, FaTriangleExclamation, FaArrowLeft, FaTrashCan } from 'react-icons/fa6'; 

import './CalendarioCustom.css'; 

const formatDateToKey = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const Calendario = () => {
    const today = new Date(2025, 10, 17); 
    today.setHours(0,0,0,0); 

    const navigate = useNavigate();
    const [date, setDate] = useState(today);
    
    
    const [events, setEvents] = useState([]);
    const [currentText, setCurrentText] = useState('');

    const onDateChange = (newDate) => {
        setDate(newDate);
    };
    
    const handleBackClick = () => {
        navigate('/painel');
    };

    const dateString = formatDateToKey(date);

    const addEvent = () => {
        if (currentText && currentText.trim() !== '') {
            const newEvent = { 
                id: Date.now(),
                date: dateString, 
                text: currentText.trim() 
            };
            setEvents([...events, newEvent]);
            setCurrentText('');
        }
    };
    
    const deleteEvent = (id) => {
        setEvents(events.filter(event => event.id !== id));
    };

    const formatSelectedDate = (date) => {
        return date.toLocaleString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });
    };

    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const dayString = formatDateToKey(date);
            
            const hasEvent = events.some(event => event.date === dayString);
            
            if (hasEvent) {
                const tileDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                
                const diffTime = tileDate.getTime() - today.getTime();
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                if (diffDays >= 0 && diffDays <= 3) {
                    return 'event-nearby'; 
                }
                
                return 'event-day'; 
            }
        }
        return null;
    };

    const eventsForSelectedDate = events.filter(e => e.date === dateString);

    return (
        <div className="p-6">
            <header className="flex items-center mb-8">
                <FaCalendarDays className="text-3xl text-blue-400 mr-3" />
                <h1 className="text-3xl font-bold text-white">Calendário e Lembretes</h1>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                <div className="lg:col-span-2 bg-gray-800 p-6 shadow-xl rounded-lg">
                    <Calendar
                        onChange={onDateChange}
                        value={date}
                        tileClassName={tileClassName}
                        locale="pt-BR"
                        className="border-none w-full react-calendar-dark"
                    />
                </div>

                <div className="bg-gray-800 p-6 shadow-xl rounded-lg flex flex-col space-y-4">
                    <h2 className="text-2xl font-bold text-white border-b border-gray-700 pb-2">
                        Lembretes para {formatSelectedDate(date)}
                    </h2>
                    
                    <div className="flex-1 space-y-3 overflow-y-auto max-h-60">
                        {eventsForSelectedDate.length > 0 ? (
                            eventsForSelectedDate.map(event => (
                                <div key={event.id} className="p-3 bg-gray-700 rounded-md flex justify-between items-center">
                                    <p className="text-gray-200 text-sm flex-1">{event.text}</p>
                                    <button 
                                        onClick={() => deleteEvent(event.id)}
                                        className="ml-4 text-red-400 hover:text-red-500 transition"
                                        title="Apagar Lembrete"
                                    >
                                        <FaTrashCan />
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 italic">Nenhum lembrete para este dia.</p>
                        )}
                    </div>
                    
                    <div className="pt-4 border-t border-gray-700 space-y-3">
                        <h3 className="text-lg font-semibold text-white">Adicionar novo:</h3>
                        <textarea
                            rows="3"
                            className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-500"
                            placeholder="Ex: Prova de História"
                            value={currentText}
                            onChange={(e) => setCurrentText(e.target.value)}
                        />
                        <button
                            onClick={addEvent}
                            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center
                                     hover:bg-blue-700 transition-colors duration-200"
                            disabled={!currentText.trim()}
                        >
                            <FaPlus className="mr-2" /> Salvar Lembrete
                        </button>
                    </div>

                    <div className="mt-4 pt-4 text-sm text-gray-400 border-t border-gray-700">
                        <h3 className="font-bold mb-2 text-white">Legenda:</h3>
                        <div className="flex items-center mb-1">
                            <span className="w-4 h-4 rounded-full bg-blue-700 mr-2"></span>
                            Dia com lembrete
                        </div>
                        <div className="flex items-center">
                            <FaTriangleExclamation className="text-red-500 mr-2" />
                            Lembrete nos próximos 3 dias
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendario;

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