import React from 'react';
import { Link } from 'react-router-dom';



const PASSING_SCORE = 10.0; 
const MAX_BIMESTERS = 2; 
const MAX_POINTS_PER_BIMESTER = 10.0; 

const studentGrades = [
    { subject: 'Português', color: 'bg-blue-500', bimesters: [10.0] },
    { subject: 'Matemática', color: 'bg-teal-500', bimesters: [8.0] },
    { subject: 'Física', color: 'bg-red-500', bimesters: [6.0] },
    { subject: 'Biologia', color: 'bg-green-500', bimesters: [5.0, 5.0] },
    { subject: 'Artes', color: 'bg-purple-500', bimesters: [8.2] },
    { subject: 'Química', color: 'bg-orange-500', bimesters: [2.5] },
];

const calculateStatus = (bimesterGrades) => {
    const totalCurrentPoints = bimesterGrades.reduce((a, b) => a + b, 0);
    const remainingPoints = PASSING_SCORE - totalCurrentPoints;
    const bimestersCompleted = bimesterGrades.length;
    const bimestersRemaining = MAX_BIMESTERS - bimestersCompleted;

    let requiredPoints = 0; 
    let requiredAverage = 0; 
    let statusText = '';
    let statusColor = 'text-green-400';
    let warningLevel = 'safe'; 
    let IconSymbol = '✅'; 

    if (remainingPoints <= 0) {
        statusText = `Aprovado(a)! Pontuação Total Acumulada: ${totalCurrentPoints.toFixed(1)}pts.`;
        IconSymbol = '✅';
    } else if (bimestersRemaining <= 0) {
        statusText = `REPROVADO. Faltaram ${remainingPoints.toFixed(1)} pontos para a média de ${PASSING_SCORE.toFixed(1)}pts.`;
        statusColor = 'text-red-600';
        warningLevel = 'critical';
        IconSymbol = '❌'; 
    } else {
        requiredPoints = remainingPoints;
        requiredAverage = remainingPoints / bimestersRemaining;

        if (requiredAverage > MAX_POINTS_PER_BIMESTER) {
            statusText = `REPROVADO. Faltam ${requiredPoints.toFixed(1)} pontos. Precisa de mais que ${MAX_POINTS_PER_BIMESTER.toFixed(1)}pts no(s) bimestre(s) restante(s).`;
            statusColor = 'text-red-600';
            warningLevel = 'critical';
            IconSymbol = '❌';
        } else {
            statusText = `Precisa de ${requiredPoints.toFixed(1)} pontos (média de ${requiredAverage.toFixed(1)} por bimestre restante).`;
            IconSymbol = '⚠️'; 

            if (requiredAverage > 7.5) { 
                statusColor = 'text-red-400';
                warningLevel = 'high';
            } else if (requiredAverage > 5.0) { 
                statusColor = 'text-orange-400';
                warningLevel = 'medium';
            } else {
                statusColor = 'text-yellow-400'; 
                warningLevel = 'low';
            }
        }
    }


    return { totalCurrentPoints, requiredPoints, requiredAverage, statusText, statusColor, warningLevel, bimestersRemaining, IconSymbol };
};

const StatusCard = ({ subject, grades, color }) => {
    const status = calculateStatus(grades);
    const totalMaxPoints = MAX_POINTS_PER_BIMESTER * MAX_BIMESTERS;
    const currentPointsPercentage = Math.min(100, (status.totalCurrentPoints / totalMaxPoints) * 100);
    
    let progressColor = 'bg-green-500';
    if (status.warningLevel === 'high' || status.warningLevel === 'critical') {
        progressColor = 'bg-red-500';
    } else if (status.warningLevel === 'medium') {
        progressColor = 'bg-orange-500';
    } else if (status.warningLevel === 'low') {
        progressColor = 'bg-yellow-500';
    }

    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition duration-300">
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-white flex items-center">
                    <span className={`h-3 w-3 rounded-full mr-2 ${color} inline-block`}></span>
                    {subject}
                </h3>
                <p className="text-sm font-semibold text-gray-400">
                    Bimestres Lançados: {grades.length}/{MAX_BIMESTERS}
                </p>
            </div>


            <div className="mb-4">
                <div className="flex justify-between text-xs font-semibold text-white mb-1">
                    <span>Pontos Atuais: {status.totalCurrentPoints.toFixed(1)}/{totalMaxPoints.toFixed(1)}</span>
                    <span>Mínimo para Aprovação: {PASSING_SCORE.toFixed(1)}pts</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                        className={`h-2.5 rounded-full ${progressColor}`} 
                        style={{ width: `${currentPointsPercentage}%` }}
                    ></div>
                </div>
            </div>


            <div className="mt-4 p-3 rounded-lg border border-gray-700 bg-gray-700/50">
                <div className="flex items-start">

                    <span className={`text-2xl mr-3 mt-1 ${status.statusColor}`} role="img" aria-label="Status">{status.IconSymbol}</span>
                    <p className={`text-md font-medium ${status.statusColor}`}>
                        {status.statusText}
                    </p>
                </div>
                
                {(status.warningLevel === 'high' || status.warningLevel === 'critical') && (
                    <div className="mt-3 p-2 bg-red-800/50 border border-red-600 rounded-md text-red-300 text-sm flex items-center">

                        <span className="mr-2 flex-shrink-0 text-xl">⚠️</span>
                        <span className='font-semibold'>ATENÇÃO MÁXIMA:</span> Esta disciplina exige um desempenho acima da média no(s) próximo(s) bimestre(s). Consulte seu professor.
                    </div>
                )}
            </div>
        </div>
    );
};

const Notas = () => {
    const bimesterHeaders = Array.from({ length: MAX_BIMESTERS }, (_, i) => `B${i + 1}`); 

    return (
        <div className="p-6 min-h-screen bg-gray-900">
            <h1 className="text-3xl font-bold text-white mb-8 border-b border-gray-700 pb-3 flex items-center">

                <span className="text-2xl mr-3 text-yellow-400">🏆</span> Desempenho Semestral (3º e 4º Bimestre)
            </h1>


            <div className="bg-blue-800/30 p-4 rounded-lg shadow-md mb-8 border border-blue-700">
                <p className="text-blue-300 font-semibold text-sm flex items-center">

                    <span className="text-xl mr-2">🔢</span>
                    Este semestre ({bimesterHeaders.join(' e ')}), o total máximo de pontos é **20.0** (10.0 por bimestre). A pontuação total mínima para aprovação é de **{PASSING_SCORE.toFixed(1)}** pontos.
                </p>
            </div>


            <div className="bg-gray-800 p-6 rounded-xl shadow-xl mb-8 overflow-x-auto">
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center">

                    <span className="text-2xl mr-2 text-blue-400">🎓</span> Notas por Bimestre (Max {MAX_POINTS_PER_BIMESTER.toFixed(1)}pts)
                </h2>
                
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-700">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider rounded-tl-lg">Disciplina</th>
                            {bimesterHeaders.map((header, index) => (
                                <th key={index} className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">
                                    {header}
                                </th>
                            ))}
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider rounded-tr-lg">Total Acumulado</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {studentGrades.map((grade, subjectIndex) => (
                            <tr 
                                key={subjectIndex} 
                                className="hover:bg-gray-700 transition duration-150"
                            >
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                                    <span className={`h-2.5 w-2.5 rounded-full mr-2 ${grade.color} inline-block`}></span>
                                    {grade.subject}
                                </td>
                                {bimesterHeaders.map((_, bimesterIndex) => {
                                    const score = grade.bimesters[bimesterIndex];
                                    let cellColor = 'text-gray-400';
                                    if (score !== undefined) {
                                        if (score >= 7.5) cellColor = 'text-green-400 font-bold';
                                        else if (score >= 5.0) cellColor = 'text-yellow-400 font-bold';
                                        else cellColor = 'text-red-400 font-bold';
                                    }

                                    return (
                                        <td key={bimesterIndex} className="px-6 py-4 whitespace-nowrap text-center text-sm">
                                            <span className={cellColor}>
                                                {score !== undefined ? score.toFixed(1) : '-'}
                                            </span>
                                        </td>
                                    );
                                })}
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-bold text-blue-400">
                                    {grade.bimesters.reduce((a, b) => a + b, 0).toFixed(1)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <div className="bg-gray-800 p-6 rounded-xl shadow-xl">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center">

                    <span className="text-xl mr-2 text-blue-400">🔢</span> Análise de Pontuação Necessária
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {studentGrades.map((grade, index) => (
                        <StatusCard 
                            key={index} 
                            subject={grade.subject} 
                            grades={grade.bimesters}
                            color={grade.color}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Notas;

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