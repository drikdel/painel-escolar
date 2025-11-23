import React from 'react';
import { FaUserCircle, FaEnvelope, FaPhone, FaCalendarAlt, FaIdCard, FaMapMarkerAlt, FaSchool } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa6';


const studentData = {
    name: 'Mateus Aguiar Silva',
    matricula: '2024123456',
    email: 'mateus.aguiar@gmail.com',
    phone: '(61) 99221-7904',
    birthdate: '05/06/2008',
    grade: '2º Ano do Ensino Médio',
    class: 'Turma E',
    address: 'Rua das Flores, 123 - Samambaia, Distrito Federal',
    mother: 'Maria Helena da Silva',
    father: 'Carlos Eduardo da Silva',
};

const Perfil = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-white mb-8 border-b border-gray-700 pb-3">Meu Perfil e Dados</h1>
            
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl transition duration-300 hover:shadow-blue-500/50">
                

                <div className="flex items-center border-b border-gray-700 pb-6 mb-6">
                    <FaUserCircle className="text-8xl text-blue-400 mr-6" />
                    <div>
                        <p className="text-4xl font-extrabold text-white">{studentData.name}</p>
                        <p className="text-lg text-gray-400 mt-1">Matrícula: <span className="text-blue-300">{studentData.matricula}</span></p>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-8">
                    <div className="flex items-center text-white">
                        <FaSchool className="text-2xl text-blue-400 mr-4" />
                        <div>
                            <p className="text-sm text-gray-400">Ano / Turma</p>
                            <p className="text-lg font-medium">{studentData.grade} / {studentData.class}</p>
                        </div>
                    </div>

                    <div className="flex items-center text-white">
                        <FaGraduationCap className="text-2xl text-blue-400 mr-4" />
                        <div>
                            <p className="text-sm text-gray-400">Status</p>
                            <p className="text-lg font-medium text-green-400">Ativo</p>
                        </div>
                    </div>
                </div>


                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-white border-b border-gray-700 pb-2 mb-4">Informações de Contato</h2>

                    <InfoItem icon={FaEnvelope} label="E-mail" value={studentData.email} />
                    <InfoItem icon={FaPhone} label="Telefone" value={studentData.phone} />
                    <InfoItem icon={FaCalendarAlt} label="Data de Nascimento" value={studentData.birthdate} />
                    
                    <h2 className="text-xl font-semibold text-white border-b border-gray-700 pb-2 pt-4 mb-4">Informações de Endereço</h2>
                    <InfoItem icon={FaMapMarkerAlt} label="Endereço" value={studentData.address} />

                    <h2 className="text-xl font-semibold text-white border-b border-gray-700 pb-2 pt-4 mb-4">Responsáveis</h2>
                    <InfoItem icon={FaUserCircle} label="Mãe" value={studentData.mother} />
                    <InfoItem icon={FaUserCircle} label="Pai" value={studentData.father} />
                </div>
                
            </div>
        </div>
    );
};


const InfoItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-start">
        <Icon className="text-xl text-blue-300 mr-4 mt-1" />
        <div>
            <p className="text-sm text-gray-400">{label}</p>
            <p className="text-md text-white font-medium">{value}</p>
        </div>
    </div>
);

export default Perfil;

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