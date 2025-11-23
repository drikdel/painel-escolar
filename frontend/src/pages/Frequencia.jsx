import React, { useState } from 'react';
import { FaCalendarCheck, FaChartSimple, FaUserCheck, FaUserXmark, FaClock } from 'react-icons/fa6';


const classSchedule = {
    'Segunda-feira': [
        { subject: 'Biologia', teacher: 'Jacira', color: 'bg-green-500' },
        { subject: 'Química', teacher: 'Fernando', color: 'bg-orange-500' },
        { subject: 'Trilha de História', teacher: 'Bruna', color: 'bg-yellow-500' },
        { subject: 'Física', teacher: 'Fábio', color: 'bg-red-500' },
        { subject: 'Artes', teacher: 'Elison', color: 'bg-purple-500' },
    ],
    'Terça-feira': [
        { subject: 'Português', teacher: 'Adriana', color: 'bg-blue-500' },
        { subject: 'Matemática', teacher: 'Hugo', color: 'bg-teal-500' },
        { subject: 'Trilha de Inglês', teacher: 'Igor', color: 'bg-cyan-500' },
    ],
    'Quarta-feira': [
        { subject: 'Química', teacher: 'Fernando', color: 'bg-orange-500' },
        { subject: 'Espanhol', teacher: 'Natalia', color: 'bg-pink-500' },
        { subject: 'Física', teacher: 'Fábio', color: 'bg-red-500' },
    ],
    'Quinta-feira': [
        { subject: 'Artes', teacher: 'Elison', color: 'bg-purple-500' },
        { subject: 'Biologia', teacher: 'Jacira', color: 'bg-green-500' },
        { subject: 'Educação Física', teacher: 'André', color: 'bg-indigo-500' },
    ],
    'Sexta-feira': [
        { subject: 'Projeto de Vida', teacher: 'Bruna', color: 'bg-lime-500' },
        { subject: 'Português', teacher: 'Adriana', color: 'bg-blue-500' },
        { subject: 'Matemática', teacher: 'Hugo', color: 'bg-teal-500' },
    ],
};


const attendanceSummary = {
    totalClasses: 350,
    totalAbsences: 12,
    presenceRate: '96.6%',
    absencesBySubject: [
        { subject: 'Português', count: 3 },
        { subject: 'Matemática', count: 2 },
        { subject: 'Física', count: 4 },
        { subject: 'Biologia', count: 1 },
        { subject: 'Artes', count: 2 },
    ],
};

const Frequencia = () => {
    const [activeDay, setActiveDay] = useState('Segunda-feira');
    const days = Object.keys(classSchedule);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-white mb-8 border-b border-gray-700 pb-3">Frequência e Horário de Aulas</h1>

            {/* 1.FREQUÊNCIA */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-xl mb-8">
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <FaChartSimple className="mr-2 text-blue-400" /> Resumo do Semestre
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    {/**/}
                    <SummaryCard 
                        icon={FaClock} 
                        label="Total de Aulas" 
                        value={attendanceSummary.totalClasses} 
                        color="text-indigo-400" 
                    />
                    {/* Cartão 2: Faltas */}
                    <SummaryCard 
                        icon={FaUserXmark} 
                        label="Total de Faltas" 
                        value={attendanceSummary.totalAbsences} 
                        color="text-red-400" 
                    />
                    {/* Cartão 3: Taxa de Presença */}
                    <SummaryCard 
                        icon={FaUserCheck} 
                        label="Taxa de Presença" 
                        value={attendanceSummary.presenceRate} 
                        color="text-green-400" 
                    />
                </div>
            </div>

            {/* 2. GRADE DE HORÁRIOS */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <FaCalendarCheck className="mr-2 text-blue-400" /> Horário Semanal
                </h2>
                
                {/* Botões dos Dias */}
                <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-700 pb-3">
                    {days.map(day => (
                        <button
                            key={day}
                            onClick={() => setActiveDay(day)}
                            className={`px-4 py-2 rounded-lg font-medium transition duration-150 
                                ${activeDay === day 
                                    ? 'bg-blue-600 text-white shadow-md' 
                                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                }`}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* Detalhes do Dia Ativo */}
                <div className="space-y-4">
                    {classSchedule[activeDay].map((lesson, index) => (
                        <LessonItem key={index} lesson={lesson} index={index} />
                    ))}
                </div>
            </div>

            {/* 3. FALTAS POR DISCIPLINA*/}
            <div className="bg-gray-800 p-6 rounded-xl shadow-xl mt-8">
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <FaUserXmark className="mr-2 text-red-400" /> Detalhe de Faltas por Disciplina
                </h2>
                <div className="space-y-2">
                    {attendanceSummary.absencesBySubject.map((item, index) => (
                        <div key={index} className="flex justify-between items-center text-white p-3 rounded-lg bg-gray-700/50">
                            <span className="font-medium">{item.subject}</span>
                            <span className="text-red-400 font-bold">{item.count} Faltas</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


const SummaryCard = ({ icon: Icon, label, value, color }) => (
    <div className="bg-gray-700 p-4 rounded-lg shadow-inner">
        <Icon className={`text-4xl mx-auto mb-2 ${color}`} />
        <p className="text-3xl font-bold text-white">{value}</p>
        <p className="text-sm text-gray-400">{label}</p>
    </div>
);


const LessonItem = ({ lesson, index }) => (
    <div className="flex items-center p-4 rounded-lg bg-gray-700 hover:bg-gray-700/70 transition duration-150">
        <div className={`w-2 h-full rounded-l-lg mr-4 ${lesson.color}`}></div>
        <div className="flex-1">
            <p className="text-lg font-semibold text-white">{index + 1}ª Aula: {lesson.subject}</p>
            <p className="text-sm text-gray-400">
                Professor(a): {lesson.teacher}
            </p>
        </div>
        <FaClock className="text-gray-400" />
    </div>
);

export default Frequencia;

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