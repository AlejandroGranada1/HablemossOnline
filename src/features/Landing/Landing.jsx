import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className='min-h-screen bg-gradient-to-b from-white to-blue-100 flex flex-col items-center justify-center text-center px-6'>
                <h1 className='text-4xl md:text-5xl font-bold text-blue-800 mb-4'>Bienvenidos a HablemosOnline</h1>
                <p className='text-lg md:text-xl text-gray-700 max-w-2xl mb-6'>
                    La comunicación es más que solo hablar: es conectar, entender, compartir. En este espacio
                    exploraremos cómo influye en nuestras relaciones, decisiones y en la forma en que vemos el mundo.
                    ¿Te animas a descubrirlo?
                </p>
            </div>
            <div className='bg-white py-16 px-6 md:px-12 lg:px-24 text-center'>
                <h2 className='text-3xl md:text-4xl font-bold text-blue-800 mb-6'>¿Qué es la comunicación?</h2>
                <p className='text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-10'>
                    La comunicación es el proceso mediante el cual las personas intercambian ideas, pensamientos,
                    emociones y conocimientos. Es esencial para la vida en sociedad, ya que nos permite conectar,
                    colaborar, resolver conflictos y construir relaciones significativas, tanto en lo personal como en
                    lo profesional.
                </p>
                <img
                    src='https://tse3.mm.bing.net/th?id=OIP.hTDGUj7nUuF8fer1xGrloQHaE8&pid=Api'
                    alt='Comunicación interpersonal'
                    className='w-full max-w-xl mx-auto rounded-2xl shadow-md'
                />
            </div>
            <div className='bg-blue-50 py-16 px-6 md:px-12 lg:px-24 text-center'>
                <h2 className='text-3xl md:text-4xl font-bold text-purple-700 mb-6'>
                    ¿Por qué es importante comunicarnos bien?
                </h2>
                <p className='text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-10'>
                    Una comunicación clara y efectiva puede evitar malentendidos, fortalecer vínculos y mejorar nuestra
                    convivencia. Ya sea en casa, en la escuela o en el trabajo, saber expresar lo que pensamos y
                    sentimos es fundamental para crecer como personas y como sociedad.
                </p>
                <div className='grid md:grid-cols-3 gap-8 mt-10'>
                    <div className='bg-white p-6 rounded-2xl shadow-md'>
                        <h3 className='text-xl font-semibold text-blue-800 mb-2'>Entender al otro</h3>
                        <p className='text-gray-600'>
                            Escuchar activamente nos permite comprender mejor a los demás y generar empatía.
                        </p>
                    </div>
                    <div className='bg-white p-6 rounded-2xl shadow-md'>
                        <h3 className='text-xl font-semibold text-blue-800 mb-2'>Resolver conflictos</h3>
                        <p className='text-gray-600'>
                            Una buena comunicación ayuda a resolver desacuerdos de forma pacífica y respetuosa.
                        </p>
                    </div>
                    <div className='bg-white p-6 rounded-2xl shadow-md'>
                        <h3 className='text-xl font-semibold text-blue-800 mb-2'>Trabajar en equipo</h3>
                        <p className='text-gray-600'>
                            Comunicar ideas con claridad es esencial para colaborar y alcanzar metas comunes.
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-white py-16 px-6 md:px-12 lg:px-24 text-center'>
                <h2 className='text-3xl md:text-4xl font-bold text-pink-600 mb-6'>
                    Elementos clave de la comunicación
                </h2>
                <p className='text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-10'>
                    Para que el proceso comunicativo sea efectivo, deben intervenir varios elementos fundamentales:
                </p>
                <ul className='max-w-2xl mx-auto text-left text-gray-700 text-lg space-y-4'>
                    <li>
                        <span className='font-semibold text-blue-800'>Emisor:</span> quien transmite el mensaje.
                    </li>
                    <li>
                        <span className='font-semibold text-blue-800'>Receptor:</span> quien recibe e interpreta el
                        mensaje.
                    </li>
                    <li>
                        <span className='font-semibold text-blue-800'>Mensaje:</span> la información que se transmite.
                    </li>
                    <li>
                        <span className='font-semibold text-blue-800'>Canal:</span> el medio por el que se envía el
                        mensaje (voz, texto, imagen...).
                    </li>
                    <li>
                        <span className='font-semibold text-blue-800'>Código:</span> el lenguaje o signos usados para
                        comunicar.
                    </li>
                    <li>
                        <span className='font-semibold text-blue-800'>Contexto:</span> el entorno que rodea la
                        comunicación.
                    </li>
                </ul>
            </div>
            <div className='bg-gradient-to-r from-purple-100 to-pink-200 py-16 px-6 md:px-12 lg:px-24 text-center'>
                <h2 className='text-3xl md:text-4xl font-bold text-blue-900 mb-6'>
                    ¡Explora más sobre el fascinante mundo de la comunicación!
                </h2>
                <p className='text-gray-800 text-lg md:text-xl max-w-2xl mx-auto mb-8'>
                    Descubre los distintos tipos de comunicación, sus funciones en el lenguaje y cómo la comunicación no
                    verbal juega un papel esencial en nuestras vidas.
                </p>
                <Link
                    to='/tipos'
                    className='inline-block bg-blue-700 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:bg-yellow-300 hover:text-blue-900 transition-all duration-300'>
                    Empezar ahora
                </Link>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Landing;
