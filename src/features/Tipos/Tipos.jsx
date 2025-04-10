import React from 'react';
import Navbar from '../Landing/Navbar';
import Footer from '../Landing/Footer';

function Tipos() {
    return (
        <>
            <div className='min-h-screen px-6 md:px-16 py-20 bg-gradient-to-b from-white to-gray-100 text-gray-800'>
                <h1 className='text-4xl font-bold mb-6 text-blue-700'>
                    Tipos de comunicación
                </h1>

                <p className='text-lg mb-8'>
                    En esta parte te quiero hablar sobre los distintos estilos
                    de comunicación que usamos todos los días. Algunos pueden
                    ayudarnos a mejorar nuestras relaciones, y otros pueden
                    generar malentendidos o conflictos. Conocerlos es el primer
                    paso para expresarnos mejor.
                </p>

                {/* Comunicación pasiva */}
                <div className='mb-14 flex flex-col md:flex-row items-center gap-6 animate-fade-in'>
                    <img
                        src='https://image.pollinations.ai/prompt/a%20person%20with%20their%20head%20down%20and%20arms%20crossed,%20looking%20sad'
                        alt='Comunicación pasiva'
                        className='w-32 h-32 md:w-40 md:h-40 rounded-full shadow-md object-cover'
                    />
                    <div>
                        <h2 className='text-2xl font-semibold text-purple-600 mb-2'>
                            🔹 Comunicación pasiva
                        </h2>
                        <p>
                            Este tipo de comunicación se da cuando una persona
                            evita decir lo que piensa o siente. Prefiere callar
                            con tal de no generar conflicto. Aunque parezca algo
                            tranquilo, con el tiempo puede causar frustración y
                            falta de autoestima. A veces, hasta nos hace sentir
                            que no importamos.
                        </p>
                    </div>
                </div>

                {/* Comunicación agresiva */}
                <div className='mb-14 flex flex-col md:flex-row-reverse items-center gap-6 animate-fade-in'>
                    <img
                        src='https://image.pollinations.ai/prompt/a%20person%20shouting%20angrily,%20with%20a%20red%20and%20black%20aura'
                        alt='Comunicación agresiva'
                        className='w-32 h-32 md:w-40 md:h-40 rounded-full shadow-md object-cover'
                    />
                    <div>
                        <h2 className='text-2xl font-semibold text-purple-600 mb-2'>
                            🔹 Comunicación agresiva
                        </h2>
                        <p>
                            Es cuando una persona impone su opinión sin respetar
                            a los demás. Se expresa con gritos, amenazas o
                            sarcasmo. Este tipo de comunicación genera miedo y
                            aleja a las personas. Es común cuando alguien está
                            muy estresado o siente que no lo escuchan.
                        </p>
                    </div>
                </div>

                {/* Comunicación pasivo-agresiva */}
                <div className='mb-14 flex flex-col md:flex-row items-center gap-6 animate-fade-in'>
                    <img
                        src='https://image.pollinations.ai/prompt/a%20person%20with%20a%20sarcastic%20smile,%20arms%20folded,%20looking%20to%20the%20side'
                        alt='Comunicación pasivo-agresiva'
                        className='w-32 h-32 md:w-40 md:h-40 rounded-full shadow-md object-cover'
                    />
                    <div>
                        <h2 className='text-2xl font-semibold text-purple-600 mb-2'>
                            🔹 Comunicación pasivo-agresiva
                        </h2>
                        <p>
                            Es cuando alguien no dice las cosas directamente,
                            pero lo demuestra con acciones o actitudes. Puede
                            usar el sarcasmo, el silencio o decir cosas como
                            “haz lo que quieras” con mala actitud. Es un estilo
                            muy dañino porque no hay claridad y genera
                            resentimiento.
                        </p>
                    </div>
                </div>

                {/* Comunicación asertiva */}
                <div className='mb-14 flex flex-col md:flex-row-reverse items-center gap-6 animate-fade-in'>
                    <img
                        src='https://image.pollinations.ai/prompt/two%20people%20having%20a%20calm%20and%20respectful%20conversation,%20shaking%20hands'
                        alt='Comunicación asertiva'
                        className='w-32 h-32 md:w-40 md:h-40 rounded-full shadow-md object-cover'
                    />
                    <div>
                        <h2 className='text-2xl font-semibold text-purple-600 mb-2'>
                            🔹 Comunicación asertiva
                        </h2>
                        <p>
                            Este es el estilo más equilibrado y positivo. La
                            persona expresa lo que piensa y siente con respeto,
                            sin dañar a nadie. Escucha, entiende y busca
                            soluciones. Es la mejor forma de comunicarse y,
                            sinceramente, algo que todos deberíamos practicar
                            más.
                        </p>
                    </div>
                </div>

                {/* Cierre reflexivo */}
                <div className='mt-16 border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-md shadow-sm'>
                    <p className='italic text-gray-700 text-lg'>
                        Cada tipo de comunicación tiene un impacto diferente en
                        las personas. A veces usamos uno sin darnos cuenta, pero
                        lo bueno es que siempre podemos mejorar. Entender cómo
                        nos comunicamos es clave para tener relaciones más
                        sanas, ya sea con amigos, familia, compañeros o incluso
                        con nosotros mismos.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Tipos;
