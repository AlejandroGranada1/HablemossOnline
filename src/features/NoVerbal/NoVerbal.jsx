import React from 'react';
import Navbar from '../Landing/Navbar';
import Footer from '../Landing/Footer';

function NoVerbal() {
    return (
        <>
            <div>
                <Navbar/>
            </div>
            <div className='min-h-screen px-6 md:px-16 py-20 bg-gradient-to-b from-white to-gray-100 text-gray-800'>
                <h1 className='text-4xl font-bold mb-6 text-blue-700'>Comunicación no verbal</h1>

                <p className='text-lg mb-10 max-w-3xl'>
                    La comunicación no verbal es todo lo que decimos sin palabras. A veces, nuestro cuerpo, voz o
                    incluso cómo nos vestimos transmite más que lo que decimos con la boca. Aquí te muestro los
                    principales tipos y cómo los usamos día a día.
                </p>

                {/* Paralenguaje */}
                <div className='mb-14 flex flex-col md:flex-row items-center gap-6'>
                    <img
                        src='https://image.pollinations.ai/prompt/speech%20bubbles%20with%20different%20tones%20and%20speeds'
                        alt='Paralenguaje'
                        className='rounded-xl shadow-md w-32 h-32 md:w-48 md:h-48 object-cover'
                    />
                    <div className='max-w-xl'>
                        <h2 className='text-2xl font-semibold text-purple-600 mb-2'>🗣️ Paralenguaje</h2>
                        <p>
                            Es cómo usamos la voz al hablar: el tono, el volumen, la velocidad. No es lo que decimos,
                            sino *cómo* lo decimos. Por ejemplo, una misma frase puede sonar enojada o amable
                            dependiendo de cómo la digamos.
                        </p>
                    </div>
                </div>

                {/* Kinesis */}
                <div className='mb-14 flex flex-col md:flex-row-reverse items-center gap-6'>
                    <img
                        src='https://image.pollinations.ai/prompt/hands%20making%20different%20gestures%20and%20body%20movements'
                        alt='Kinesis'
                        className='rounded-xl shadow-md w-32 h-32 md:w-48 md:h-48 object-cover'
                    />
                    <div className='max-w-xl'>
                        <h2 className='text-2xl font-semibold text-purple-600 mb-2'>💃 Kinesis</h2>
                        <p>
                            Es el lenguaje corporal. Cómo movemos las manos, la cabeza, los brazos. Muchas veces sin
                            darnos cuenta estamos comunicando con nuestros gestos.
                        </p>
                    </div>
                </div>

                {/* Microexpresiones */}
                <div className='mb-14 flex flex-col md:flex-row items-center gap-6'>
                    <img
                        src='https://image.pollinations.ai/prompt/subtle%20changes%20in%20facial%20expressions%20revealing%20emotions'
                        alt='Microexpresiones'
                        className='rounded-xl shadow-md w-32 h-32 md:w-48 md:h-48 object-cover'
                    />
                    <div className='max-w-xl'>
                        <h2 className='text-2xl font-semibold text-purple-600 mb-2'>😐 Microexpresiones</h2>
                        <p>
                            Son expresiones del rostro que duran apenas un segundo, pero revelan emociones reales. A
                            veces alguien dice que está bien, pero su cara lo contradice.
                        </p>
                    </div>
                </div>

                {/* Proxemia */}
                <div className='mb-14 flex flex-col md:flex-row-reverse items-center gap-6'>
                    <img
                        src='https://image.pollinations.ai/prompt/people%20maintaining%20different%20distances%20during%20conversation'
                        alt='Proxemia'
                        className='rounded-xl shadow-md w-32 h-32 md:w-48 md:h-48 object-cover'
                    />
                    <div className='max-w-xl'>
                        <h2 className='text-2xl font-semibold text-purple-600 mb-2'>📏 Proxemia</h2>
                        <p>
                            Es el uso del espacio personal. Estar muy cerca o muy lejos puede hacer que el otro se
                            sienta incómodo o confiado. Varía según la cultura y la relación.
                        </p>
                    </div>
                </div>

                {/* Emblemas y ademanes */}
                <div className='mb-14 flex flex-col md:flex-row items-center gap-6'>
                    <img
                        src='https://image.pollinations.ai/prompt/hands%20showing%20commonly%20understood%20gestures'
                        alt='Emblemas y ademanes'
                        className='rounded-xl shadow-md w-32 h-32 md:w-48 md:h-48 object-cover'
                    />
                    <div className='max-w-xl'>
                        <h2 className='text-2xl font-semibold text-purple-600 mb-2'>🤟 Emblemas y ademanes</h2>
                        <p>
                            Son gestos con las manos que tienen un significado claro, como levantar el pulgar o hacer
                            “ok” con los dedos. Los usamos mucho, a veces más que palabras.
                        </p>
                    </div>
                </div>

                {/* Vestimenta */}
                <div className='mb-14 flex flex-col md:flex-row-reverse items-center gap-6'>
                    <img
                        src='https://image.pollinations.ai/prompt/different%20styles%20of%20clothing%20conveying%20different%20messages'
                        alt='Vestimenta'
                        className='rounded-xl shadow-md w-32 h-32 md:w-48 md:h-48 object-cover'
                    />
                    <div className='max-w-xl'>
                        <h2 className='text-2xl font-semibold text-purple-600 mb-2'>👗 Vestimenta</h2>
                        <p>
                            Lo que vestimos también comunica. Puede decir algo sobre nuestra personalidad, estado de
                            ánimo o incluso nivel de formalidad según el contexto.
                        </p>
                    </div>
                </div>

                {/* Salud y protocolo */}
                <div className='mb-14 flex flex-col md:flex-row items-center gap-6'>
                    <img
                        src='https://image.pollinations.ai/prompt/body%20language%20indicating%20health%20and%20greetings%20from%20different%20cultures'
                        alt='Salud y protocolo'
                        className='rounded-xl shadow-md w-32 h-32 md:w-48 md:h-48 object-cover'
                    />
                    <div className='max-w-xl'>
                        <h2 className='text-2xl font-semibold text-purple-600 mb-2'>🩺 Salud y protocolo</h2>
                        <p>
                            El estado físico o de salud también influye en cómo nos comunicamos. Además, respetar
                            protocolos (como saludar con la mano, inclinarse, etc.) forma parte del lenguaje no verbal.
                        </p>
                    </div>
                </div>

                {/* Cierre */}
                <div className='mt-16 border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-md shadow-sm'>
                    <p className='italic text-gray-700 text-lg'>
                        Me gusta pensar que la comunicación no verbal es como un segundo idioma que todos conocemos pero
                        no siempre analizamos. Prestar atención a estos detalles mejora cómo nos relacionamos con los
                        demás y cómo nos mostramos al mundo.
                    </p>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
}

export default NoVerbal;