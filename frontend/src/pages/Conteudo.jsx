import React, { useState } from 'react';

import { BookOpen, Folder, ChevronRight, ArrowLeft } from 'lucide-react';



const areasDeConhecimento = {

  'Linguagens': {

    'Língua Portuguesa': [

      { titulo: 'Gêneros argumentativos' },

      { titulo: 'Análise crítica de textos' },

      { titulo: 'Interpretação avançada' },

      { titulo: 'Intertextualidade' },

      { titulo: 'Figuras de linguagem' },

      { titulo: 'Coesão e coerência' },

      { titulo: 'Variação linguística' },

      { titulo: 'Literatura: Romantismo → Realismo' },

    ],

    'Inglês': [

      { titulo: 'Reading e compreensão de texto' },

      { titulo: 'Verbos modais' },

      { titulo: 'Tempos verbais simples e contínuos' },

      { titulo: 'Vocabulário do cotidiano e tecnologia' },

    ],

    'Educação Física': [

      { titulo: 'Práticas corporais' },

      { titulo: 'Esportes coletivos' },

      { titulo: 'Corpo, saúde e bem-estar' },

    ],

    'Arte': [

      { titulo: 'Vanguardas artísticas' },

      { titulo: 'Modernismo' },

      { titulo: 'Arte contemporânea' },

      { titulo: 'Leitura e análise de obras' },

    ]

  },

  'Matemática': {

    'Matemática': [

      { titulo: 'Geometria plana' },

      { titulo: 'Geometria Espacial' },

      { titulo: 'Triângulos e semelhança' },

      { titulo: 'Trigonometria básica' },

      { titulo: 'Estatística (gráficos, tabelas, média, moda, mediana)' },

      { titulo: 'Probabilidade' },

      { titulo: 'Análise combinatória' },

    ]

  },

  'Ciências da Natureza': {

    'Biologia': [

      { titulo: 'Ecologia: cadeias, teias, ciclos' },

      { titulo: 'Impactos ambientais' },

      { titulo: 'Genética: Leis de Mendel' },

      { titulo: 'DNA, RNA, síntese proteica' },

      { titulo: 'Evolução: Darwin, Lamarck, seleção natural' },

      { titulo: 'Fisiologia humana' },

    ],

    'Química': [

      { titulo: 'Ligações químicas' },

      { titulo: 'Geometria molecular' },

      { titulo: 'Funções inorgânicas' },

      { titulo: 'Reações químicas' },

      { titulo: 'Cálculos estequiométricos' },

      { titulo: 'Soluções e concentração' },

      { titulo: 'Termoquímica' },

      { titulo: 'pH e hidrólise' },

    ],

    'Física': [

      { titulo: 'Energia, trabalho e potência' },

      { titulo: 'Leis de Newton (revisão aplicada)' },

      { titulo: 'Termologia: calor, temperatura, dilatação' },

      { titulo: 'Termodinâmica' },

      { titulo: 'Óptica (espelhos, lentes, refração)' },

      { titulo: 'Eletricidade básica' },

    ]

  },

  'Ciências Humanas': {

    'História': [

      { titulo: 'Revolução Inglesa' },

      { titulo: 'Iluminismo' },

      { titulo: 'Revolução Americana (Independência dos EUA)' },

      { titulo: 'Revolução Francesa' },

      { titulo: 'Era Napoleônica' },

      { titulo: 'Revoluções Liberais do século XIX' },

      { titulo: 'Independência da América Latina' },

      { titulo: 'Imperialismo e Neocolonialismo' },

      { titulo: '1ª Revolução Industrial' },

      { titulo: 'Final da Colônia' },

      { titulo: 'Brasil Império (1º Reinado, Regências, 2º Reinado)' },

      { titulo: 'Abolição da escravidão' },

      { titulo: 'Proclamação da República' },

      { titulo: 'República da Espada e República Velha' },

    ],

    'Geografia': [

      { titulo: 'Globalização' },

      { titulo: 'Geopolítica' },

      { titulo: 'Industrialização' },

      { titulo: 'Urbanização e metropolização' },

      { titulo: 'Matriz energética' },

      { titulo: 'Migrações' },

      { titulo: 'Economia global' },

      { titulo: 'Agricultura e comércio' },

      { titulo: 'Impactos ambientais' },

      { titulo: 'Organização do espaço brasileiro' },

    ],

    'Sociologia': [

      { titulo: 'Transformações do trabalho' },

      { titulo: 'Uberização / economia de plataforma' },

      { titulo: 'Capitalismo contemporâneo' },

      { titulo: 'Precarização e informalidade' },

      { titulo: 'Cultura e identidade' },

      { titulo: 'Etnocentrismo' },

      { titulo: 'Desigualdade social' },

      { titulo: 'Movimentos sociais' },

      { titulo: 'Estado, cidadania e direitos' },

      { titulo: 'Tecnologia e sociedade' },

      { titulo: 'Ideologia e poder' },

    ],

    'Filosofia': [

      { titulo: 'Ética (Kant, Aristóteles)' },

      { titulo: 'Política (Hobbes, Locke, Rousseau)' },

      { titulo: 'Racionalismo e Empirismo' },

      { titulo: 'Iluminismo' },

      { titulo: 'Modernidade' },

      { titulo: 'Liberdade, alienação' },

      { titulo: 'Existencialismo' },

    ]

  }

};





const Conteudo = () => {

    const [areaAtiva, setAreaAtiva] = useState('Ciências Humanas');

    const [materiaFocada, setMateriaFocada] = useState(null);

    const [concluidos, setConcluidos] = useState({});



    const materiasDaArea = areasDeConhecimento[areaAtiva];

    const conteudoFocado = materiaFocada ? materiasDaArea[materiaFocada] : null;



    const handleFocusMateria = (materia) => {

        setMateriaFocada(materia);

    };



    const handleBack = () => {

        setMateriaFocada(null);

    };



    const handleToggleConcluido = (titulo) => {

        const key = `${areaAtiva}_${materiaFocada}_${titulo}`;

        setConcluidos(prev => ({

            ...prev,

            [key]: !prev[key]

        }));

    };



    const isConcluido = (titulo) => {

        const key = `${areaAtiva}_${materiaFocada}_${titulo}`;

        return !!concluidos[key];

    };



    return (

        <div className="min-h-full p-4">

            <h1 className="text-3xl font-bold text-white mb-8 border-b border-gray-700 pb-3 flex items-center">

                <BookOpen className="w-7 h-7 mr-3 text-blue-400" /> Conteúdo Curricular

            </h1>



            <div className="flex flex-col lg:flex-row gap-6">

               

                <div className="lg:w-1/4 bg-gray-800 p-4 rounded-xl shadow-xl h-fit">

                    <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">Áreas de Conhecimento</h2>

                    <nav className="space-y-2">

                        {Object.keys(areasDeConhecimento).map((area) => (

                            <button

                                key={area}

                                onClick={() => {

                                    setAreaAtiva(area);

                                    setMateriaFocada(null);

                                }}

                                className={`flex items-center w-full p-3 rounded-lg transition-colors duration-200

                                    ${areaAtiva === area

                                        ? 'bg-blue-600 text-white shadow-md'

                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`

                                }

                            >

                                <Folder className="w-5 h-5 mr-3" />

                                <span className="font-medium">{area}</span>

                            </button>

                        ))}

                    </nav>

                </div>



                <div className="lg:w-3/4 transition-all duration-300">

                   

                    {materiaFocada && conteudoFocado && (

                        <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transition-all duration-300">

                            <button

                                onClick={handleBack}

                                className="flex items-center text-blue-400 hover:text-blue-300 mb-6 font-semibold"

                            >

                                <ArrowLeft className="w-5 h-5 mr-2" />

                                Voltar para Matérias de {areaAtiva}

                            </button>

                           

                            <h2 className="text-3xl font-bold text-white mb-4 border-b border-gray-700 pb-2">{materiaFocada}</h2>

                           

                            <p className="text-gray-400 mb-6">Use as caixas de seleção para marcar os tópicos que você já estudou e revisar!</p>



                            <ul className="space-y-3">

                                {conteudoFocado.map((item, index) => (

                                    <li

                                        key={index}

                                        className={`flex justify-between items-center p-3 rounded-lg shadow-sm border border-gray-700 cursor-pointer transition-all duration-150

                                            ${isConcluido(item.titulo) ? 'bg-green-900/40 border-green-500' : 'bg-gray-700 hover:bg-gray-600'}`

                                        }

                                        onClick={() => handleToggleConcluido(item.titulo)}

                                    >

                                        <div className="flex items-center">

                                            <div

                                                className={`w-5 h-5 mr-3 rounded border-2 flex items-center justify-center transition-colors duration-200

                                                    ${isConcluido(item.titulo) ? 'bg-green-500 border-green-500' : 'bg-gray-800 border-gray-600'}`

                                                }

                                            >

                                                {isConcluido(item.titulo) && <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}

                                            </div>

                                           

                                            <span className={`text-gray-200 font-medium ${isConcluido(item.titulo) ? 'line-through text-gray-400' : 'text-white'}`}>

                                                {item.titulo}

                                            </span>

                                        </div>

                                    </li>

                                ))}

                            </ul>

                        </div>

                    )}



                    {!materiaFocada && (

                        <>

                            <h2 className="text-2xl font-bold text-blue-400 mb-4 transition-opacity duration-300">Selecione uma Matéria de {areaAtiva}</h2>

                            <div className="space-y-4 transition-opacity duration-300">

                                {Object.keys(materiasDaArea).map((materia) => (

                                    <div key={materia} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition duration-200">

                                       

                                        <button

                                            onClick={() => handleFocusMateria(materia)}

                                            className="flex justify-between items-center w-full p-4 transition-all duration-150"

                                        >

                                            <span className="text-xl font-semibold text-white">{materia}</span>

                                            <ChevronRight className={`w-6 h-6 text-gray-400 transition-transform duration-300`} />

                                        </button>

                                    </div>

                                ))}

                            </div>

                        </>

                    )}

                </div>

            </div>

           

            {!materiaFocada && (

                <div className="mt-10 p-6 bg-gray-800 border-l-4 border-yellow-500 rounded-xl">

                    <p className="text-yellow-400 font-semibold">Dica de Estudo:</p>

                    <p className="text-gray-300">Use o Mapa de Conteúdos para garantir que você está revisando todo o material do ano, focando nas matérias por área de conhecimento!</p>

                </div>

            )}

        </div>

    );

};



export default Conteudo;

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