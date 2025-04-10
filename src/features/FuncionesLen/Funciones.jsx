import React from 'react';
import Navbar from '../Landing/Navbar';
import Footer from '../Landing/Footer';

function Funciones() {
    return (
        <>
            <div className='min-h-screen px-6 md:px-16 py-20 bg-gradient-to-b from-white to-gray-100 text-gray-800'>
                <h1 className='text-4xl font-bold mb-6 text-blue-700'>Funciones del lenguaje</h1>

                <p className='text-lg mb-10 max-w-3xl'>
                    En esta parte quiero explicarte algo que usamos todo el tiempo cuando hablamos o escribimos: las
                    funciones del lenguaje. Aunque no nos demos cuenta, cada vez que decimos algo, lo hacemos con una
                    intención distinta. Acá te explico las más importantes con ejemplos y un diseño que las hace fáciles
                    de entender.
                </p>

                {/* Función Referencial */}
                <div className='mb-14 flex flex-col md:flex-row items-center gap-6'>
                    <img
                        src='https://image.pollinations.ai/prompt/open%20book%20with%20facts%20and%20information'
                        alt='Función referencial'
                        className='rounded-xl shadow-md w-32 h-32 md:w-48 md:h-48 object-cover'
                    />
                    <div className='max-w-xl'>
                        <h2 className='text-2xl font-semibold text-purple-600 mb-2'>📘 Función referencial</h2>
                        <p>
                            Esta es la función que usamos cuando queremos informar o dar datos. Es objetiva y clara.
                            Ejemplo: “El sol es una estrella”.
                        </p>
                    </div>
                </div>

                {/* Función Emotiva */}
                <div className='mb-14 flex flex-col md:flex-row-reverse items-center gap-6'>
                    <img
                        src='https://image.pollinations.ai/prompt/heart%20expressing%20emotions%20and%20feelings'
                        alt='Función emotiva'
                        className='rounded-xl shadow-md w-32 h-32 md:w-48 md:h-48 object-cover'
                    />
                    <div className='max-w-xl'>
                        <h2 className='text-2xl font-semibold text-purple-600 mb-2'>💓 Función emotiva</h2>
                        <p>
                            Se usa para expresar emociones o estados de ánimo. Ejemplo: “Estoy feliz”, “Me siento
                            nervioso”. Refleja lo que sentimos en el momento, más que informar algo objetivo.
                        </p>
                    </div>
                </div>

                {/* Función Apelativa */}
                <div className='mb-14 flex flex-col md:flex-row items-center gap-6'>
                    <img
                        src='https://image.pollinations.ai/prompt/megaphone%20asking%20for%20action'
                        alt='Función apelativa'
                        className='rounded-xl shadow-md w-32 h-32 md:w-48 md:h-48 object-cover'
                    />
                    <div className='max-w-xl'>
                        <h2 className='text-2xl font-semibold text-purple-600 mb-2'>📣 Función apelativa</h2>
                        <p>
                            Con esta buscamos influir en el receptor. La usamos cuando damos una orden, una sugerencia o
                            una pregunta. Ejemplo: “Haz tu tarea”, “¿Puedes ayudarme?”.
                        </p>
                    </div>
                </div>

                {/* Función Metalingüística */}
                <div className='mb-14 flex flex-col md:flex-row-reverse items-center gap-6'>
                    <img
                        src='https://image.pollinations.ai/prompt/words%20and%20letters%20explaining%20language'
                        alt='Función metalingüística'
                        className='rounded-xl shadow-md w-32 h-32 md:w-48 md:h-48 object-cover'
                    />
                    <div className='max-w-xl'>
                        <h2 className='text-2xl font-semibold text-purple-600 mb-2'>🔤 Función metalingüística</h2>
                        <p>
                            La usamos cuando hablamos del lenguaje en sí. Por ejemplo: “La palabra ‘perro’ es un
                            sustantivo”. Es la función que se activa en clases de gramática, cuando analizamos cómo
                            funciona el idioma.
                        </p>
                    </div>
                </div>

                {/* Función Fática */}
                <div className='mb-14 flex flex-col md:flex-row items-center gap-6'>
                    <img
                        src='https://image.pollinations.ai/prompt/two%20people%20connecting%20through%20speech%20bubbles'
                        alt='Función fática'
                        className='rounded-xl shadow-md w-32 h-32 md:w-48 md:h-48 object-cover'
                    />
                    <div className='max-w-xl'>
                        <h2 className='text-2xl font-semibold text-purple-600 mb-2'>📞 Función fática</h2>
                        <p>
                            Esta función sirve para iniciar, mantener o cerrar una conversación. Ejemplo: “Hola”, “¿Me
                            oyes?”, “Hasta luego”. No busca dar información, sino mantener el canal de comunicación
                            abierto.
                        </p>
                    </div>
                </div>

                {/* Función Poética */}
                <div className='mb-14 flex flex-col md:flex-row-reverse items-center gap-6'>
                    <img
                        src='https://image.pollinations.ai/prompt/colorful%20abstract%20art%20with%20expressive%20words'
                        alt='Función poética'
                        className='rounded-xl shadow-md w-32 h-32 md:w-48 md:h-48 object-cover'
                    />
                    <div className='max-w-xl'>
                        <h2 className='text-2xl font-semibold text-purple-600 mb-2'>🎨 Función poética</h2>
                        <p>
                            Esta función se enfoca en la forma del mensaje. Es muy común en poemas, canciones o textos
                            literarios. Busca provocar belleza, emoción o estilo. Ejemplo: “Tus ojos son dos luceros”.
                        </p>
                    </div>
                </div>

                {/* Cierre */}
                <div className='mt-16 border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-md shadow-sm'>
                    <p className='italic text-gray-700 text-lg'>
                        Cada vez que hablamos, usamos estas funciones del lenguaje sin darnos cuenta. Aprender a
                        identificarlas no solo nos ayuda a comunicarnos mejor, sino también a entender más a los demás.
                        ¡Ahora tienes una herramienta más para expresarte como un pro!
                    </p>
                </div>
            </div>
        </>
    );
}

export default Funciones;